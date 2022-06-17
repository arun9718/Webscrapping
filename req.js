// first step -> npm i request
const request= require("request");
let url = "http://www.google.com";

//how does request works
//1. request to given url
//2. response -> request function -> cb call -> data put

request(url,cb);

//error :- if there is any error from the request
//response :- header + body
//body :- html
function cb(error,response,body){
  console.log("error : ",error);// Print the error if one occured
  console.log("statusCode :", response && response.statusCode);//print the status code if a respons
  //ponse was received
  console.log("body :", body);
}
