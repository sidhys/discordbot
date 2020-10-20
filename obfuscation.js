var fs = require("fs");
var JavaScriptObfuscator = require("javascript-obfuscator");

fs.readFile('./index.js', "UTF-8", function(err, data) {
    if(err){
        console.log('Error')
        throw err;
    }
 
  
var obfuscationResult = JavaScriptObfuscator.obfuscate(data);

fs.writeFile('./index-obfuscated.js', obfuscationResult.getObfuscatedCode(), function(err){
    if(err){
        return console.log(err)
    }
    console.log('done')
})
})
