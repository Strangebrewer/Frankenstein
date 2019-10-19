import Project from '../../models/DragonWriter/Project';
import ProjectSchema from '../../models/DragonWriter/ProjectSchema';
import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';

const project_model = new Project(ProjectSchema);
const subject_model = new Subject(SubjectSchema);

export async function index(req, res) {
   try {
      const subjects = await subject_model.findSubjects(req.user._id);
      res.json(subjects);
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
      const subject = await SubjectSchema.create(req.body);
      await project_model.addSubjectToProject(req.body.projectId, subject._id);
      res.json('Success.');
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function put(req, res) {
   try {
      if (req.body.text_order) {
         req.body.text_order = JSON.stringify(req.body.text_order);
      }
      const subject = await SubjectSchema.findByIdAndUpdate(
         req.params.id, req.body, { new: true }
      )

      res.json(subject);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function remove(req, res) {
   try {
      const subject = await SubjectSchema.findByIdAndRemove(req.params.id);
      await project_model.removeSubjectFromProject(req.params.id, subject.projectId);
      res.json("Success.");
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}