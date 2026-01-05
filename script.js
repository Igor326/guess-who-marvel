// ======================
// Дані персонажів
// ======================
const characters = [
  { id: 1, name: "Adam Warlock", image: "assets/images/adam_warlock.jpg", description: "Male,Projectile,Strategist,MCU,Guardians of the Galaxy,Has ability to fly" },
  { id: 2, name: "Angela", image: "assets/images/angela.jpg", description: "Female,Melee,Helmet/mask,Vanguard,S1+,Guardians of the Galaxy,Flying,Has ability to fly,White" },
  { id: 3, name: "Black Panther", image: "assets/images/black_panther.jpg", description: "Male,Melee,Helmet/mask,DPS,MCU,From Earth" },
  { id: 4, name: "Black Widow", image: "assets/images/black_widow.jpg", description: "Female,Melee,Projectile,DPS,MCU,White,From Earth" },
  { id: 5, name: "Blade", image: "assets/images/blade.jpg", description: "Male,Melee,Projectile,DPS,S1+,MCU,From Earth" },
  { id: 6, name: "Captain America", image: "assets/images/captain_america.jpg", description: "Male,Melee,Projectile,Helmet/mask,Vanguard,MCU,White,From Earth" },
  { id: 7, name: "Cloak and Dagger", image: "assets/images/cloak_and_dagger.jpg", description: "Male,Female,Projectile,Melee,Strategist,Has ability to fly,White,From Earth" },
  { id: 8, name: "Daredevil", image: "assets/images/daredevil.jpg", description: "Male,Melee,Helmet/mask,DPS,S1+,MCU,White,From Earth" },
  { id: 9, name: "Doctor Strange", image: "assets/images/doctor_strange.jpg", description: "Male,Projectile,Vanguard,MCU,Has ability to fly,White,From Earth" },
  { id: 10, name: "Emma Frost", image: "assets/images/emma_frost.jpg", description: "Female,X-Men,Projectile,Vanguard,S1+,White,From Earth" },
  { id: 11, name: "Gambit", image: "assets/images/gambit.jpg", description: "Male,X-Men,Projectile,Strategist,S1+,MCU,White,From Earth" },
  { id: 12, name: "Groot", image: "assets/images/groot.jpg", description: "Male,Melee,Vanguard,MCU,Guardians of the Galaxy" },
  { id: 13, name: "Hawkeye", image: "assets/images/hawkeye.jpg", description: "Male,Projectile,Helmet/mask,DPS,MCU,White,From Earth" },
  { id: 14, name: "Hela", image: "assets/images/hela.jpg", description: "Female,Projectile,Helmet/mask,DPS,MCU,White" },
  { id: 15, name: "Hulk", image: "assets/images/hulk.jpg", description: "Male,Melee,Vanguard,MCU,White,From Earth" },
  { id: 16, name: "Human Torch", image: "assets/images/human_torch.jpg", description: "Male,Fantastic 4,Projectile,DPS,S1+,MCU,Flying,Has ability to fly,White,From Earth,Summer skin" },
  { id: 17, name: "Invisible Woman", image: "assets/images/invisible_woman.jpg", description: "Female,Fantastic 4,Projectile,Strategist,S1+,MCU,White,From Earth,Summer skin" },
  { id: 18, name: "Iron Fist", image: "assets/images/iron_fist.jpg", description: "Male,Melee,Helmet/mask,DPS,From Earth" },
  { id: 19, name: "Iron Man", image: "assets/images/iron_man.jpg", description: "Male,Projectile,Helmet/mask,DPS,MCU,Flying,Has ability to fly,White,From Earth" },
  { id: 20, name: "Phoenix", image: "assets/images/phoenix.jpg", description: "Female,X-Men,Projectile,DPS,S1+,Has ability to fly,White,From Earth" },
  { id: 21, name: "Jeff the Land Shark", image: "assets/images/jeff_the_land_shark.jpg", description: "Male,Projectile,Strategist,From Earth" },
  { id: 22, name: "Loki", image: "assets/images/loki.jpg", description: "Male,Projectile,Helmet/mask,Strategist,MCU,White,Summer skin" },
  { id: 23, name: "Luna Snow", image: "assets/images/luna_snow.jpg", description: "Female,Projectile,Strategist,From Earth,Summer skin" },
  { id: 24, name: "Magik", image: "assets/images/magik.jpg", description: "Female,X-Men,Melee,Helmet/mask,DPS,White,From Earth" },
  { id: 25, name: "Magneto", image: "assets/images/magneto.jpg", description: "Male,X-Men,Projectile,Helmet/mask,Vanguard,White,From Earth" },
  { id: 26, name: "Mantis", image: "assets/images/mantis.jpg", description: "Female,Projectile,Strategist,MCU,Guardians of the Galaxy,White,Summer skin" },
  { id: 27, name: "Mister Fantastic", image: "assets/images/mister_fantastic.jpg", description: "Male,Fantastic 4,Melee,DPS,S1+,MCU,White,From Earth" },
  { id: 28, name: "Moon Knight", image: "assets/images/moon_knight.jpg", description: "Male,Projectile,Helmet/mask,DPS,MCU,White,From Earth" },
  { id: 29, name: "Namor", image: "assets/images/namor.jpg", description: "Male,Projectile,DPS,MCU,From Earth" },
  { id: 30, name: "Peni Parker", image: "assets/images/peni_parker.jpg", description: "Female,Projectile,Helmet/mask,Vanguard,From Earth" },
  { id: 31, name: "Psylocke", image: "assets/images/psylocke.jpg", description: "Female,X-Men,Projectile,DPS,From Earth,Summer skin" },
  { id: 32, name: "Rocket Raccoon", image: "assets/images/rocket_raccoon.jpg", description: "Male,Projectile,Strategist,MCU,Guardians of the Galaxy,Summer skin" },
  { id: 33, name: "Rogue", image: "assets/images/rogue.jpg", description: "Female,X-Men,Melee,Vanguard,S1+,Has ability to fly,White,From Earth" },
  { id: 34, name: "Scarlet Witch", image: "assets/images/scarlet_witch.jpg", description: "Female,Helmet/mask,DPS,MCU,White,From Earth" },
  { id: 35, name: "Spider-man", image: "assets/images/spider_man.jpg", description: "Male,Melee,Helmet/mask,DPS,MCU,White,From Earth" },
  { id: 36, name: "Squirrel Girl", image: "assets/images/squirrel_girl.jpg", description: "Female,Projectile,DPS,White,From Earth,Summer skin" },
  { id: 37, name: "Star-lord", image: "assets/images/star_lord.jpg", description: "Male,Projectile,Helmet/mask,DPS,MCU,Guardians of the Galaxy,Has ability to fly,White,From Earth" },
  { id: 38, name: "Storm", image: "assets/images/storm.jpg", description: "Female,X-Men,Projectile,DPS,Flying,Has ability to fly,From Earth" },
  { id: 39, name: "The Punisher", image: "assets/images/the_punisher.jpg", description: "Male,Projectile,DPS,MCU,White,From Earth,Summer skin" },
  { id: 40, name: "The Thing", image: "assets/images/the_thing.jpg", description: "Male,Fantastic 4,Melee,Vanguard,S1+,MCU,From Earth,Summer skin" },
  { id: 41, name: "Thor", image: "assets/images/thor.jpg", description: "Male,Melee,Helmet/mask,Vanguard,MCU,White,Summer skin" },
  { id: 42, name: "Ultron", image: "assets/images/ultron.jpg", description: "Projectile,Male,Strategist,S1+,MCU,Flying,Has ability to fly,From Earth" },
  { id: 43, name: "Venom", image: "assets/images/venom.jpg", description: "Male,Melee,Vanguard" },
  { id: 44, name: "Winter Soldier", image: "assets/images/winter_soldier.jpg", description: "Male,Projectile,Helmet/mask,DPS,MCU,White,From Earth" },
  { id: 45, name: "Wolverine", image: "assets/images/wolverine.jpg", description: "Male,X-Men,Melee,DPS,S1+,MCU,White,From Earth" }
];

