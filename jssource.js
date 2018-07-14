champions = {
  "frontlines": [
    "Ash",
    "Barik",
    "Fernando",
    "Inara",
    "Khan",
    "Makoa",
    "Ruckus",
    "Terminus",
    "Torvald"
  ],

  "damage": [
    "Bomb King",
    "Cassie",
    "Drogoz",
    "Kinessa",
    "Lian",
    "Sha Lin",
    "Strix",
    "Tyra",
    "Viktor",
    "Vivian",
    "Willo"
  ],

  "support": [
    "Furia",
    "Grohk",
    "Grover",
    "Jenos",
    "Mal'Damba",
    "Pip",
    "Seris",
    "Ying"
  ],

  "flank": [
    "Androxus",
    "Buck",
    "Evie",
    // "Koga",
    "Lex",
    "Maeve",
    "Moji",
    "Skye",
    "Talus",
    "Zhin"
  ],
};

function randomise() {

  pool = [];

  $("input").each(function () {

    if (this.checked) {
      pool = pool.concat(champions[this.id]);
    };

  });

  //choose a champion from the pool
  chosen = pool[Math.floor(Math.random() * pool.length)];
  console.log(chosen);
  if (chosen === undefined) {

    //Complain that no categories are checked
    $("#answer").html("You need to select at least one category");

    //Set the image to nothing
    $("#profile").attr("src", "imgs/110px-Champion_None_Icon.png");

  } else {

    //set the text to the correct champion
    $("#answer").html(chosen);

    //setting the image
    url = "imgs/110px-Champion_" + chosen.replace(/\s+/g, '') + "_Icon.png";
    $("#profile").attr("src", url);

  }
};

$(document).ready(function () {
  randomise();
});