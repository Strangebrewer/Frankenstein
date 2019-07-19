class Subject {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Subject model');
      this.Subject = schema;
   }
}

export default Subject;