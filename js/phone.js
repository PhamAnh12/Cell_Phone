// const img_src = '../assets/img/img_phoneimg/';
var phones =" ";
function getListPhone(){
    url = 'http://localhost:8080/api/v1/phones'
    $.ajax({
        url: url,
        type: 'GET',
        contentType: "application/json",
        dataType: 'json', // datatype return
       
        success: function (data, textStatus, xhr) {
            // success
           phones = data.content;
           console.log.apply(phones);
           showListPhone();
        },
        error(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
}
function showListPhone(){
    phones.forEach(item => {
        $('#listphone').append(
            '<div class="grid_column-2-4">' +
           ' <div class="home-product-item">' +
            '   <a href="../html/product-detail.html">' +
                   ' <div class="home-product-item__img" style="background-image: url('+item.srcImg+')">'+

                    '</div>'+
               '</a>'+
                '<h4 class="home-product-item__name">'+item.nameDetail +'</h4>'+
                '<div class="home-product-item-config">' +
                    '<p >'+item.screenSize+'</p>'+
                    '<p >'+item.amountRam+'</p>'+
                    '<p>'+item.memory +'</p>'+
                '</div>'+
                '<div class="home-product-item__price">'+
                    '<span class="home-product-item__price-current">'+item.priceNew+' đ'+ '</span>'+
                    '<span class="home-product-item__price-old">'+item.priceOld+' đ'+'</span>'+

               '</div>'+
                '<div class="home-product-item__action">'+
                    '<span class="home-product-item__like home-product-item__like-liked">'+
                       '<i class="home-product-item__like-icon-emty  far fa-heart"></i>'+
                        '<i class="home-product-item__like-icon-fill  fas fa-heart"></i>'+
                   '</span>'+
                   ' <div class="home-product-item__rating">'+
                       ' <i class="home-product-item__star--gold fas fa-star"></i>'+
                        '<i class="home-product-item__star--gold fas fa-star"></i>'+
                       ' <i class="home-product-item__star--gold fas fa-star"></i>'+
                        '<i class="home-product-item__star--gold fas fa-star"></i>'+
                        '<i class=" home-product-item__star--gold fas fa-star"></i>'+
                    '</div>'+
                    '<span class="home-product-item-sold">' +item.numberReviews +' đánh giá'+'</span>'+
               '</div>'+
              
               '<div class="home-product-item__favourite">'+
                    '<i class="fas fa-check"></i>'
                    +'Yêu thích'+
               '</div>'+
                '<div class="home-product-item__sale-off">'+
                   '<span class="home-product-item__sale-off-label">Giảm</span>'+
                    '<span class="home-product-item__sale-off-percent">'+ item.discount +'%' +'</span>'+

                '</div>'+

           ' </div>'+

        '</div>'
        )
    });
}

