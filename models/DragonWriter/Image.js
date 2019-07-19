class Image {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Image model');
      this.Image = schema;
   }
}

export default Image;