function removeClass(e, classNameStr) { //xoa class
    e.className = e.className.replace(classNameStr, 
        '');
}

function addClass(e, classNameStr) {
    e.className = e.className + classNameStr;;
}

function containClass(e, classNameStr)  {
    return e.className.includes(classNameStr);
}