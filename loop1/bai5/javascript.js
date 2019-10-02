function mediumPoint() {
    let poin1 = parseInt(document.getElementById('poin1').value);
    let poin2 = parseInt(document.getElementById('poin2').value);
    let result = (poin1 + poin2 * 2)/3;
    if( 0 <= result && result <= 4){
        document.getElementById('result').innerText=(result + " hoc sinh kem!");
    }else if (result<6.5){
        document.getElementById('result').innerText=(result + " hoc sinh trung binh!");
    }else if(result<8.5){
        document.getElementById('result').innerText=(result + " hoc sinh kha!");
    }else if(result<=10){
        document.getElementById('result').innerText=(result + " hoc sinh gioi!");
    }else{
        alert("ban hay nhap lai diem");
    }
}