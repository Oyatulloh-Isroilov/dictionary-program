let translations = [];

// localStoragega saqlash uchun kod

if (localStorage.getItem("translations")) {
  translations = JSON.parse(localStorage.getItem("translations"));
  displayTranslations();
}

function deleteTranslation(index) {
  translations.splice(index, 1); // Tanlangan tarjimani translations array'idan o'chirish
  localStorage.setItem("translations", JSON.stringify(translations)); // Yangilangan arrayni localStorage'ga qaytarish
  displayTranslations(); // Tarjimalarni ko'rsatishni yangilash
}

// saqlash uchun menu

function saveTranslation() {
  const englishInput = document
    .getElementById("englishWord")
    .value.toLowerCase();
  const uzbekInput = document.getElementById("uzbekWord").value.toLowerCase();

  if (englishInput && uzbekInput) {
    translations.push({ english: englishInput, uzbek: uzbekInput });
    localStorage.setItem("translations", JSON.stringify(translations));
    displayTranslations();

    // Yangi tarjima qo'shilgandan so'ng, inputlarni tozalash
    document.getElementById("englishWord").value = "";
    document.getElementById("uzbekWord").value = "";
  }
}

function displayTranslations() {
  const translationsDiv = document.getElementById("translations");
  translationsDiv.innerHTML = "";

  translations.forEach(function (translation) {
    const div = document.createElement("div");
    div.textContent = `Inglizcha: ${translation.english}, O'zbekcha: ${translation.uzbek}`;
    translationsDiv.appendChild(div);
  });
}
// search uchun menu

function searchTranslation() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const resultDisplay = document.getElementById("result");
  const foundTranslations = translations.filter(
    (translation) =>
      translation.english.toLowerCase().includes(searchInput) ||
      translation.uzbek.toLowerCase().includes(searchInput)
  );

  if (foundTranslations.length > 0) {
    resultDisplay.innerHTML = ""; // Natijani tozalash
    foundTranslations.forEach((translation) => {
      const div = document.createElement("div");
      div.textContent = `Inglizcha: ${translation.english}, O'zbekcha: ${translation.uzbek}`;
      resultDisplay.appendChild(div);
    });
  } else {
    resultDisplay.textContent = "Tarjima topilmadi.";
  }
}

// delete btn uchun

function displayTranslations() {
  const translationsDiv = document.getElementById("translations");
  translationsDiv.innerHTML = "";

  translations.forEach(function (translation, index) {
    const div = document.createElement("div");
    div.textContent = `Inglizcha: ${translation.english}  , O'zbekcha: ${translation.uzbek}  `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTranslation(index);
    };

    div.appendChild(deleteButton); // O'chirish tugmasini divga qo'shish
    translationsDiv.appendChild(div);
  });
}

function deleteTranslation(index) {
  translations.splice(index, 1);
  localStorage.setItem("translations", JSON.stringify(translations));
  displayTranslations();
}

// So'zni o'zgartirish uchun

function editTranslation(index) {
  const newEnglish = prompt("Yangi inglizcha so'zni kiriting:");
  const newUzbek = prompt("Yangi o'zbekcha tarjimani kiriting:");

  if (newEnglish && newUzbek) {
    translations[index].english = newEnglish.toLowerCase();
    translations[index].uzbek = newUzbek.toLowerCase();
    localStorage.setItem("translations", JSON.stringify(translations));
    displayTranslations();
  } else {
    alert("Iltimos, yangi tarjimani to'liq kiriting!");
  }
}

function displayTranslations() {
  const translationsDiv = document.getElementById("translations");
  translationsDiv.innerHTML = "";

  translations.forEach(function (translation, index) {
    const div = document.createElement("div");
    div.textContent = `Inglizcha: ${translation.english}, O'zbekcha: ${translation.uzbek}`;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      editTranslation(index);
    };

    div.appendChild(editButton);
    translationsDiv.appendChild(div);
  });
}
