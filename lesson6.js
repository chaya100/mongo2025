db.getCollection("books").find({})

//6
db.books.deleteMany({categories:{$exists:false}})

//8
db.books.find({authors:{$in:[/Robi/,/sen/]}})

//9
db.books.find({authors:{$in:[/a/]}},{title:1,longDescription:1})

//10
db.books.find({categories:['XML','Internet']})

//11
db.books.find({categories:{$all:['XML','Internet']}})

//12
db.books.find({authors:[]}).count()

//13
db.books.find({"authors.'2":[]}).count()

//14
