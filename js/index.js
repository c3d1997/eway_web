// store
function storeNull() {
    var storeId = document.getElementById("store_id").value;
    var spanShow = document.querySelector('.show');
    var errowE = document.querySelector('.errow');
    if (storeId == null || storeId == "") {

        spanShow.innerHTML = ' *'
        errowE.innerHTML = '<p>required</p>'
        return;
    } else {
        spanShow.innerHTML = ' '
        errowE.innerHTML = ''
        return false;

    }
}

function oneCheck() {
    var store = document.getElementById("store_id").value;
    var spanShow = document.querySelector('.show');
    var errowE = document.querySelector('.errow');
    var reg = / ^[s]+|[t]+|[o]+|[r]+|[e]+|[1/2/3]$/;


    if (reg.test(store)) {
        spanShow.innerHTML = ' '
        errowE.innerHTML = ''
        return true
    } else {

        spanShow.innerHTML = ' *'
        errowE.innerHTML = '<p>wrong format</p>'

        return false
    }
}
// name
function nameNull() {
    var nameId = document.getElementById("name_id").value;
    var spanShow2 = document.querySelector('.show2');
    var errowE2 = document.querySelector('.errow2');
    if (nameId == null || nameId == "") {
        spanShow2.innerHTML = ' *'
        errowE2.innerHTML = '<p>required</p>'
        return;
    } else {
        spanShow2.innerHTML = ' '
        errowE2.innerHTML = ''
        return false;

    }
}

function twoCheck() {
    var nameId = document.getElementById("name_id").value;
    var spanShow2 = document.querySelector('.show2');
    var errowE2 = document.querySelector('.errow2');
    var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;

    if (reg.test(nameId)) {
        spanShow2.innerHTML = ' '
        errowE2.innerHTML = ''
        return true
    } else {

        spanShow2.innerHTML = ' *'
        errowE2.innerHTML = '<p>wrong format</p>'

        return false
    }
}
// phone
function phoneNull() {
    var phoneId = document.getElementById("phone_id").value;
    var spanShow3 = document.querySelector('.show3');
    var errowE3 = document.querySelector('.errow3');
    if (phoneId == null || phoneId == "") {
        spanShow3.innerHTML = ' *'
        errowE3.innerHTML = '<p>required</p>'
        return;
    } else {
        spanShow3.innerHTML = ' '
        errowE3.innerHTML = ''
        return false;

    }
}

function threeCheck() {
    var phoneId = document.getElementById("phone_id").value;
    var spanShow3 = document.querySelector('.show3');
    var errowE3 = document.querySelector('.errow3');
    var reg = /^0?(9)[0-9]{8}$/;

    if (reg.test(phoneId)) {
        spanShow3.innerHTML = ' '
        errowE3.innerHTML = ''
        return true
    } else {

        spanShow3.innerHTML = ' *'
        errowE3.innerHTML = '<p>wrong format</p>'

        return false
    }
}
//amount
function amountNull() {
    var amountId = document.getElementById("amount_id").value;
    var spanShow4 = document.querySelector('.show4');
    var errowE4 = document.querySelector('.errow4');
    if (amountId == null || amountId == "") {
        spanShow4.innerHTML = ' *'
        errowE4.innerHTML = '<p>required</p>'

        return;
    } else {
        spanShow4.innerHTML = ' '
        errowE4.innerHTML = ''

        return false;

    }
}

function fourCheck() {
    var amountId = document.getElementById("amount_id").value;
    var spanShow4 = document.querySelector('.show4');
    var errowE4 = document.querySelector('.errow4');
    var reg = /^[1-9]\d*|[0]$/;

    if (reg.test(amountId)) {
        spanShow4.innerHTML = ' '
        errowE4.innerHTML = ''
        return true
    } else {

        spanShow4.innerHTML = ' *'
        errowE4.innerHTML = '<p>wrong format</p>'

        return false
    }
}
//payment
function paymentNull() {
    var paymentId = document.getElementById("payment_id").value;
    var spanShow5 = document.querySelector('.show5');
    var errowE5 = document.querySelector('.errow5');
    if (paymentId == null || paymentId == "placeholder text") {
        spanShow5.innerHTML = ' *'
        errowE5.innerHTML = '<p>required</p>'

        return;
    } else {
        spanShow5.innerHTML = ' '
        errowE5.innerHTML = ''
        return false;

    }
}

// btn 
function btnClick() {

    var errow = document.querySelectorAll(".errow_all p");
    var submmitALL = document.getElementById('submit_ALL')
    var INNN = document.getElementsByTagName('input')

    var sNOTE = document.querySelector('.submit_notE');
    var a = errow.length;

    console.log(a);

    if (a > 0) {
        submmitALL.src = "./imgs/FBTN.png"
        sNOTE.innerHTML = '<p>This person does not exist</p>'
    } else {
        submmitALL.src = "./imgs/SBTN.png"
        sNOTE.innerHTML = ''
    }


}
// scroll

function scrolltoF() {
    document.querySelector('#input_froms_scroll').scrollIntoView({
        behavior: 'smooth'
    });
}