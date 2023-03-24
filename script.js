const englishMarks = document.querySelector('.englishMarks');
const mathsMarks = document.querySelector('.mathsMarks');
const physicsMarks = document.querySelector('.physicsMarks');
const chemistryMarks = document.querySelector('.chemistryMarks');
const computerMarks = document.querySelector('.computerMarks');
const calculateButton = document.querySelector('.calculateButton');
const totalMarks = document.querySelector('.totalMarks')
const averageMarks = document.querySelector('.averageMarks')
const studentGrade = document.querySelector('.studentGrade')


englishMarks.addEventListener('change', (event) => {
    englishMarks.value = event.target.value;
})
mathsMarks.addEventListener('change', (event) => {
    mathsMarks.value = event.target.value;
})
physicsMarks.addEventListener('change', (event) => {
    physicsMarks.value = event.target.value;
})
chemistryMarks.addEventListener('change', (event) => {
    chemistryMarks.value = event.target.value;
})
computerMarks.addEventListener('change', (event) => {
    computerMarks.value = event.target.value;
})

calculateButton.addEventListener('click', (event) => {
    if (Number(englishMarks.value) < 0 || Number(englishMarks.value) > 100 || Number(mathsMarks.value) < 0 || Number(mathsMarks.value) > 100 || Number(physicsMarks.value) < 0 || Number(physicsMarks.value) > 100 || Number(chemistryMarks.value) < 0 || Number(chemistryMarks.value) > 100 || Number(computerMarks.value) < 0 || Number(computerMarks.value) > 100) {
        alert('Please Enter Marks in Range of 100')
    } else {
        let total = 0;

        if (englishMarks.value.length === 0) {
            total += 0
        } else {
            total += Number(englishMarks.value)
        }

        if (mathsMarks.value.length === 0) {
            total += 0
        } else {
            total += Number(mathsMarks.value)
        }

        if (physicsMarks.value.length === 0) {
            total += 0
        } else {
            total += Number(physicsMarks.value)
        }
        if (chemistryMarks.value.length === 0) {
            total += 0
        } else {
            total += Number(chemistryMarks.value)
        }
        if (computerMarks.value.length === 0) {
            total += 0
        } else {
            total += Number(computerMarks.value)
        }

        let average = ((total/500)*100).toFixed(2);
        totalMarks.textContent = `Total Marks: ${total}`;

        averageMarks.textContent = `Your Average marks are:${average}`;
        let grade = ''
        if(englishMarks.value.length===0 || Number(englishMarks.value)<35){
            grade = 'F'
        }else if(mathsMarks.value.length===0 || Number(mathsMarks.value)<35){
            grade = 'F'
        }else if(physicsMarks.value.length===0 || Number(physicsMarks.value)<35){
            grade = 'F'
        }else if(chemistryMarks.value.length===0 || Number(chemistryMarks.value)<35){
            grade='F'
        }else if(computerMarks.value.length===0 || Number(computerMarks.value)<35){
            grade='F'
        }else{
            if(average<60){
                grade = 'F'
            }

            if(average>=60 && average<70){
                grade = 'D'
            }

            if(average>=70 && average<80){
                grade='C'
            }
            if(average>=80 && average<90){
                grade='B'
            }
            if(average>=90 && average<=100){
                grade='A'
            }
        }

        studentGrade.textContent = `You got ${grade} grade`;
    }
})