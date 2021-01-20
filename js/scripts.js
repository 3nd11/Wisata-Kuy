var attempt = 3;

function validasi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "endi12" && password == "endi12") {
        alert("It's Correct, Welcome Bro!")
        window.open('../admin/Home Admin.html','_self', false);
    }
    else if (username == "" && password == ""){
        alert("Who Are You?!")
        return false
    }
}

function fungsi1() {
    var myobj = document.getElementById("1");
    myobj.remove();
}
function fungsi2() {
    var myobj = document.getElementById("2");
    myobj.remove();
}
function fungsi3() {
    var myobj = document.getElementById("3");
    myobj.remove();
}
function fungsi4() {
    var myobj = document.getElementById("4");
    myobj.remove();
}
function fungsi5() {
    var myobj = document.getElementById("5");
    myobj.remove();
}
function fungsi6() {
    var myobj = document.getElementById("6");
    myobj.remove();
}
function fungsi7() {
    var myobj = document.getElementById("7");
    myobj.remove();
}
function fungsi8() {
    var myobj = document.getElementById("8");
    myobj.remove();
}
function fungsi9() {
    var myobj = document.getElementById("9");
    myobj.remove();
}
