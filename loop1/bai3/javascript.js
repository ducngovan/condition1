let num = parseInt(prompt("nhap so: "));
if(num>0){
    document.getElementById('output').innerHTML=(num+ " lon hon 0");
}else if (num<0){
    document.getElementById('output').innerHTML=(num+ " nho hon 0");
}else
    document.getElementById('output').innerHTML=(num+ " bang 0");