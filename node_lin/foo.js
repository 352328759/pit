// module.paths.push("D:\\node\\node_global\\node_modules")
// module.paths.push("C:\\Users\\0200048\\AppData\\Roaming\\npm\\node_modules")
// console.log(module.paths)
// console.log("module.paths 的路径可以在代码中 push 添加")

// var _ = require('underscore');
// var express = require('express');
// var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test", function (err) {
    if (!err) {
        console.log('connected to MongoDB');
    } else {
        throw err;
    }
});
