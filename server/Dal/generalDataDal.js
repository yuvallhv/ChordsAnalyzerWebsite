const jsonfile = require('jsonfile')
exports.readJsonData =  function()
{  
     return new Promise((resolve,reject)=>
     {
            var csvEncoding = { encoding: 'utf-8' }; 

         jsonfile.readFile("./Dal/general_data.json",function(err,data)
         {
             if(err)
                reject(err)
             else
                resolve(data)
         })
     })
}