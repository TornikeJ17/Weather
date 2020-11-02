
$(document).ready(function(){
    $(document).bind('keypress',function(e){
        if(e.keyCode==13){
            $("#getWeather").trigger('click')
        }
    })
  
    $("#getWeather").on('click',function(){
        var city = $("#city").val()
        var key = "c3b299be5185e1bb971a21852fba55c1"
        $("#showHide").show()
    
        
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather/',
            datatype: 'xml',
            type: 'GET',
            data: {q:city, appid: key, units: 'metric'},

            success: function(data){
                // console.log(data)
                    var wf = ''
                $.each(data.weather, function(index,val){
                    
                    wf += '<h2><b>' + data.name + ', ' +data.sys.country +'<br />' +
                    "</b><img src=" +"https://openweathermap.org/img/wn/"+ 
                    val.icon + "@2x.png></h2>" + '<div class="celsius">' + data.main.temp +  '<span class="gradus-icon">&deg;</span> '+'</div>'
                    + '<p class="clear-w">'+ val.main + ', ' + val.description +'</p>'
                    + '<nav class="nav">' +
                    '<ul class="nav-link ">Wind <li><i class="fas fa-wind weather-icons"></i>'+  data.wind.speed +'</li></ul>' +
                    '<ul class="nav-link ">Cloud <li><i class="fas fa-cloud weather-icons"></i>'+  data.clouds.all +'</li></ul>'+
                    '<ul class="nav-link ">Humidity <li><i class="fas fa-tint weather-icons"></i>'+  data.main.humidity +'</li></ul>' +
                    '</nav>'

                    
                    
                })
               
                $("#showWeather").html(wf)
               
            }
            
        })
        
    })
})

$("#showHide").hide()
    
