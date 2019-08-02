class Text {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Text model');
      this.Text = schema;
   }

   async findTexts(user_id) {
      const texts = await this.Text.find({ userId: user_id });

      const text_object = {};

      for (let i = 0; i < texts.length; i++) {
         const text = texts[i];
         text_object[text._id] = text;
      }

      return text_object;
   }
}

export default Text;