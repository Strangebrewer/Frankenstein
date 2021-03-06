import Project from '../../models/DragonWriter/Project';
import ProjectSchema from '../../models/DragonWriter/ProjectSchema';
import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';
import Text from '../../models/DragonWriter/Text';
import TextSchema from '../../models/DragonWriter/TextSchema';
import User from '../../models/User';
import UserSchema from '../../models/UserSchema';

const project_model = new Project(ProjectSchema);
const subject_model = new Subject(SubjectSchema);
const text_model = new Text(TextSchema);
const user_model = new User(UserSchema);

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
      req.body.userId = req.user._id;
      const project = await ProjectSchema.create(req.body);
      await user_model.addProjectToUser(project._id, req.user);
      res.json(project);
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
      user_model.removeProjectFromUser(req.params.id, req.user);
      await SubjectSchema.deleteMany({ projectId: req.params.id });
      await TextSchema.deleteMany({ projectId: req.params.id });
      await ProjectSchema.findByIdAndDelete(req.params.id);
      res.status(200).send('Project successfully deleted.');
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}