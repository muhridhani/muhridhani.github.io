function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.navnya').classList.toggle("hilang");
    document.querySelector('.navnya').classList.toggle("fadeIn");
}

let headernya = document.querySelector('header');
function myFunction1() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(headernya.className.indexOf('header_putih') == -1){
            headernya.className += ' header_putih';
            // headernya.className += ' fadeIn';
        }
    } else {
        if(headernya.className.indexOf('header_putih') != -1){
            headernya.className =  headernya.className.replace('header_putih',' ')
            // headernya.className =  headernya.className.replace('fadeIn',' ')
        }
    }
}


window.onscroll = function() {myFunction1()};