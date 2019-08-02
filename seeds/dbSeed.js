import 'dotenv/config';
import '../connection';
import bcrypt from 'bcryptjs';
import UserSchema from "../models/UserSchema";
import ProjectSchema from "../models/DragonWriter/ProjectSchema";
import SubjectSchema from "../models/DragonWriter/SubjectSchema";
import TextSchema from "../models/DragonWriter/TextSchema";
import ImageSchema from "../models/DragonWriter/ImageSchema";

const pw = bcrypt.hashSync("1234", bcrypt.genSaltSync(10), null);

const userSeed = [
   {
      username: "Narf",
      url: "narf",
      password: pw,
      email: "BKAShambala@gmail.com",
      projects: [],
      project_order: '[]'
   },
   {
      username: "Feck",
      url: "feck",
      password: pw,
      email: "adcatcher73@gmail.com",
      projects: [],
      project_order: '[]'
   },
];

const projectSeed = [
   {
      userId: '',
      title: "New Novel",
      link: "novel",
      subtitle: "Write a novel, yo.",
      subjects: [],
      texts: [],
      subject_order: '[]',
      image: '',
      largeImage: '',
      publicId: ''
   },
   {
      userId: '',
      title: "Journal",
      link: "journal",
      subtitle: "Write my thoughts and experiences...",
      subjects: [],
      texts: [],
      subject_order: '[]',
      image: '',
      largeImage: '',
      publicId: ''
   },
   {
      userId: '',
      title: "To Do List",
      link: "todo",
      subtitle: "A to-do list that's customizable and easy to use.",
      subjects: [],
      texts: [],
      subject_order: '[]',
      image: '',
      largeImage: '',
      publicId: ''
   }
];

const subjectSeed = [
   {
      title: "Scene Ideas",
      subtitle: "Ideas for character development, plot progression, plot twists, revealing character traits, etc.",
      texts: [],
      text_order: '[]'
   },
   {
      title: "Philosophy",
      subtitle: "Philosophical underpinnings of the story or of parts of the story.",
      texts: [],
      text_order: '[]'
   },
   {
      title: "Story Snippets",
      subtitle: "Pieces of writing that may or may not make it into the final story.",
      texts: [],
      text_order: '[]'
   },
];

function buildText(i) {
   return (
      JSON.stringify({
         "document": {
            "nodes": [
               {
                  "object": "block",
                  "type": "paragraph",
                  "nodes": [
                     {
                        "object": "text",
                        "leaves": [
                           {
                              "text": textStrings[i]
                           }
                        ]
                     }
                  ]
               }
            ]
         }
      })
   )
}

const textStrings = [
   "Some people don't think it be like it is, but it do.",
   "Dolla dolla bill, y'all.",
   "That was the fucking stupidest thing I've heard all year.",
   "Love is the answer. And you know that for sure."
]

const textSeed = [
   {
      title: "This is a Text",
      subtitle: "This text is awesome!",
      errant: false,
      text: buildText(0)
   },
   {
      title: "This also is a Text",
      subtitle: "This text is amazing!",
      errant: false,
      text: buildText(1)
   },
   {
      title: "This Text lost its shoe and she don't know where she put it.",
      subtitle: "This text is sad!",
      errant: false,
      text: buildText(2)
   },
   {
      title: "This Text made me cry.",
      subtitle: "This text is a jerk!",
      errant: false,
      text: buildText(3)
   }
]

async function seedDb() {
   try {
      // empty all collections:
      await UserSchema.deleteMany({});
      await ProjectSchema.deleteMany({});
      await SubjectSchema.deleteMany({});
      await TextSchema.deleteMany({});
      await ImageSchema.deleteMany({});

      // insert users and assign to variable:
      const users = await UserSchema.collection.insertMany(userSeed);
      // add user id to each seed project:
      projectSeed.forEach(project => {
         project.userId = users.ops[0]._id;
      });

      // insert projects and assign to variable:
      const projects = await ProjectSchema.collection.insertMany(projectSeed)
      // extract project ids:
      const projectIds = projects.ops.map(project => project._id);
      // add project ids to user projects array:
      const thisUser = await UserSchema.findOneAndUpdate(
         { _id: users.ops[0]._id },
         {
            $push: { projects: { $each: projectIds } },
            $set: { project_order: JSON.stringify(projectIds) }
         },
         { new: true }
      );
      // log the user to verify:
      console.log("***********User with projects added:*************");
      console.log(thisUser);

      // add user id and project id to each seed subject:
      subjectSeed.forEach(subject => (
         subject.userId = users.ops[0]._id,
         subject.projectId = projects.ops[0]._id
      ));

      let subject_order = [];
      // insert subjects and assign to variable:
      const subjects = await SubjectSchema.collection.insertMany(subjectSeed);
      // extract subject ids:
      const subjectIds = subjects.ops.map(subject => subject._id);
      // add subject ids to project subjects array:
      const thisProject = await ProjectSchema.findOneAndUpdate(
         { _id: projects.ops[0]._id },
         {
            $push: { subjects: { $each: subjectIds } },
            $set: { subject_order: JSON.stringify(subjectIds) }
         },
         { new: true }
      );

      textSeed.forEach(async (text, i) => {
         text.userId = users.ops[0]._id,
            text.projectId = projects.ops[0]._id,
            text.subjectId = subjects.ops[0]._id
      })

      const texts = await TextSchema.collection.insertMany(textSeed);
      const textIds = texts.ops.map(text => text._id);

      const this_subject = await SubjectSchema.findByIdAndUpdate(subjects.ops[0]._id, {
         $push: { texts: { $each: textIds } },
         $set: { text_order: JSON.stringify(textIds) }
      }, { new: true });

      await ProjectSchema.findByIdAndUpdate(projects.ops[0]._id, {
         $push: { texts: { $each: textIds } }
      }, { new: true });


      // KEEP THESE COMMENTED OUT FOR NOW, BUT PUT THEM BACK IN WHEN YOU'RE READY TO START WITH AN EMPTY DATABASE
      // IF YOU DON'T USE THE DB UP FRONT, THEN ANY 'populate('field_name')' methods will return an error
      // about the Schema not being registered
      // await TextSchema.remove({});
      // await ProjectSchema.remove({});
      // await SubjectSchema.remove({});

      // log insertion counts:
      console.log("***********Aaaaaand, here's your insert counts:*************");
      console.log(users.insertedCount + " user records inserted!");
      console.log(projects.insertedCount + " project records inserted!");
      console.log(subjects.insertedCount + " subject records inserted!");
      console.log(texts.insertedCount + " text records inserted!");

      // exit:
      process.exit(0);
   } catch (e) {
      console.log('error:::', e);
      process.exit(1);
   }
};

// call the function:
seedDb();