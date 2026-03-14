$(document).ready(function () {
  // Responsive Slideshow Gallery using jQuery
  let current = 0;
  let productSlides = $(".product_gallery-slide");
  console.log(productSlides);

  function showProductImage(index) {
    productSlides.removeClass("active");
    productSlides.eq(index).addClass("active");
  }

  $(".next").click(function () {
    current++;

    if (current >= productSlides.length) {
      current = 0;
    }
    showProductImage(current);
  });

  $(".prev").click(function () {
    current--;

    if (current < 0) {
      current = productSlides.length - 1;
    }
    showProductImage(current);
  });
});
