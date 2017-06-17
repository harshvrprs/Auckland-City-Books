
$.ajax({
    type: 'GET',
    url: 'https://gist.githubusercontent.com/Ulaganathan1990/29443f1d49825c2cf839db89bd676036/raw/04cb2ec1d0d49904bf9a4128c1c599698c65190c/featured.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      console.log( data);
      var i =0;
      $.each(data.Featured, function(key, value){


        //$('.carousel-caption h1').text(value.name);
        //$('.carousel-caption p').text(value.description);
        $('<div class="item"><img src="'+value.image+'"><div class="carousel-caption"><h1>'+value.name+'</h1><p>'+value.description+'</p> <p><a class="btn btn-lg btn-primary" href="#" role="button">Buy '+value.price+'</a></p></div> </div>').appendTo('.carousel-inner');
        $('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
        if(i<data.Featured.length)
          i++;
        else {
          i=0;
        }
        });
        $('.item').first().addClass('active');
          $('.carousel-indicators > li').first().addClass('active');
          $('#myCarousel').carousel();
    }
});
  function openCategory(category) {
$.ajax({
    type: 'GET',
    url: 'https://gist.githubusercontent.com/Ulaganathan1990/299fc229e79d505b3e7c6753e40e106b/raw/82ae01978f7ec65995a4308a1c243d6d231a4398/all.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      console.log( data);
        var buffer="";
      $.each(data.Featured, function(key, item){

          if(item.category==category||category=="All")
          buffer+="<div   class=\"col-md-4\"><img class=\"featurette-image img-responsive center-block\" style=\"height :280px; margin-top:10px;\" src=\""+item.image+"\"+ alt=\"Generic placeholder image\"><h2 style=\"height :35px; overflow: hidden; \" color:black;>"+item.name+"</h2><p  style=\"height :150px;overflow: hidden; \" style=\"font-size:20px\" class=\"lead\">"+item.description+"</p><p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Buy "+item.price+"</a></p></div>";

        });
        $('.containertab').html(buffer);

        // for(var i=0; i < data.Deal.length; i++){
        // var item = data.Deal[i];
        // console.log(item.name);
        //
        // });

    }
});
}
