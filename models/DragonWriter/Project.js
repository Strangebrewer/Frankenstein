class Project {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Project model');
      this.Project = schema;
   }
}

export default Project;