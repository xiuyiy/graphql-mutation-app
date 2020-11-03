const db = require('./db')
const Mutation = {
    createStudent: (root, args, context, info) => {
        return db.students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
        })
    },

    // new resolver function
    addStudent_returns_object: (root, args, context, info) => {
        const id = db.students.create({
            collegeId: args.collegeId,
            firstName: args.firstName,
            lastName: args.lastName
        })
        return db.students.get(id)
    }
}
const Query = {
    greeting: () => "hello",
    studentById: (root, args, context, info) => {
        return db.students.get(args.id)
    }
}

//for each single student object returned,resolver is invoked
const Student = {
    college: (root) => {
        return db.colleges.get(root.collegeId);
    }
}
module.exports = { Query, Mutation, Student }