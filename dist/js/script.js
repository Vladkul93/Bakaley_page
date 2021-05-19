'use strict';

    // popup menu   
    ;(function () {
        var body = document.querySelector('body');
    
        var closestItemByClass = function(item, className) {
            var node = item;

            while(node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            
            }
            return null;
        };
        
    var closestAttr = function(item, attr) {
        var node = item;

        while(node) {
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }
            node = node.parentElement;
        
        }
        return null;
    };

    var showPopup = function(target) {
        target.classList.add('is-active');
    };

    var closePopup = function(target) {
        target.classList.remove('is-active');
    };

    var toggleScroll = function() {
        body.classList.toggle('no-scroll');
    };

    body.addEventListener('click', function(e) {
        var target = e.target;
        var popupClass = closestAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }
    
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    });
// popup menu 

// burger close
    body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('popup__btn-close') ||
        target.classList.contains('popup__inner'))
        var popup = closestItemByClass(target, 'popup');

        closePopup(popup);
        toggleScroll();
    });
// burger close

// burger open

    body.addEventListener('keydown', function(e) {
        console.log(e.keyCode);
        if (e.keyCode !== 27){
            return;
        }
        var popup = document.querySelector('.popup.is-active');
        if (popup) {
            closePopup(popup);
            toggleScroll();
        }
    });
})();
// burger open

let swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            nextEl: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        }
        );
document.getElementById('click-disappear1').onclick = function() {
    document.getElementById('disappear1').hidden = true;
}

document.getElementById('click-disappear2').onclick = function() {
    document.getElementById('disappear2').hidden = true;
}

document.getElementById('click-disappear3').onclick = function() {
    document.getElementById('disappear3').hidden = true;
}

