class Subject {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Subject model');
      this.Subject = schema;
   }

   async findSubjects(user_id) {
      const subjects = await this.Subject.find({ userId: user_id });
      
      const subject_object = {};
      
      for (let i = 0; i < subjects.length; i++) {
         const subject = subjects[i];
         subject_object[subject._id] = subject.toObject();
         subject_object[subject._id].text_order = JSON.parse(subject.text_order);
      }

      return subject_object;
   }

}

export default Subject;