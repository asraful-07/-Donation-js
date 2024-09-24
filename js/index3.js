document.getElementById("donation-btn").addEventListener("click", function () {
  const accountBalance = getElementTextById("account-balance");
  const donatedInputType = getInputValueById("donation-input-type");
  const accountCash = getElementTextById("account-Amount");
  // Clear input field after donation
  document.getElementById("donation-input-type").value = "";

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
  document.getElementById("account-Amount").innerText =
    newDonationTotalAmount.toFixed(2);

  // history add
  const now = new Date();
  // Format the date to include the day of the week and the date
  const formattedDate = now.toLocaleDateString("en-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format the time to include hours, minutes, seconds, and time zone
  const formattedTime = now.toLocaleTimeString("en-BD", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  const historyList = document.createElement("div");
  historyList.className = "bg-white shadow-xl rounded border-2 p-6 mb-6";
  historyList.innerHTML = `
    <h3 class="text-xl font-bold my-4">${donatedInputType} Taka is Donated for famine-2024 at Quota Movement, Banglades</h3>
    <p class="text-lg text-black">Date: ${formattedDate} ${formattedTime} (Bangladesh Standard Time)</p>
    `;
  document.getElementById("history-list").appendChild(historyList);

  // Show Modal
  document.getElementById("success-modal").showModal();
});
