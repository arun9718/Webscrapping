const jsdom =require("jsdom");
const JSDOM = jsdom.JSDOM;
const fs=require("fs");
//1.provide html content in string format
let htmlContent = fs.readFileSync("examplehtml.html","utf-8");
let dom = new JSDOM(htmlContent);
//2. create document
let document = dom.window.document;

//3.logic -> help to get your html element if we pass the selector
//css selector -> first occurence of that html htmlContent
document.querySelector("p");
//css selector -> all the occurences of that html htmlContent
//return array
var h1s=document.querySelectorAll("p");
console.log(h1s.length);
console.log(h1s[0].textContent);
