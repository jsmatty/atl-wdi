//////////// ##### MONGOOSE CONFIGURATION ##### \\\\\\\\\\\\\\\\\\\\\\\\
// usually in the server.js ///

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
    console.log("database has been connected!");
});

// Disconnect from database
db.close();
//////////////////////#################\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    unit: string
});


const StudentSchema = new Schema({
    name: {
        minLength: 1,
        maxLength: 32
    },
    age: {
        type: Number,
        validate: [(age) => {
                return age >= 18;
            },
            'Age must be greater than 18'
        ]
    },
    email: {
        required: true,
        match: /.+\@.+\..+/
    },
    level: {
        enum: ['apprentice', 'journeyman', 'master']
    },
    projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);








// var anna = new StudentModel({ name: "Anna", age: 28 });
// var project1 = new ProjectModel({ title: "memory game", unit: "JS" });

// // Now we add that project to a student's collection / array of projects.
// anna.projects.push(project1);

// // In order to save that project to the student, we need to call `.save()` on the student -- not the project.
// anna.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student + " was saved to our db!");
//   }
// });


// By adding `module.exports`, we can reference these models in other files by requiring `schema.js`.
module.exports = {
    StudentModel: StudentModel,
    ProjectModel: ProjectModel
};