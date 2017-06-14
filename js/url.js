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

$.ajax({
    type: 'GET',
    url: 'https://gist.githubusercontent.com/Ulaganathan1990/4cbf9bb2e20cfddc83fa2e9b6e905814/raw/51e77b3bb2fc487468e81ddf32b87120fa216273/deal.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      console.log( data);
        var buffer="";
        var i=0;
      $.each(data.Deal, function(key, item){

        if(i%2==0)
        {
          buffer+="<hr class=\"featurette-divider\"><div class=\"row featurette\"><div class=\"col-md-7\"><h2 class=\"featurette-heading\">"+item.name+"</h2><p class=\"lead\">"+item.description+"</p><p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Buy "+item.price+"</a></p></div><div class=\"col-md-5\"><img class=\"featurette-image img-responsive center-block\" src=\""+item.image+"\"+data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\"></div></div>";
          i++;
        }
        else {
          buffer+="<hr class=\"featurette-divider\"><div class=\"row featurette\"><div class=\"col-md-7 col-md-push-5\"><h2 class=\"featurette-heading\">"+item.name+"</h2><p class=\"lead\">"+item.description+"</p><p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Buy "+item.price+"</a></p></div><div class=\"col-md-5 col-md-pull-7\"><img class=\"featurette-image img-responsive center-block\" src=\""+item.image+"\"+data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\"></div></div>";
          i=0;
        }
        });
        $('.featurette-ol').html(buffer);

        // for(var i=0; i < data.Deal.length; i++){
        // var item = data.Deal[i];
        // console.log(item.name);
        //
        // });

    }
});
