var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
 var friendName = req.query.name;
	var friendDescription = req.query.description;
	var newFriend =
		{
			"name": friendName,
			"description": friendDescription,
			"imageURL": "https://placebeard.it/400/400"
		}
	console.log(newFriend);
	data.friends.push(newFriend);
	res.render('index', data);
 }
