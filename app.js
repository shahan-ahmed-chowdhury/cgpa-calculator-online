
const yearPoints = (y) => {
    const allGradeElements = document.getElementsByClassName('grade-point');
    const allCreditElements = document.getElementsByClassName('credit-point');
    let creditPoints = 0;
    let multiply = 0;
    
    for (let i = 0; i < y; i++) {
        const grades = allGradeElements[i].value;
        const points = allCreditElements[i].value;
        if (grades > 0 && points > 0) {
            const grade = parseFloat(grades);
            const point = parseInt(points);
            multiply += grade * point;
            creditPoints += point;
        }
    }
    if(creditPoints > 0 && multiply > 0){
        document.getElementById('all-year-cgpa').innerText = (multiply / creditPoints).toFixed(2);
    }

    const credit = parseInt(creditPoints);
    const gp = parseFloat(multiply);
    if (credit > 0 && gp > 0) {
        const total = (gp / credit).toFixed(2);
        document.getElementById('warning').style.display = 'none';

        if (y === 6) {
            document.getElementById('year-1-cgpa').innerText = total;
        }
        else if (y === 8) {
            document.getElementById('year-2-cgpa').innerText = total;
        }
        else if (y === 9) {
            document.getElementById('year-3-cgpa').innerText = total;
        }
        else if (y === 10) {
            document.getElementById('year-4-cgpa').innerText = total;
        }
    }
    else {
        document.getElementById('warning').style.display = 'block';
    }
}

const addYear = (addBtn, addYear) => {
    document.getElementById(addYear).style.display = 'block';
    document.getElementById(addBtn).style.display = 'none';
}