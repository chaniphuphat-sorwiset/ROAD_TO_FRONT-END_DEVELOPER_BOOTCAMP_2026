function addElement() {
  const newElement = document.createElement("p");
  newElement.innerHTML = "New Element!";
  document.getElementById("example3").appendChild(newElement);
}
