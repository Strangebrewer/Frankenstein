import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';

const subject_model = new Subject(SubjectSchema);

export async function index(req, res) {
   console.log('req.params:::', req.params);
   try {
      const subjects = await SubjectSchema.find({ userId: req.user._id });
      const subject_object = {};
      for (let i = 0; i < subjects.length; i++) {
         const subject = subjects[i];
         subject_object[subject._id] = subject.toObject();
         subject_object[subject._id].text_order = JSON.parse(subject.text_order);
      }
      res.json(subject_object);
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