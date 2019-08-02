import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const textSchema = new Schema({
   userId: { type: Schema.Types.ObjectId },
   projectId: { type: Schema.Types.ObjectId },
   subjectId: { type: Schema.Types.ObjectId },
   imageId: String,
   image: String,
   largeImage: String,
   midImage: String,
   thumbnail: String,
   publicId: String,
   text: { type: String, required: true },
   title: { type: String, required: true },
   subtitle: { type: String, required: true },
   errant: { type: Boolean, default: true }
},
   {
      timestamps: true
   }
);

const Text = mongoose.model('Text', textSchema);

export default Text;