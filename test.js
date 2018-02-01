/*//console.log("hello world");

var testfunc=require('./other');  //return object of module.exports

var ob=testfunc();

ob.name="hello";
console.log(ob.name);

var ob1=testfunc();

console.log(ob1.name);
*/



/*//read and write 

var fs=require('fs');

fs.writeFileSync('data.txt',"who are youss");

console.log("write successfull");


var text=fs.readFileSync("data.txt");

console.log(text.toString());

*/




/*
var path=require('path');

var filepath="C:\Users\/\///student\Desktop\js";

console.log(path.normalize(filepath)); // fix the path string accoriding to operating system and returns path
*/

var requestHandler=function(request,response)
{
	
	var fs=require('fs');
	/*
	(request.url == '/hello')
	{
		response.write("<h1>you entered</h1> :"+request.url);
	}
	
	console.log("url is: "+request.url);
	
	console.log("error occured"); //shows message in console
	//response.write("hello");      //shows message in webpage
	response.end();               // mendatory to show response
	*/
	
	
	fs.createReadStream('some.html').pipe(request);
} 


var http = require('http');
var port=3000;
var server = http.createServer(requestHandler);


server.listen(port);
console.log('server started at port '+port);










