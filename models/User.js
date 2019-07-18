import bcrypt from 'bcryptjs';
import { sign } from '../passport';

class User {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use this model');
      this.User = schema;
   }

   async login(req_body) {
      const { username, password } = req_body;
      const response = await this.User.findOne({ username });

      if (!response)
         throw new Error('That username does not exist.');

      const passwordValid = this.checkPassword(password, response.password);
      if (passwordValid) {
         const { _id, email, first_name, last_name, username } = response;
         const token = sign({ id: _id, username, });
         const user = { _id, email, first_name, last_name, username };
         return { token, user };
      } else {
         throw new Error('Who you tryin\' to fool? That ain\'t yo password!');
      }
   }

   async register(req_body) {
      const { username, email } = req_body;
      
      this.validateUsername(username);
      this.checkUsernameAvailble(username);      
      this.validateEmail(email);
      this.checkEmailAvailable(email);

      const password = this.hashPassword(req_body.password);
      req_body.password = password;
      const { _id } = await this.User.create(req_body);

      const token = sign({
         id: _id,
         username,
      });
      const user = { _id, username }

      return { token, user };
   }
   
   async updateUser(req_body, req_user) {
      if (req_body.username && req_body.username !== req_user.username) {
         this.validateUsername(req_body.username);
         this.checkUsernameAvailble(req_body.username);
      }
      if (req_body.email && req_body.email !== req_user.email) {
         this.validateEmail(req_body.email);
         this.checkEmailAvailable(req_body.email);
      }

      const response = await this.User.findByIdAndUpdate(req_user.id, req_body, { new: true });
      const { _id, username, email, first_name, last_name } = response;
      const user = { _id, username, email, first_name, last_name }

      return user;
   }

   async updatePassword(req_body, req_user) {
      const { id, password } = req_user;
      const { current_password, new_password } = req_body;
      const passwordValid = this.checkPassword(current_password, password);

      if (passwordValid) {
         const pw = this.hashPassword(new_password);
         const response = await this.User.findByIdAndUpdate(id, { password: pw });
         const { _id, username, email, first_name, last_name } = response;
         const user = { _id, username, email, first_name, last_name };
         return user;
      } else {
         throw new Error('Current password provided is incorrect.')
      }
   }

   validateUsername(username) {
      const test = /^[a-zA-Z0-9]+$/.test(username);
      if (!test)
         throw new Error('username invalid');
      return;
   }

   async checkUsernameAvailble(username) {
      const check = await this.User.findOne({ username })
      if (check)
         throw new Error('username taken');
      return;
   }

   validateEmail(email) {
      const test = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
      if (!test)
         throw new Error('email invalid');
      return;
   }

   async checkEmailAvailable(email) {
      const check = await this.User.findOne({ email });
      console.log('check:::', check);
      if (check)
         throw new Error('email has already been used');
      return;
   }

   checkPassword(input_password, password) {
      return bcrypt.compareSync(input_password, password);
   }

   hashPassword(plain_text_password) {
      return bcrypt.hashSync(plain_text_password, bcrypt.genSaltSync(10), null);
   }
}

export default User;