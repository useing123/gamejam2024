document.body.onload = function(){
    setTimeout(function() {
        // Скрываем текст и показываем загрузку
        document.querySelector('.text').style.display = 'none';
        document.querySelector('.loader').style.display = 'block';
    }, ); // Через 1 секунду

    setTimeout(function() {
        document.getElementById("page_preloader").style.display = "none";
    }, 3000); // Через 4 секунды

    setTimeout(function(){
        let loader = document.querySelector('.loader');
        let container = document.querySelector('.container');
        if(!loader.classList.contains('off_loader')){
            loader.classList.add('off_loader');
            container.style.display = 'block';
        };
    }, 3000);
};

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         // Скрываем текст и показываем загрузку
//         document.querySelector('.text').style.display = 'none';
//         document.querySelector('.loader').style.display = 'block';
//     }, 3000); // Через 1 секунду

//     setTimeout(function() {
//             document.getElementById("page_preloader").style.display = "none";
//         }, 6000); // Через 4 секунды
// });