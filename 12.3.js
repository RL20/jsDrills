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
    return this[type].find((el) => el.id === id);
  },
  assignStudent: function (id, subject) {
    const student = this.students.find((el) => el.id === id);
    const teachers = this.teachers.filter(
      (teacher) =>
        teacher.subjects.includes(subject) && teacher.capacityLeft > 0
    );
    teachers
      ? teachers.find((el) => max(el.capacityLeft))
      : "Sorry,no available teachers left.";
  },
  findStudent: function (id) {
    const student = this.students.find((el) => el.id === id);
  },
};
console.log(school.findPerson("students", 10));