// ======================
// Стан гри
// ======================
let guessedCharacterId = null;

// ======================
// DOM
// ======================
const board = document.getElementById("board");
const guessedSlot = document.getElementById("guessedCharacter");

// Заборона стандартного контекстного меню
document.addEventListener("contextmenu", e => e.preventDefault());

// ======================
// Рендер плиток
// ======================
function renderBoard() {
  board.innerHTML = "";

  characters.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = character.id;

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <div class="info">
        <strong>${character.name}</strong><br>
        ${character.description}
      </div>
    `;

    // Лівий клік — відкидання
    card.addEventListener("click", () => toggleEliminate(card));

    // Правий клік — загадати
    card.addEventListener("contextmenu", () => setGuessed(character, card));

    board.appendChild(card);
  });
}

// ======================
// Відкидання персонажа
// ======================
function toggleEliminate(card) {
  card.classList.toggle("eliminated");
}

// ======================
// Загадування персонажа
// ======================
function setGuessed(character, card) {
  // Зняти попередній guessed
  document
    .querySelectorAll(".card.guessed")
    .forEach(c => c.classList.remove("guessed"));

  guessedCharacterId = character.id;
  card.classList.add("guessed");

  renderGuessed(character);
}

// ======================
// Верхній блок
// ======================
function renderGuessed(character) {
  guessedSlot.innerHTML = `
    <div class="card guessed">
      <img src="${character.image}">
      <div class="info">
        <strong>${character.name}</strong><br>
        ${character.description}
      </div>
    </div>
  `;
}

// ======================
renderBoard();

// ======================
// Забираємо героїв з CSV
// ======================

