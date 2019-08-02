import Text from '../../models/DragonWriter/Text';
import TextSchema from '../../models/DragonWriter/TextSchema';
import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';
import ProjectSchema from '../../models/DragonWriter/ProjectSchema';

const text_model = new Text(TextSchema);
const subject_model = new Subject(SubjectSchema);

export async function index(req, res) {
   try {
      const texts = await text_model.findTexts(req.user._id);
      res.json(texts);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function post(req, res) {
   try {
      const { subjectId, projectId } = req.body;
      req.body.userId = req.user._id;

      const text = await TextSchema.create(req.body);

      const subject = await SubjectSchema.findByIdAndUpdate(subjectId, {
         $push: { texts: text._id }
      }, { new: true });

      const text_order = JSON.parse(subject.text_order);
      text_order.push(text._id);

      const re_subject = await SubjectSchema.findByIdAndUpdate(subjectId, {
         text_order: JSON.stringify(text_order)
      }, { new: true });

      ProjectSchema.findByIdAndUpdate(projectId, {
         $push: { texts: text._id }
      }, { new: true });

      const response = { text, subject: re_subject, text_order };

      res.json(response);
   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}

export async function put(req, res) {
   try {

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