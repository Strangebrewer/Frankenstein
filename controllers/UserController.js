import User from '../models/User';
import UserSchema from '../models/UserSchema';

const user_model = new User(UserSchema);

export async function getCurrentUser(req, res) {
   try {
      const response = await UserSchema.findById(req.user.id);

      const { _id, username, email, first_name, last_name } = response;
      const user = { _id, username, email, first_name, last_name };

      res.json(user);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function register(req, res) {
   try {
      const user = await user_model.register(req.body);
      res.json(user);
   } catch (e) {
      console.log(e);
      res.status(418).send({
         error: e.message
      });
   }
}

export async function login(req, res) {
   try {
      const response = await user_model.login(req.body);

      const { _id, username, email, first_name, last_name } = response.user;

      const user = { _id, username, email, first_name, last_name };
      const user_data = { user, token: response.token };

      res.json(user_data);
   } catch (e) {
      console.log(e);
      res.status(418).send({
         error: e.message
      });
   }
}

export async function put(req, res) {
   try {
      if (req.body.project_order) {
         req.body.project_order = JSON.stringify(req.body.project_order);
      }
      console.log('req.body:::', req.body);
      const user = await user_model.updateUser(req.body, req.user);
      res.json(user);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function updatePassword(req, res) {
   try {
      const user = await user_model.updatePassword(req.body, req.user);
      res.json(user);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function remove(req, res) {
   try {
      const user = await UserSchema.findByIdAndDelete(req.params.id);
      res.json(user);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}