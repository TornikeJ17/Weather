
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
            datatype: 'json',
            type: 'GET',
            data: {q:city, appid: key, units: 'metric'},

            success: function(data){
                //console.log(data)
                var today = new Date()
                var day   = today.getDay()
                var month = today.getMonth()
                var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
                var week = daylist[day]
                var dd = today.getDate()
                thisDay = dd+ ' ' + monthList[month]
                    var wf = ''
                $.each(data.weather, function(index,val){
                    
                    wf += '<div class="container margin-c">'+
                                '<div class="forecast-container">'+
                                    '<div class="today forecast">'+
                                        '<div class="forecast-header">'+
                                        '<div class="day">'+ week +'</div>'+
                                        '<div class="date">'+ thisDay +'</div>'+
                                        '</div> <!-- .forecast-header -->'+
                                        '<div class="forecast-content">'+
                                            '<div class="location">'+ data.name + ','+ data.sys.country +'</div>'+
                                            '<div class="degree">'+
                                                '<div class="num">'+ data.main.temp +'<sup>o</sup>C</div>'+
                                                    '<div class="forecast-icon">' +
                                                        "<img class="+'margin-top'+" src=" +"https://openweathermap.org/img/wn/"+ 
                                                        val.icon + "@2x.png></div>"+
                                            '</div>'+
                                            '<span><i class="fas fa-wind weather-icons"></i>'+   data.wind.speed +' km/h'+'</span>'+
                                            '<span><i class="fas fa-cloud weather-icons"></i>'+  data.clouds.all +'</span>'+
                                            '<span><i class="fas fa-tint weather-icons"></i>'+   data.main.humidity +'</span>'+
                                        '</div>'+
                                    '</div>'+
                            '</div>'+
                        '</div>'
                })
               
                $("#showWeather").html(wf)
               
            }
            
        })
        
    })
})

$("#showHide").hide()
    
