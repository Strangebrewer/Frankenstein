import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
   userId: { type: Schema.Types.ObjectId },
   projectId: { type: Schema.Types.ObjectId },
   image: String,
   imageId: String,
   largeImage: String,
   midImage: String,
   thumbnail: String,
   published: { type: Boolean, default: false },
   publicId: String,
   title: String,
   subtitle: String,
   text_order: { type: String, require: true, default: '[]' },
   texts: [{
      type: Schema.Types.ObjectId,
      ref: "Text"
   }]
},
   {
      timestamps: true
   }
);

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;