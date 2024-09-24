  
  const historyTab = document.getElementById("history-tab");
  const assistantTab = document.getElementById("assistant-tab");
  historyTab.addEventListener("click", function () {
    historyTab.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  
    historyTab.classList.remove("text-gray-600");
    assistantTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    assistantTab.classList.add("text-gray-600");
  
    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
  });

  assistantTab.addEventListener("click", function () {
    assistantTab.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    historyTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
    document.getElementById("expense-form").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
  });