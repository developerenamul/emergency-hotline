const historyData = [];
document.getElementById("cards-container").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) {
    return;
  }
  //   History Data
  const title = card.children[0].children[1].innerText;
  const number = card.children[0].children[3].innerText;
  const currentTime = new Date().toLocaleTimeString();

  //   Heart Counter
  const heartText = document.getElementById("counter").innerText;
  let counter = parseInt(heartText);
  //   control heart button click
  if (e.target.closest(".heart")) {
    document.getElementById("counter").innerText = counter + 1;
  }
});
