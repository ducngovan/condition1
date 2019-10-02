let a = parseInt(prompt("nhap a: "));
let b = parseInt(prompt("nhap b: "));
let c = parseInt(prompt("nhap c: "));
if(a>b && a>c){
    alert(a+ " la so lon nhat");
}else{
    if(b>c){
        alert(b+ " la so lon nhat");
    }else{
        alert(c+ " la so lon nhat");
    }
}