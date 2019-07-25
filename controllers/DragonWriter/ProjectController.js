import Project from '../../models/DragonWriter/Project';
import ProjectSchema from '../../models/DragonWriter/ProjectSchema';
import UserSchema from '../../models/UserSchema';

const project_model = new Project(ProjectSchema);

export async function index(req, res) {
   try {
      const projects = await ProjectSchema.find({ userId: req.user._id });
      const user_response = await UserSchema.findById(req.user._id);
      const user = user_response.toObject();
      const project_object = { project_order: JSON.parse(user.project_order) };
      for (let i = 0; i < projects.length; i++) {
         const project = projects[i];
         project_object[project._id] = project.toObject();
         project_object[project._id].subject_order = JSON.parse(project.subject_order);
      }
      res.json(project_object);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function post(req, res) {
   try {

   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function put(req, res) {
   try {
      if (req.body.subject_order) {
         req.body.subject_order = JSON.stringify(req.body.subject_order);
      }
      console.log('req.body:::', req.body);
      const project = await ProjectSchema.findByIdAndUpdate(
         req.params.id, req.body, { new: true }
      );

      res.json(project);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function remove(req, res) {
   try {

   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}