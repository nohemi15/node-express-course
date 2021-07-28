const express = require('express');
const app = express();

app.listen(8000, function(){
	console.log("server is running")
})

const mockUserData = [
{ name: 'Mark'},
{ name: 'Jill'}

]

app.get('/users:id', function(req, res){
	res.json({
		success: true,
		massage: 'successfully got users. Nice!',
		users: req.params.id
	})
})

app.listen(8000, function(){console.log('server is listening')})
