const hitBox = document.getElementById('hit-box');
const woundBox = document.getElementById('wound-box');
const saveBox = document.getElementById('save-box');
const damageBox = document.getElementById('damage-box');
const button = document.querySelector('#attack-btn');

function diceRoll(n) {
  const rolls = [];
  for (let i = 0; i < n; i++) {
    let roll = 1 + Math.floor(Math.random() * 6);
    rolls.push(roll)
  };
  return rolls;
};

function hitting(roll, fighter) {
  hitBox.innerText = '';
  let hits = 0;
  for (let i = 0; i < roll.length; i++) {
    if(roll[i] >= fighter.meleeWeapon.toHit) {
      hits++;
    }
  };
  hitBox.innerText = ` You have hit ${hits} times!`
  return hits
};

function wounding(hits, fighter) {
  woundBox.innerText = '';
  let wounds = 0;
  for (let i = 0; i < hits.length; i++) {
    if(hits[i] >= fighter.meleeWeapon.toWound) {
      wounds++;
    }
  };
  woundBox.innerText = ` You have wounded ${wounds} times!`
  return wounds
};

function damage(w, fighter, opponent) {
  saveBox.innerText = '';
  damageBox.innerText = '';
  let saveThrow = diceRoll(w);
  console.log(saveThrow)
  let saved = 0;
  let failed = 0;
  for (let i = 0; i < saveThrow.length; i++) {
    if(saveThrow[i] >= opponent.save) {
      saved++
    } else {
      failed++
    }
  };
  console.log(opponent.wounds);
  opponent.wounds = opponent.wounds - failed * fighter.meleeWeapon.dmg;
  console.log(opponent.wounds);
  saveBox.innerText = ` ${saved} Saved & ${failed} Failed`
  if (opponent.wounds <= 0) {
    damageBox.innerText = ` Your opponent has been slain!`
    button.innerText = "Re-Set"
    // function reload() {
    //   reload = location.reload();
    // }
    // button.addEventListener('click', reload)
  } else if (opponent.wounds > 1) {
    damageBox.innerText = ` You have done ${failed * fighter.meleeWeapon.dmg} damage. Your opponent has ${opponent.wounds} wounds left`;
    button.innerText = "Roll again"
  } else {
    damageBox.innerText = ` You have done ${failed * fighter.meleeWeapon.dmg} damage. Your opponent has ${opponent.wounds} wound left`
    button.innerText = "Roll again";
  }
}

export { diceRoll, hitting, wounding, damage }
