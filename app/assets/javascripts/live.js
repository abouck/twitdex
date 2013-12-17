$(function() {
    var socket = io.connect('http://localhost:8080');
    socket.on('news', function (data) {
      console.log(data);
    });
    socket.on('data', function(data) {

      
      var time = (data["time"] / 1000)
      if(start == true){
        console.log(data)
        seriesData = {}  
        for (var key in data["data"]){
          var time = (data["time"] / 1000)
        seriesData[key] = []
        
        seriesData[key].push({x: time, y: data["data"][key]["sc"]})
        seriesSetup.push({color: palette.color(), data: seriesData[key], name: key})
        }
        //console.log(seriesData)
      setup()
      start = false
      }
      
      else {
        for (var key in data["data"]){
        seriesData[key].push({x: time, y: data["data"][key]["sc"]})

      }
      graph.update()
      }

    });
})