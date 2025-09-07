document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let answer = document.querySelector('input[name="q1"]:checked');
    if (!answer) {
        alert('Please select an answer.');
        return;
    }
    if (answer.value === '100') {
        alert('Correct answer!');
    } else {
        alert('Wrong answer, try again.');
    }
});