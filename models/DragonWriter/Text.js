class Text {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Text model');
      this.Text = schema;
   }
}

export default Text;