var fs= require('fs');
var path=require('path')
var dirPath = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(dirPath, function(err, list) {
  if (err){ return err};
  list.forEach((file)=> {if (extension==path.extname(file)) {
    console.log(file)}})})