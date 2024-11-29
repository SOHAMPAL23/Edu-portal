document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('splitterForm');
    const participantsList = document.getElementById('participants');
    const totalAmountSpan = document.getElementById('totalAmount');
    const eachPaysSpan = document.getElementById('eachPays');
    document.getElementById('theme-toggle').addEventListener('click', function () { document.body.classList.toggle('dark-theme'); });
    let participants = [];
    let totalAmount = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const amount = parseFloat(document.getElementById('amount').value);

        participants.push({ name, amount });
        totalAmount += amount;

        updateParticipantsList();
        updateAmounts();

        form.reset();
    });

    function updateParticipantsList() {
        participantsList.innerHTML = '';
        participants.forEach(participant => {
            const li = document.createElement('li');
            li.innerText = `${participant.name}: ${participant.amount}`;
            participantsList.appendChild(li);
        });
    }

    function updateAmounts() {
        totalAmountSpan.innerText = totalAmount.toFixed(2);
        eachPaysSpan.innerText = (totalAmount / participants.length).toFixed(2);
    }
});
