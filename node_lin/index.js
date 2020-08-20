// https://blog.csdn.net/chrunlee/article/details/106218653
// 微信dat查看器

// 500k 以内 https://blog.9035shop.cn

// npm install async

//修改图片
//修改图片
let fs = require("fs");
let path = require("path");
let async = require("async");
const { isBuffer } = require("util");

function datToImg() {

	//值是多少自己算。
	let base = 0xFF;
	let next = 0xD8;
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
	files.forEach(function (item) {
		// if (path.extname(item) == ".dat") {
		arr.push(item);
		// }
	})
	async.mapLimit(arr, 50, function (item, cb) {
		convert(item, cb);
	}, function () {
		process.exit(0);
	})
	//convert
	function convert(item, cb) {
		let absPath = path.join(scanDir, item);
		// let imgPath = path.join(imgDir, item + ".jpg");
		let imgPath = path.join(imgDir, item)
		// let imgPath = path.join(imgDir, item.split(".").slice(0, -1).join("."))
		fs.readFile(absPath, (err, content) => {
			if (err) {
				console.log(err);
				cb(err);
			}
			// let firstV = content[0],
			// 	nextV = content[1],
			// 	jT = firstV ^ base,
			// 	jB = nextV ^ next,
			// 	gT = firstV ^ gifA,
			// 	gB = nextV ^ gifB,
			// 	pT = firstV ^ pngA,
			// 	pB = nextV ^ pngB;
			// var v = firstV ^ base;
			// if (jT == jB) {
			// 	v = jT;
			// 	imgPath += ".jpg"
			// } else if (gT == gB) {
			// 	v = gT;
			// 	imgPath += ".gif"
			// } else if (pT == pB) {
			// 	v = pT;
			// 	imgPath += ".png"
			// }

			// let bb = content.map(br => {
			// 	return br ^ v
			// })
			let bb
			console.log(content.slice(content.length-10))
			// console.log(JSON.stringify(content))
			// console.log(content.length)
			console.log(imgPath)
			if (content[0] == 86) {
				// 10:86;16:56
				console.log("n")
				// let buf = Buffer.from('474946383961f000f000', "hex");
				// let buf2 = content.slice(6)
				// bb = Buffer.concat([buf, buf2], buf.length + buf2.length)
				// bb = content.map(br => {
				// 	return br ^ v
				// })
				// bb = content.splice(0, 6)
			} else if (content[0] == 71) {
				// 10:71;16:47
				console.log("gif")
				bb = content
			}

			console.log(bb)
			// fs.writeFileSync(imgPath+".gif", bb)
			cb(null);
		})
	}
}
datToImg()

// var buf = Buffer.from('474946383961f000f000', "hex");
// var buf = Buffer.from('47', "hex");
// var buf2 = Buffer.from('49', "hex");
// console.log(Buffer.concat([buf, buf2], 2))