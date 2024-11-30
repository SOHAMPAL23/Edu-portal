document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalAmount = parseFloat(document.getElementById('total-amount').value);
    const peopleCount = parseInt(document.getElementById('people-count').value);
    const description = document.getElementById('description').value;
    
    if (!isNaN(totalAmount) && peopleCount > 0 && description.trim() !== "") {
        const amountPerPerson = (totalAmount / peopleCount).toFixed(2);
        document.getElementById('amount-per-person').innerText = amountPerPerson;
        document.getElementById('expense-description').innerText = description;
    } else {
        document.getElementById('amount-per-person').innerText = 'Invalid input';
        document.getElementById('expense-description').innerText = '';
    }
});
