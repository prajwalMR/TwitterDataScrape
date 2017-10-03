express = require("express");
app = express();
bodyParser = require("body-parser");
var twitter = require('twitter');

TweetCount = 0;

SCORE = 0;


 //app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// NEGATION = {'hardly' : 'hardly' , 'lack' : 'lack' , 'lacking' : 'lacking' , 'lacks' : 'lacks' , 'neither' : 'neither' , 'nor' : 'nor' , 'never' : 'never' , 'no' : 'no' , 'nobody' : 'nobody' , 'none' : 'none' , 'nothing' : 'nothing' , 'nowhere' : 'nowhere' , 'not' : 'not' , 'aint' : 'aint' , 'cant' : 'cant' , 'cannot' : 'cannot' , 'darent' : 'darent' , 'dontdoesnt' : 'dontdoesnt' , 'didnt' : 'didnt' , 'hadnt' : 'hadnt' , 'hasnt' : 'hasnt' , 'havnt' : 'havnt' , 'havent' : 'havent' , 'isnt' : 'isnt' , 'mightnt' : 'mightnt' , 'mustnt' : 'mustnt' , 'neednt' : 'neednt' , 'oughtnt' : 'oughtnt' , 'shant' : 'shant' , 'shouldnt' : 'shouldnt' , 'wasnt' : 'wasnt' , 'wouldnt' : 'wouldnt' , 'without' : 'without' }
	
// TweeTer = "I am a good person"
// var SplitTweet = TweeTer.split(" ");
// 	 for(i = 0; i< SplitTweet.length ; i++){
// 	 	var X =   SplitTweet[i] 
// 	 	// var  Y = "good"
// 	 	// console.log("X : " + X + "Y" + Y)
// 	 	console.log(X + " : " + POSITIVE[X])
	 	

// 	 	if(String(POSITIVE.X) != "undefined"){
// 	 		console.log("MATCH FOUND")
// 	 		SCORE++

// 	 	}
// 	 }
// 	console.log(SCORE)



	CONSUMER_KEY = 'LLXOX6cyFBoi9maDX23PGDA5C',
	CONSUMER_SECRET = 'sMPMGgRjXVZBJIFp6t0Lvm1rrxkviNIUy32XrMPdngC7g7khgv' , 
	ACCESS_TOKEN_KEY = '564677316-APgKA7NHZTxAfQcVGod2V6ieSHnWctFg2iML8SGB' , 
	ACCESS_TOKEN_SECRET = 'vqaNhV1vFQVnxQM3YusRI4v2sTjX9t6LTiOuOmAtgppBw'


 client = new twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET
});


//app.use("/", express.static("."));


app.post('/analyzeTweet' , function(req , res){
	//console.log(req.body.Data);
	//twit.get('http://api.twitter.com/1.1/statuses/user_timeline.json?count=2',{include_entities:false});
// 	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//    console.log(tweets);
// });

})

// client.stream('filter' , {track: 'Computers'} , function(){
// 	stream.on('data', function(data){
// 		console.log(data);
// 		stream.destroy();
// 	})
// })

var stream = client.stream('statuses/filter', {track: '#modi'});
stream.on('data', function(event) { 
	var TweeT = event.text;
	var TweetId = event.id;
	var Location = event.user.location;
	var userId = event.user.id;
	var NAME = event.user.name;
	var DATE = event.user.created_at;

	if(NAME != undefined){
		
		

		  console.log("Tweet : "+ TweeT +"\n"+ "TweetId : " + TweetId + "\n" + "Tweeted by : " + NAME +"\n"+ "Country : " +Location+"\n" + "Date : "+ DATE +"\n"+"\n"+"Count" +TweetCount+++ "\n\n\n");
		 
	}

	else{

		NAME = "UNDIFINED"
		  console.log("Tweet : "+ TweeT +"\n"+ "TweetId : " + TweetId + "\n" + "Tweeted by : " + NAME +"\n"+ "Country : " +Location+"\n" + "Date : "+ DATE +"\n"+"\n"+"Count" +TweetCount+++ "\n\n\n");

	}

	

	

	console.log("--------------------------------------------------------------")

});
 
stream.on('error', function(error) {
  throw error;
});


app.listen(3000 , function(){
	console.log("listening on port 3000")
});
