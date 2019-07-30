import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';

const subject_model = new Subject(SubjectSchema);

export async function index(req, res) {
   try {
      const subjects = subject_model.findSubjects(req.user._id);
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
      console.log('req.body in subject controller put:::', req.body);
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

   } catch (e) {
      console.log(e);
      res.status(500).send({
         error: e.message
      });
   }
}