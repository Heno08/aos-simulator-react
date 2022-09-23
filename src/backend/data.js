const data = {
  models: [
    {
      id: 1,
      name: "Stormcast Vindictor",
      unitSize: 5,
      wounds: 2,
      save: 3,
      bravery: 7,
      img: "SC-Vindictor",
      meleeWeapon: {
        name: "Stormspear",
        attacks: 2,
        toHit: 3,
        toWound: 3,
        rend: 1,
        dmg: 1
      }
    },
    {
      id: 2,
      name: "Gutrippa",
      unitSize: 10,
      wounds: 2,
      save: 5,
      bravery: 5,
      img: "Gutrippa",
      meleeWeapon: {
        name: "Wicked Hakka",
        attacks: 2,
        toHit: 4,
        toWound: 3,
        rend: 0,
        dmg: 1
      }
    }
  ]
}

export default data
