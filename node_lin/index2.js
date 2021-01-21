// https://blog.csdn.net/chrunlee/article/details/106218653
// 微信dat查看器

// 500k 以内 https://blog.9035shop.cn

// npm install async

//修改图片
//修改图片
let fs = require("fs");
let path = require("path");
let async = require("async");

//值是多少自己算。
let jpgA = 0xFF;
let jpgB = 0xD8;
let gifA = 0x47;
let gifB = 0x49;
let pngA = 0x89;
let pngB = 0x50;

// dat 文件夹地址
let scanDir = "dat";
// 解密后图片文件夹地址
let imgDir = "dat";
// let scanDir = "d:/ttt/load/";
// let imgDir = "d:/ttt/load1/";

let files = fs.readdirSync(scanDir);
var arr = [];
files.forEach(function(item) {
	//  if (path.extname(item) == ".dat") {
	arr.push(item);
	//  }
})
async.mapLimit(arr, 50, function(item, cb) {
	convert(item, cb);
}, function() {
	process.exit(0);
})
//convert
function convert(item, cb) {
	let absPath = path.join(scanDir, item);
	// let imgPath = path.join(imgDir, item + ".jpg");

	// .dat
	//	let imgPath = path.join(imgDir, item.split(".").slice(0, -1).join("."))

	// 无格式
	let imgPath = path.join(imgDir, item)
	fs.readFile(absPath, (err, content) => {
		if(err) {
			console.log(err);
			cb(err);
		}
		console.log(content.length)
		//		console.log(content)
		if(content[0] == 86 || content[0] == 111) {
			//			console.log(content.slice(6))
			console.log(content.slice(1023 + 7))
		} else {
			//			console.log(content)
			console.log(content.slice(1023))
		}
		return 1

		let firstV = content[0],
			nextV = content[1],
			jT = firstV ^ jpgA,
			jB = nextV ^ jpgB,
			gT = firstV ^ gifA,
			gB = nextV ^ gifB,
			pT = firstV ^ pngA,
			pB = nextV ^ pngB;
		//		var v = firstV ^ jpgA;
		var v = 0;
		if(jT == jB) {
			v = jT;
			imgPath += ".jpg"
		} else if(gT == gB) {
			v = gT;
			imgPath += ".gif"
		} else if(pT == pB) {
			v = pT;
			imgPath += ".png"
		}

		console.log(v)
		let bb = content.map(br => {
			//			console.log(br ^ v)
			//			return br
			return br ^ v
		})
		console.log(imgPath)
		fs.writeFileSync(imgPath, bb)
		cb(null);
	})
}