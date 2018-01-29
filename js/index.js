var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	fs.readFile("json.json",function(err,data){
		res.setHeader("Access-control-Allow-Origin","*");
		res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
		if(err){
			res.write("404找不到");
		}else{
			res.write(data);
		}
		res.end();
	})
}).listen(8886);
