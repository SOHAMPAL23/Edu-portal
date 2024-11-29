const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const renderExpenses = () => {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((expense, index) => {
    total += expense.amount;
    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - ₹${expense.amount}
      <div>
        <button onclick="editExpense(${index})">Edit</button>
        <button onclick="deleteExpense(${index})">Delete</button>
      </div>
    `;
    expenseList.appendChild(li);
  });

  totalAmount.textContent = total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
};
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const expenseName = expenseNameInput.value.trim();
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (expenseName && expenseAmount > 0) {
    expenses.push({ name: expenseName, amount: expenseAmount });
    renderExpenses();
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
  } else {
    alert("Please enter valid inputs.");
  }
});
const editExpense = (index) => {
  const expense = expenses[index];
  expenseNameInput.value = expense.name;
  expenseAmountInput.value = expense.amount;
  deleteExpense(index);
};

const deleteExpense = (index) => {
  expenses.splice(index, 1);
  renderExpenses();
};
renderExpenses();