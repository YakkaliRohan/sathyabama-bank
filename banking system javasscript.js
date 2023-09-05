// script.js
document.addEventListener("DOMContentLoaded", function () {
    const accountBalanceElement = document.getElementById("account-balance");
    const depositButton = document.getElementById("deposit-btn");
    const withdrawButton = document.getElementById("withdraw-btn");

    // Mocked account balance (replace with actual account data)
    let accountBalance = 1000.00;

    // Function to update the account balance display
    function updateAccountBalance() {
        accountBalanceElement.textContent = `$${accountBalance.toFixed(2)}`;
    }

    // Deposit event
    depositButton.addEventListener("click", function () {
        const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
        if (!isNaN(depositAmount) && depositAmount > 0) {
            accountBalance += depositAmount;
            updateAccountBalance();
        } else {
            alert("Invalid deposit amount.");
        }
    });

    // Withdraw event
    withdrawButton.addEventListener("click", function () {
        const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (accountBalance >= withdrawAmount) {
                accountBalance -= withdrawAmount;
                updateAccountBalance();
            } else {
                alert("Insufficient balance.");
            }
        } else {
            alert("Invalid withdrawal amount.");
        }
    });

    // Initial balance display
    updateAccountBalance();
});
