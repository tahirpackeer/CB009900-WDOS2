/* document.addEventListener("DOMContentLoaded", function () {
  const cardNumberInput = document.getElementById("cardNumber");
  const expiryDateInput = document.getElementById("expiryDate");
  const cvcInput = document.getElementById("cvc");
  const cardNumberError = document.getElementById("cardNumberError");
  const expiryDateError = document.getElementById("expiryDateError");
  const cvcError = document.getElementById("cvcError");
  const registrationForm = document.getElementById("registrationForm");

  function validateCardNumber() {
      const cardNumberValue = cardNumberInput.value.trim();
      const cardNumberPattern = /^\d{16}$/;
      if (!cardNumberPattern.test(cardNumberValue)) {
          cardNumberError.textContent = "Card number must have 16 digits.";
          return false;
      } else {
          cardNumberError.textContent = "";
          return true;
      }
  }

  function validateExpiryDate() {
      const expiryDateValue = expiryDateInput.value.trim();
      const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryDatePattern.test(expiryDateValue)) {
          expiryDateError.textContent = "Enter a valid expiry date (MM/YY).";
          return false;
      } else {
          expiryDateError.textContent = "";
          return true;
      }
  }

  function validateCVC() {
      const cvcValue = cvcInput.value.trim();
      const cvcPattern = /^\d{3,4}$/;
      if (!cvcPattern.test(cvcValue)) {
          cvcError.textContent = "CVC/CVV must have 3 or 4 digits.";
          return false;
      } else {
          cvcError.textContent = "";
          return true;
      }
  }

  cardNumberInput.addEventListener("input", validateCardNumber);
  expiryDateInput.addEventListener("input", validateExpiryDate);
  cvcInput.addEventListener("input", validateCVC);

  registrationForm.addEventListener("submit", function (event) {
      if (!validateCardNumber() || !validateExpiryDate() || !validateCVC()) {
          event.preventDefault();
      }
  });
});
 */
document.addEventListener("DOMContentLoaded", function () {
  const cardNumberInput = document.getElementById("cardNumber");
  const expiryDateInput = document.getElementById("expiryDate");
  const cvcInput = document.getElementById("cvc");
  const cardNumberError = document.getElementById("cardNumberError");
  const expiryDateError = document.getElementById("expiryDateError");
  const cvcError = document.getElementById("cvcError");
  const registrationForm = document.getElementById("registrationForm");
  const purchaseButton = document.getElementById("purchaseButton");

  function validateCardNumber() {
    const cardNumberValue = cardNumberInput.value.trim();
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumberValue)) {
      cardNumberError.textContent = "Card number must have 16 digits.";
      return false;
    } else {
      cardNumberError.textContent = "";
      return true;
    }
  }

  function validateExpiryDate() {
    const expiryDateValue = expiryDateInput.value.trim();
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDatePattern.test(expiryDateValue)) {
      expiryDateError.textContent = "Enter a valid expiry date (MM/YY).";
      return false;
    } else {
      expiryDateError.textContent = "";
      return true;
    }
  }

  function validateCVC() {
    const cvcValue = cvcInput.value.trim();
    const cvcPattern = /^\d{3,4}$/;
    if (!cvcPattern.test(cvcValue)) {
      cvcError.textContent = "CVC/CVV must have 3 or 4 digits.";
      return false;
    } else {
      cvcError.textContent = "";
      return true;
    }
  }

  function checkFormValidity() {
    return (
      validateCardNumber() && validateExpiryDate() && validateCVC()
    );
  }

  cardNumberInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
  });

  expiryDateInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
  });

  cvcInput.addEventListener("input", function () {
    purchaseButton.disabled = !checkFormValidity();
  });

  registrationForm.addEventListener("submit", function (event) {
    if (!checkFormValidity()) {
      event.preventDefault();
    }
  });
});


//disable links
