var fs = require("fs");
var JavaScriptObfuscator = require("javascript-obfuscator");

fs.readFile('./index.ts', "UTF-8", function(err, data) {
    if(err){
        console.log('Error')
        throw new err;
    }
 
  
var obfuscationResult = JavaScriptObfuscator.obfuscate(data);

fs.writeFile('./index-obfuscated.js', obfuscationResult.getObfuscatedCode(), function(err){
    if(err){
         console.log(err)
         throw new err;
    }
    console.log('done')
})
})
