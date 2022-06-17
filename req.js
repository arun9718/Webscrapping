// first step -> npm i request
const request= require("request");
const fs = require("fs");
let url = "https://www.google.com";

const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

//how does request works
//1. request to given url
//2. response -> request function -> cb call -> data put

request(url,cb);

//error :- if there is any error from the request
//response :- header + body
//body :- html
function cb(error,response,body){
  // console.log("error : ",error);// Print the error if one occured
  // console.log("statusCode :", response && response.statusCode);//print the status code if a respons
  // //ponse was received
  // console.log("body :", body);

  if(error){
    console.log("error :",error.message);
  }
  else if(response && response.statusCode == 404)
  {
    console.log("page not found");
  }
  else{
    extractHTML(body);

  }
}

function extractHTML(html){
  let dom = new JSDOM(html);
  let document = dom.window.document;

  let languages = document.querySelectorAll("#SIvCob a");
  //we get languages array with all the supported languages by google

  for(let i=0;i<languages.length;i++){
    let language = languages[i].textContent;
    console.log("language :"+language);
  }

}
