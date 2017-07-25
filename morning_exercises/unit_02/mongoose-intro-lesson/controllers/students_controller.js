var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

router.get('/', () => {
    //GET route//
    StudentModel.find({})
        .then(function(err, students) {
            if (err) {
                console.log(err);
                return;
            }

            // Response.render('students', {
            //     students: students
        });
});

router.get('/:id', (request, response) => {

            const studentId = request.params.id;

            StudentModel.findById(studentId)
                .then((student) => {
                    request.render('students/show', {
                        student: student
                    })
                })
                .catch((error) => {
                    console.log(error);
                })




            // var studentsController = {
            //     index: function() {
            //         StudentModel.find({})
            //             .exec(function(err, students) {
            //                 if (err) {
            //                     console.log(err);
            //                     return;
            //                 }

            //                 students.forEach(function(student) {
            //                     console.log(student);
            //                 });
            //             });
            //     }
            // };

            studentsController.index();