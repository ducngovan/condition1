function getSalary() {
    let salary = parseInt(document.getElementById('salary').value);
    let result1, result2;
    result1 = salary * 0.15;
    result2 = result1 + salary;
    document.getElementById('result1').value=result1;
    document.getElementById('result2').value=result2;

}