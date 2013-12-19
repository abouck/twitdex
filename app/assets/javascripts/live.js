$(function() {
    var socket = io.connect('http://vast-tor-5629.herokuapp.com/');
    socket.on('news', function (data) {
      console.log(data);
    });
    socket.on('data', function(data) {

      var t = 60
      var time = (data["time"] / 1000)
      if(start == true){
        console.log(data)
        seriesData = { "def": [] }
        seriesData["def"].push({x: (time-10), y: 0})
        seriesSetup.push({color: palette.color(), data: seriesData["def"], name: 'def'})
        for (var i = 1; i <= t; i++) {
           seriesData["def"].push({x: (seriesData["def"][seriesData["def"].length-1].x + 10), y: 0})
        };
        for (var key in data["data"]){
          var time = (data["time"] / 1000)
        seriesData[key] = []
        
        seriesData[key].push({x: time, y: parseFloat(data["data"][key]["sc"])})
        seriesSetup.push({color: palette.color(), data: seriesData[key], name: key})
        }
        
        console.log(seriesData)
      setup()
      start = false
      }
      
      else {
        if(seriesData["def"].length > 1){
        seriesData["def"].shift()
      }
        else {
          seriesData["def"][0].x = time
        }
      
        for (var key in data["data"]){
          if(seriesData[key].length >= t){
            seriesData[key].shift()
            seriesData[key].push({x: time, y: parseFloat(data["data"][key]["sc"])})
          }
          else{
            seriesData[key].push({x: time, y: parseFloat(data["data"][key]["sc"])})
          }
        
        }
      graph.update()
      }

    });
})