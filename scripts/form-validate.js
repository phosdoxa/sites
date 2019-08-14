function init() {
  const submitBtn = document.getElementById("submit__btn");
  const inputField = document.getElementById("user-email");
  let warnElements = document.getElementsByClassName("hide");
  let warnElemLists = Array.prototype.slice.call(warnElements);

  submitBtn.addEventListener("click", handleBtnClick);

  function handleBtnClick() {
    if (!validateEmail(inputField.value)) {
      warnElemLists[1].textContent = "Please provide a valid email!";
      for (let i = 0; i < warnElemLists.length; i++) {
          warnElemLists[i].setAttribute("class", "show");
      }
    } else {
      warnElemLists[0].setAttribute("class", "hide");
      warnElemLists[1].textContent = "Thank you for your submit!";
      inputField.value = "";
    }
  }

  // Validate email solution using regex from StackOverflow
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

window.onload = init;
