var fs = require('fs'); 

function read(file, cb) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (!err) {
        console.log('here')
    } else {
        console.log(err)
    }
  });
}

read(__dirname+ '/source', function(data) {
    var temperatures = [];
    for(var temp in data){
      temperatures.push(+data[temp].match(/\<div class="SortTable-col SortTable-data text-nowrap align-center">(.*?(?=<))<\/div>/g));
    }
    //your 'loop' logic goes here, y = temperatures
    console.log(temperatures);
  });   