$(function () {
    $('.main_slide').slick({
        arrows: false,
        // vertical: true,
        // // 위 아래로 이동
        // // fade : true 는 흐려짐
        autoplay: true,
        // // 자동
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    // 여기까지 슬라이드



    $('.main_Visual .dots li').on('mouseenter', function () {
        // 내가 클릭한 요소의 번호를 알려줘
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });



    $('.main_Visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });

    $('.main_Visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

});