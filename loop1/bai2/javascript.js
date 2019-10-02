function checkAge() {
    let age = parseInt(document.getElementById('age').value);
    if(15<=age && age<=18){
    document.getElementById('output').innerText=("du dieu kien vao lop 10");
    }else{
    document.getElementById('output').innerText=("khong du dieu kien vao lop 10");
}}