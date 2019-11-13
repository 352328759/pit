var mongoose = require('mongoose');

var db = mongoose.connect("mongodb://127.0.0.1:27017/test", function(err) {
	if(!err) {
		console.log('connected to MongoDB');
	} else {
		throw err;
	}
});

var TestSchema = new mongoose.Schema({
	title: {
		type: String
	},
	author: {
		type: String,
		default: 0
	},
	releaseDate: {
		type: String
	},
	keywords: {
		type: Array
	},
	time: {
		type: Date,
		default: Date.now
	},
});
var TestModel = mongoose.model("test1", TestSchema);

var TestEntity = new TestModel({
	name: "helloworld",
	age: 28,
	email: "helloworld@qq.com"
});

TestModel.find({}, function(error, doc) {
	if(error) {
		console.log("get mgdb error :" + error);
	} else {
		console.log("get mgdb");
		console.log(doc);
	}
})