let namaTempat = document.getElementById('namaTempat')
let comment  = document.getElementById('comment')
let cp = document.getElementById('cp')
let phone = document.getElementById('phone')
let web = document.getElementById('web')
let ll = document.getElementById('ll')

document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()

    cekform()
});

function cekform(){

    if(namaTempat.value == ""){
        error(namaTempat, "*nama tidak boleh kosong");
    }else{
        sukses(namaTempat);

    }if(comment.value == ""){
         error(comment, "*email tidak boleh kosong");
    }else{
        sukses(comment)

    }if(cp.value == ""){
        error(cp, "*jam tidak boleh kosong");
    }else{
        sukses(cp)

    }
    if(phone.value == ""){
        error(phone, "*tujuan tidak boleh kosong");
    }else{
        sukses(phone)

    }if(web.value == ""){
        error(web, "*tiket tidak boleh kosong");
    }else{
        sukses(web);
    }
    hasil.innerHTML= alert("Pendaftaran Berhasil")
}

var attempt = 3;

function validasi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
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
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi2() {
    var myobj = document.getElementById("2");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi3() {
    var myobj = document.getElementById("3");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi4() {
    var myobj = document.getElementById("4");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
    
}
function fungsi5() {
    var myobj = document.getElementById("5");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi6() {
    var myobj = document.getElementById("6");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi7() {
    var myobj = document.getElementById("7");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi8() {
    var myobj = document.getElementById("8");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi9() {
    var myobj = document.getElementById("9");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi10() {
    var myobj = document.getElementById("10");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi11() {
    var myobj = document.getElementById("11");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi12() {
    var myobj = document.getElementById("12");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi13() {
    var myobj = document.getElementById("13");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi14() {
    var myobj = document.getElementById("14");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi15() {
    var myobj = document.getElementById("15");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi16() {
    var myobj = document.getElementById("16");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi17() {
    var myobj = document.getElementById("17");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
function fungsi18() {
    var myobj = document.getElementById("18");
    if (confirm('Yakin Ingin menghapus?')) {
        // Save it!
        console.log('Thing was saved to the database.');
        myobj.remove();
    } else {
        // Do nothing!
        console.log('Thing was not saved to the database.');
    }
}
