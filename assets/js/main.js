var html = $('html');
var body = $('body');
var timeout;

window.addEventListener('scroll', function () {
    'use strict';
    if (document.body.classList.contains('home-template')) {
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }
        timeout = window.requestAnimationFrame(portalButton);
    }
});

function portalButton() {
    'use strict';

    if (window.scrollY > 100) {
        document.body.classList.add('portal-visible');
    } else {
        document.body.classList.remove('portal-visible');
    }
}
