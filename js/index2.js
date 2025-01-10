document.getElementById("donate-btn").addEventListener("click", function () {
  const accountBalance = getElementTextById("account-balance");
  const donatedInputType = getInputValueById("donated-input-type");
  const accountCash = getElementTextById("account-Cash");
  // Clear input field after donation
  document.getElementById("donated-input-type").value = "";

  if (isNaN(donatedInputType) || donatedInputType <= 0) {
    alert("Please enter a valid donation amount");
    return;
  }

  if (donatedInputType > accountBalance) {
    alert("Insufficient funds for this donation");
    return;
  }

  const newCash = accountBalance - donatedInputType;
  const newDonationTotalAmount = accountCash + donatedInputType;
  document.getElementById("account-balance").textContent = newCash.toFixed(2);
  document.getElementById("account-Cash").innerText = newDonationTotalAmount.toFixed(2);

// History add
  const date = new Date();
  const historyList = document.createElement("div");
  historyList.className = "bg-white shadow-xl rounded border-2 p-6 mb-6";
  historyList.innerHTML = `
     <h3 class="text-xl font-bold my-4">${donatedInputType}Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
     <p class="text-lg text-black">Date: ${date}</p>
     `;
  document.getElementById("history-list").appendChild(historyList);

  // show modal
  document.getElementById("success-modal").showModal();
});
