const buttonAdd = document.querySelector(".button-add");
const buttonDel = document.querySelector(".button-del");
const inputDate = document.querySelector(".input-date");
const inputText = document.querySelector(".input-text");
const listUl = document.querySelector(".list ul");
const html = document.documentElement;

//buttons
const handleButtonAddText = () => {
  if (inputText.value !== "" && inputDate.value !== "") {
    const newLi = document.createElement("li");
    const newLiDate = document.createElement("li");
    newLi.classList.add("newLi");
    newLiDate.classList.add("newLi");
    newLi.innerHTML = inputText.value;
    newLiDate.innerHTML = inputDate.value;
    listUl.append(newLi);
    listUl.append(newLiDate);
    inputText.value = "";
    inputDate.value = "";
  }
};

buttonAdd.addEventListener("click", handleButtonAddText);
buttonAdd.addEventListener("click", handleButtonAddText);

//inputs
const handleKeyUp = (e) => {
  if ((e.key === "Enter" && inputText.value !== "")) {
    const newLi = document.createElement("li");
    const newLiDate = document.createElement("li");
    newLi.classList.add("newLi");
    newLiDate.classList.add("newLi");
    newLi.innerHTML = inputText.value;
    newLiDate.innerHTML = inputDate.value;
    listUl.append(newLi);
    listUl.append(newLiDate);
    inputText.value = "";
    inputDate.value = "";
  }
};

html.addEventListener("keyup", handleKeyUp);
html.addEventListener("keyup", handleKeyUp);

//button clear
const handleButtonDel = () => {
  if (listUl.value !== "") {
    listUl.remove();
  }
};

buttonDel.addEventListener("click", handleButtonDel);

//delete item - delegate
const handleDelegateDel = (e) => {
  //target é o novo li criado
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
};

listUl.addEventListener("click", handleDelegateDel);
