$.ajax({
    type: 'GET',
    url: 'https://gist.githubusercontent.com/Ulaganathan1990/29443f1d49825c2cf839db89bd676036/raw/6bd4e2a872e7a82898c2b5c579f828e063f0302c/featured.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      console.log( data);
      var i =0;
      $.each(data.Featured, function(key, value){


        //$('.carousel-caption h1').text(value.name);
        //$('.carousel-caption p').text(value.description);
        $('<div class="item"><img src="'+value.image+'"><div class="carousel-caption"><h1>'+value.name+'</h1><p>'+value.description+'</p> <p><button class="btn btn-primary my-cart-btn" data-id="'+value.id+'" data-name="'+value.name+'" data-summary="'+value.description+'" data-price="'+value.price+'" data-quantity="1" data-image="'+value.image+'" onclick=\"addCart()\">Buy $'+value.price+'</button></p></div> </div>').appendTo('.carousel-inner');
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
    url: 'https://gist.githubusercontent.com/Ulaganathan1990/4cbf9bb2e20cfddc83fa2e9b6e905814/raw/4e072ed61be5334f274c846fd658dae50b2e7a7b/deal.json',
    data: { get_param: 'value' },
    dataType: 'json',
    success: function (data) {
      console.log( data);
        var buffer="";
        var i=0;
      $.each(data.Deal, function(key, item){

        if(i%2==0)
        {
          buffer+="<hr class=\"featurette-divider\"><div class=\"row featurette\"><div class=\"col-md-7\"><h2 class=\"featurette-heading\">"+item.name+"</h2><p class=\"lead\">"+item.description+"</p><button class=\"btn btn-primary my-cart-btn\" data-id=\""+item.id+"\" data-name=\""+item.name+"\" data-summary=\"Book1\" data-price=\""+item.price+"\" data-quantity=\"1\" data-image=\""+item.image+"\" onclick=\"addCart()\">Buy $"+item.price+
          "</button></div><div class=\"col-md-5\"><img class=\"featurette-image img-responsive center-block\" src=\""+item.image+"\"+data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\"></div></div>";
          i++;
        }
        else {
          buffer+="<hr class=\"featurette-divider\"><div class=\"row featurette\"><div class=\"col-md-7 col-md-push-5\"><h2 class=\"featurette-heading\">"+item.name+"</h2><p class=\"lead\">"+item.description+"</p><button class=\"btn btn-primary my-cart-btn\" data-id=\""+item.id+"\" data-name=\""+item.name+"\" data-summary=\"Book1\" data-price=\""+item.price+"\" data-quantity=\"1\" data-image=\""+item.image+"\" onclick=\"addCart()\">Buy $"+
          item.price+"</button></div><div class=\"col-md-5 col-md-pull-7\"><img class=\"featurette-image img-responsive center-block\" src=\""+item.image+"\"+data-src=\"holder.js/500x500/auto\" alt=\"Generic placeholder image\"></div></div>";
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




$(function () {

  var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    //var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    //$addTocartBtn.prepend($image);
    //var position = $cartIcon.position();
    //$image.animate({
    //  top: position.top,
    //  left: position.left
    //}, 900 , "linear", function() {
    //  $image.remove();
    //});
  }

  $('.my-cart-btn').myCart({
    currencySymbol: '$',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 2,
    cartItems: [],
    afterAddOnCart: function(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },
    checkoutCart: function(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart","Test"+this.id);
      var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function(){
        checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
      });
      alert(checkoutString)
      console.log("checking out", products, totalPrice, totalQuantity);
    },
    getDiscountPrice: function(products, totalPrice, totalQuantity) {
      console.log("calculating discount", products, totalPrice, totalQuantity);
      return totalPrice * 0.75;
    }
  });

});

function addCart()
{
$(function () {
  var goToCartIcon = function($addTocartBtn){
  var $cartIcon = $(".my-cart-icon");
  }

  $('.my-cart-btn').myCart({
    clickOnAddToCart: function($addTocart){
      goToCartIcon($addTocart);
    },
  });

});
}
