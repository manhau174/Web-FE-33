function removeClass(e, classNameStr) { //xoa class
    e.className = e.className.replace(classNameStr, 
        '');
}

function addClass(e, classNameStr) {
    var oldClassStr = e.className; //class1
    var newClassStr = e.className + classNameStr; //class1 class2
    e.className = e.className + classNameStr;;
}

function openTab(e) {
    var menus = document.getElementsByClassName('menu'); //get all menu
    for (var i = 0; i < menus.length; i++) {
        removeClass(menus[i], ' menu-active'); //delete class all menu
    }

    addClass(e, ' menu-active'); //add class menu this

    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        removeClass(contents[i], ' active');
    }

    var menu = e.nextElementSibling;
    addClass(menu, ' active');
}









