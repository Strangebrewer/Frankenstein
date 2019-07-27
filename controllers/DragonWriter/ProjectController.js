import Project from '../../models/DragonWriter/Project';
import ProjectSchema from '../../models/DragonWriter/ProjectSchema';
import UserSchema from '../../models/UserSchema';

const project_model = new Project(ProjectSchema);

export async function index(req, res) {
   try {
      if (req.params.id) {
         const project = await project_model.findOneProject(req.params.id);
         res.json(project);
         return;
      }

      const projects = await project_model.findProjects(req.user._id);
      res.json(projects);
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