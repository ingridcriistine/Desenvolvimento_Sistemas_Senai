show databases;

use ('test');

db.student.insertOne({
    name: "Ingrid",
    age: 20,
    class: "Digital Solutions"
});

db.student.insertMany([
    {
        name: "Milena",
        age: 19,
        class: "Digital Solutions"
    },
    {
        name: "Mariana",
        age: 18,
        class: "Digital Solutions"
    }
]);

db.student.find();
db.student.find({name : "Mariana"});

db.student.find({ age: { $gt: 18 } });
db.student.find({ name: 1 });

db.student.updateOne(
    { name: "Mariana" },
    { $set:{ name: "Juliana" }}
);

db.student.deleteOne({ name: /Juliana/ })
