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
}

export default Project;