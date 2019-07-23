import Text from '../../models/DragonWriter/Text';
import TextSchema from '../../models/DragonWriter/TextSchema';

const text_model = new Text(TextSchema);

export async function index(req, res) {
   try {
      const texts = await TextSchema.find({ projectId: req.params.project_id });
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