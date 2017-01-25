champions = {
  "frontlines":
    ["Barik",
    "Fernando",
    "Makoa",
    "Ruckus",
    "Torvald"],

  "damage":
    ["Bomb King",
    "Cassie",
    "Drogoz",
    "Kinessa",
    "Sha Lin",
    "Tyra",
    "Viktor"],

  "support":
    ["Grohk",
    "Grover",
    "Mal'Damba",
    "Pip",
    "Ying"],

  "flank":
    ["Androxus",
    "Buck",
    "Evie",
    "Skye"],
};

function randomise(){

  pool = [];

  $("input").each(function() {

    if (this.checked){
      pool = pool.concat(champions[this.id]);
    };

  });

  //choose a champion from the pool
  chosen = pool[Math.floor(Math.random()*pool.length)];
  //set the text to the correct champion
  $("#answer").html(chosen);

  //setting the image
  url = "imgs/120px-Champion_" + chosen.replace(/\s+/g, '') + "_Icon.png";
  $("#profile").attr("src",url);

};

$( document ).ready(function() {
    randomise();
});
