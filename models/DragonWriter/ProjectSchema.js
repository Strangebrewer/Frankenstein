import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
   userId: { type: Schema.Types.ObjectId },
   title: { type: String, required: true },
   link: { type: String, required: true },
   image: String,
   imageId: String,
   published: [{
     type: Schema.Types.ObjectId,
     ref: "Subject"
   }],
   largeImage: String,
   midImage: String,
   thumbnail: String,
   publicId: String,
   subtitle: String,
   subjects: [{
     type: Schema.Types.ObjectId,
     ref: "Subject"
   }],
   texts: [{
     type: Schema.Types.ObjectId,
     ref: "Text"
   }],
   subject_order: String
 },
   {
     timestamps: true
   }
 );
 
 const Project = mongoose.model('Project', projectSchema);

 export default Project;