function choose(e) {
    var check = e.checked;
    var row = e.parentNode.parentNode;
    console.log(row);
    console.log(check);
    if (check) {
        if (!containClass(row, ' check')) {
            addClass(row, ' check');
            removeClass(row, ' unCheck');
        }
    }
    else {
        if (!containClass(row, ' unCheck')) {
            addClass(row, ' unCheck');
            removeClass(row, ' check');
        }
    }
}

function checkAllFnc() {
    var inputes = document.getElementsByClassName('checkBox');
    for (var i = 0; i < inputes.length; i++) {
        inputes[i].checked = true;
    }

    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        if (!containClass(rows[i], ' check')) {
            addClass(rows[i], ' check');
            removeClass(rows[i], ' unCheck');
        }
    }
}

var checkAll = document.getElementById('checkAll');
checkAll.addEventListener('click', checkAllFnc);

function unCheckAllFnc() {
    var inputes = document.getElementsByClassName('checkBox');
    for (var i = 0; i < inputes.length; i++) {
        inputes[i].checked = false;
    }

    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        if (!containClass(rows[i], ' unCheck')) {
            addClass(rows[i], ' unCheck');
            removeClass(rows[i], ' check');
        }
    }
}

var unCheckAll = document.getElementById('unCheckAll');
unCheckAll.addEventListener('click', unCheckAllFnc);

function check(e) {
    var input = e.previousElementSibling.firstElementChild;
    var check = input.checked;
    if (check) {
        input.checked = false;
        if (!containClass(e.parentNode, ' unCheck')) {
            addClass(e.parentNode, ' unCheck');
            removeClass(e.parentNode, ' check');
        }
    }
    else {
        input.checked = true;
        if (!containClass(e.parentNode, ' check')) {
            addClass(e.parentNode, ' check');
            removeClass(e.parentNode, ' unCheck');
        }
    }
}









