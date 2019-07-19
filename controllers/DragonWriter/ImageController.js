import Image from '../../models/DragonWriter/Image';
import ImageSchema from '../../models/DragonWriter/ImageSchema';

const image_model = new Image(ImageSchema);

export async function index(req, res) {
   try {

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