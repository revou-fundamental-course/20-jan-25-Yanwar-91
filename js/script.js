// ini file javascript
function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let errorMessage = document.getElementById('error-message');
    let resultContainer = document.getElementById('result');

    if (!height || !weight || !age || !gender) {
        errorMessage.textContent = 'Mohon isi terlebih dahulu';
        resultContainer.innerHTML = '';
        return;
    } else {
        errorMessage.textContent = '';
    }

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    let category = '';
    let advice = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        advice = 'Anda berada dalam kategori underweight. Konsultasikan dengan ahli gizi untuk meningkatkan berat badan dengan pola makan sehat.';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        advice = 'Anda memiliki berat badan normal. Pertahankan pola makan seimbang dan gaya hidup sehat.';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        advice = 'Anda berada dalam kategori overweight. Pertimbangkan untuk mengatur pola makan dan rutin berolahraga.';
    } else {
        category = 'Obese';
        advice = 'Anda berada dalam kategori obesitas. Segera konsultasikan dengan dokter atau ahli gizi untuk langkah-langkah penurunan berat badan.';
    }
    resultContainer.innerHTML = `
        <h3 class='category'>${category}</h3>
        <p>BMI: ${bmi}</p>
        <p>${advice}</p>
    `;
}

function resetForm() {
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('error-message').textContent = '';
    document.getElementById('result').innerHTML = '';
}