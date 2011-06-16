Scblogger.BlogsProxy = SC.Object.create({
          getResponse: function(data) {
               result = new Array();
               if (data.length == undefined)
               {
								console.log("data....");
                    array_name = 'data.blog';
                    eval(array_name).guid = eval(array_name).id;
                    result.push(eval(array_name));
               }
               else
               {
								console.log("data....");
                    for(var i=0; i<data.length; i++) {
                         array_name = 'data[i].blog';
                         eval(array_name).guid = eval(array_name).id;
                         result.push(eval(array_name));
                    }  
               }
               return result;
          } 
     }) ;

