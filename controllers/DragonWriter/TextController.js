import Text from '../../models/DragonWriter/Text';
import TextSchema from '../../models/DragonWriter/TextSchema';

const text_model = new Text(TextSchema);

export async function index(req, res) {
   try {
      const texts = await TextSchema.find({ userId: req.user._id });
      const text_object = {};
      for (let i = 0; i < texts.length; i++) {
         const text = texts[i];
         text_object[text._id] = text;
      }
      res.json(text_object);
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