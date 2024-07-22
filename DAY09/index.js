document.getElementById("myParagraph").textContent = "Updated text";
document.querySelector(".myClass").style.backgroundColor = "lightblue";

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

let elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

document.getElementById("myImage").src = "new-image.jpg";

let paragraph = document.getElementById("myParagraph");
paragraph.classList.add("highlight");
setTimeout(() => {
  paragraph.classList.remove("highlight");
}, 2000);

document.getElementById("myButton").addEventListener("click", () => {
  document.getElementById("myParagraph").textContent = "Updated text";
});

document.getElementById("myElement").addEventListener("mouseover", (e) => {
  console.log(e);
  console.log(e.target);

  document.getElementById("myElement").style.borderColor = "red";
});
