
let gallery = $('img[data-enlargable]')


 $('img[data-enlargable]').click(function (e) { 
    $('<div class="gallery">').css({
        opacity: '0',
        background: 'RGBA(0,0,0,.5)',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 500ms',
        flexDirection: 'column'
    }).appendTo('body');

    $('<img class="image">').attr('src', this.src).css({
        cursor: 'zoom-out',
        opacity: '0',
        maxHeight: '100%',
        maxWidth: '100%',
        margin: '10px',
        transition: 'all 500ms'}).click(function () {
            $('.gallery').css('opacity','0');
            setTimeout(function () {$('.gallery').remove();}, 300)
        
        }).appendTo($('.gallery'));
        
        /* console.log($(this).attr('data-description')) */

        $( '<div>' ).html($(this).attr('data-description')).appendTo($('.gallery'));

        setTimeout(function () {
            $('.gallery').css('opacity', '1')[0];
            $('.image').css('opacity', '1')[0];
        }
            , 5);

    e.preventDefault();
    
 });
