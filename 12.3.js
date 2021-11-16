const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    return this[type + "s"].find((el) => el.id === id);
  },
  assignStudent: function (id, subject) {
    const student = this.findPerson("student", id);
    const teachers = this.teachers.filter(
      (teacher) =>
        teacher.subjects.includes(subject) && teacher.capacityLeft > 0
    );
    if (teachers.length === 0) {
      console.log("Sorry,no available teachers left.");
    } else {
      teachers[0].students.push(student);
      // console.log("result----", teachers[0]);
    }
    return ""; //avoid undefined
  },
  assignTeachersSubject: function (id, subject) {
    const teacher = this.findPerson("teacher", id);
    teacher.subjects.push(subject);
    // console.log("subject;", teacher);
  },
  teachersInTheSchool: function () {
    const teachersList = this.teachers.map((teacher) => teacher.name);
    return teachersList;
  },
};
console.log(school.findPerson("student", 10));
console.log(school.assignStudent(10, "biology"));
console.log(school.assignTeachersSubject(1, "programming"));
console.log(school.teachersInTheSchool());
