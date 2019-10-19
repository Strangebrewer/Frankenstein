import UserSchema from '../UserSchema';

class Project {
   constructor(schema) {
      if (!schema || typeof schema !== 'function')
         throw new Error('A valid schema must be given to use the Project model');
      this.Project = schema;
   }

   async findOneProject(project_id) {
      const project = await this.Project.findById(project_id);
      const project_json = project.toObject();
      project_json.subject_order = JSON.parse(project.subject_order);
      return project_json;
   }

   async findProjects(user_id) {
      const projects = await this.Project.find({ userId: user_id });
      const user_response = await UserSchema.findById(user_id);
      const user = user_response.toObject();
      const projects_object = { project_order: JSON.parse(user.project_order) };
      for (let i = 0; i < projects.length; i++) {
         const project = projects[i];
         projects_object[project._id] = project.toObject();
         projects_object[project._id].subject_order = JSON.parse(project.subject_order);
      }
      return projects_object;
   }

   async addSubjectToProject(project_id, subject_id) {
      const project = await this.Project.findById(project_id);
      const subject_order = JSON.parse(project.subject_order);
      subject_order.push(subject_id);
      const new_order = JSON.stringify(subject_order);
      const updated_project = await this.Project.findByIdAndUpdate(
         project_id,
         {
            subject_order: new_order,
            $push: { subjects: subject_id }
         }
      );
      return updated_project;
   }

   async removeSubjectFromProject(subject_id, project_id) {
      try {
         const project = await this.Project.findById(project_id);
         const subject_order = JSON.parse(project.subject_order);
         console.log('subject_order:::', subject_order);
         const index = subject_order.indexOf(subject_id);
         subject_order.splice(index, 1);
         const new_order = JSON.stringify(subject_order);
         console.log('new_order:::', new_order);
         const updated_project = await this.Project.findByIdAndUpdate(
            project_id,
            {
               subject_order: new_order,
               $pull: { subjects: subject_id }
            }, { new: true }
         );
         console.log('updated_project:::', updated_project);
         return updated_project;
      } catch (e) {
         throw new Error(e.message);
      }
   }
}

export default Project;