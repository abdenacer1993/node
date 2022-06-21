const process = require('process');
var args =process.argv;
var sum=0;
for (var i=2;i<args.length;i++){
sum = sum+Number(args[i])
}
console.log(sum)