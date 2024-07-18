// jQuery example to handle active state based on URL
$(document).ready(function () {
    const path = window.location.pathname;
    const pathNoSlash = path.replace('/', '');
    const pathSplitted = path.split('/')

    $('.nav-link').each(function () {
        var href = String(($(this).attr('href')));
        var hrefNoSlash = href.replace('/','')
        // console.log(pathNoSlash)
        // console.log(href)
        // console.log(hrefNoSlash)
        console.log(pathSplitted.slice(-1)[0])
        console.log(hrefNoSlash)

        if (hrefNoSlash === pathSplitted.slice(-1)[0]) {
            $(this).addClass('active');
            console.log('match:' + path);
            // write a elif for if path contains href word then active
        }
        else {
            $(this).removeClass('active');
            // console.log('no match:              ' + path)
        }

    });
});
