//11
db.getCollection("catalog.books").find({
    "name": /data/i
})
//13
db.catalog.books.sort({name:1})
//14
db.catalog.books.sort({name:-1})
//15
db.catalog.books.countDocuments({name: /^j/i})
//16
db.catalog.books.sort({pageCount:1}).find().limit(10)
//17
db.catalog.books.find({categories:{$exists: false}})
//18
db.catalog.books.find({shortDescription:{$exists: true}})
//19
db.catalog.books.countDocuments({ObjectId:{$exists: true}})
//https://github.com/chaya100/mongo---lesson4.git
