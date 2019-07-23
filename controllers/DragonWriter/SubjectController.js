import Subject from '../../models/DragonWriter/Subject';
import SubjectSchema from '../../models/DragonWriter/SubjectSchema';

const subject_model = new Subject(SubjectSchema);

export async function index(req, res) {
   console.log('req.params:::', req.params);
   try {
      const subjects = await SubjectSchema.find({ projectId: req.params.project_id });
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