document.getElementById('donate-btn').addEventListener('click', function(){
    const accountBalance = getElementTextById('account-balance');
    const donatedInputType = getInputValueById('donated-input-type');
    const accountCash = getElementTextById('account-Cash');
    // Clear input field after donation
    document.getElementById('donated-input-type').value = "";
  
    if (isNaN(donatedInputType) || donatedInputType <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    if (donatedInputType > accountBalance) {
        alert('Insufficient funds for this donation');
        return;
    }

    const newCash = accountBalance - donatedInputType;
    const newDonationTotalAmount = accountCash + donatedInputType;

    document.getElementById('account-balance').textContent = newCash.toFixed(2);
    document.getElementById('current-donation').innerText = newDonationTotalAmount.toFixed(2);


});
