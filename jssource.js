const champions = {
  frontlines: [
    'Ash',
    'Atlas',
    'Barik',
    'Fernando',
    'Inara',
    'Khan',
    'Makoa',
    'Raum',
    'Ruckus',
    'Terminus',
    'Torvald',
    'Yagorath'
  ],

  damage: [
    'Bomb King',
    'Cassie',
    'Dredge',
    'Drogoz',
    'Imani',
    'Kinessa',
    'Lian',
    'Octavia',
    'Sha Lin',
    'Strix',
    'Tiberius',
    'Tyra',
    'Viktor',
    'Vivian',
    'Willo'
  ],

  support: [
    'Furia',
    'Grohk',
    'Grover',
    'Jenos',
    "Mal'Damba",
    'Pip',
    'Seris',
    'Ying',
    'Io',
    'Corvus'
  ],

  flank: [
    'Androxus',
    'Buck',
    'Evie',
    'Koga',
    'Lex',
    'Maeve',
    'Moji',
    'Skye',
    'Talus',
    'Zhin',
    'Vora'
  ]
}

let blacklist = []

// eslint-disable-next-line no-unused-vars
function toggleOverlay () {
  document.getElementById('overlay').style.display = document.getElementById('overlay').style.display === '' ? 'block' : ''
}

// eslint-disable-next-line no-unused-vars
function toggleBlacklist (el) {
  if (el.classList.contains('off')) {
    el.classList.remove('off')

    // Remove from blacklist
    const index = blacklist.indexOf(el.id)
    if (index > -1) {
      blacklist.splice(index, 1)
    }
  } else {
    el.classList.add('off')

    // Add to blacklist
    blacklist.push(el.id)
  }

  // Store blacklist as cookie

  const string = JSON.stringify(blacklist)
  localStorage.setItem('blacklist', string)

  randomise()
}

function randomise () {
  let pool = []

  Array.prototype.forEach.call(document.querySelectorAll('input'), (el, i) => {
    if (el.checked) {
      pool = pool.concat(champions[el.id])
    }
  })

  function isInBlacklist (x) {
    return blacklist.indexOf(x) !== -1
  }

  if (pool.length !== 0) {
    // Check that not all of the pool are in the blacklist
    if (pool.every(isInBlacklist)) {
      // Complain that no champs could be chosen
      document.getElementById('answer').innerHTML = "You've blacklisted all the champions you could roll"

      // Set the image to nothing
      document.getElementById('profile').src = 'imgs/champs/none.jpg'

      // Stop trying to pick a champ
      return
    }
  }

  // choose a champion from the pool
  let working = true
  let chosen

  while (working) {
    // Choose a  random champion from the pool
    chosen = pool[Math.floor(Math.random() * pool.length)]

    // If the champion's not in the blacklist
    if (blacklist.indexOf(chosen) === -1) {
      working = false
    }
  }

  switch (chosen) {
    case undefined:
      // Complain that no categories are checked
      document.getElementById('answer').innerHTML = 'You need to select at least one category'

      // Set the image to nothing
      document.getElementById('profile').src = 'imgs/champs/none.jpg'
      break

    default:

      // Set the text to the correct champion
      document.getElementById('answer').innerHTML = chosen

      // Setting the image
      document.getElementById('profile').src = `imgs/champs/${chosen.toLowerCase().replace(' ', '-')}.jpg`
      break
  }
}

(function () {
  // Load blacklist from cookies
  if (localStorage.getItem('blacklist')) {
    blacklist = JSON.parse(localStorage.getItem('blacklist'))
  }

  randomise()

  // Generate blacklist icons

  // For category in champions
  for (const cat in champions) {
    // For champion in category
    for (let index = 0; index < champions[cat].length; index++) {
      const champ = champions[cat][index]
      const template = document.querySelector('#template').cloneNode(true)

      template.id = champ

      template.style.backgroundImage = `url(imgs/champs/${champ.toLowerCase().replace(' ', '-').replace("'", "\\'")}.jpg)`

      template.children[0].src = `imgs/champs/${champ.toLowerCase().replace(' ', '-')}.jpg`

      // Check if disabled
      if (blacklist.includes(champ)) {
        template.classList.add('off')
      }

      document.getElementById(`${cat}-blacklist`).appendChild(template)
    }
  }
}())
