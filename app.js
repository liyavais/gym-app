// // const slickSlider = document.getElementById('slick-slider')

// // const slickOptions = {

// // }

// // const slick = new Slick (slickSlider, slickOptions)

// $('#slick-slider').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     arrows: true,
//     infinite: true
// })

// // $('#slick-slider').slick({
// //     centerMode: true,
// //     centerPadding: '60px',
// //     slidesToShow: 3,
// // })

console.log(Swiper)

const swiper = new Swiper('.slider', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 3, // Количество слайдов, отображаемых одновременно
    spaceBetween: 30, // Расстояние между слайдами
    centeredSlides: true,
    centeredSlidesBounds: true
})

const swiperSecond = new Swiper('.slider-second', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 3, // Количество слайдов, отображаемых одновременно
    spaceBetween: 30, // Расстояние между слайдами
    centeredSlides: true,
    centeredSlidesBounds: true
})