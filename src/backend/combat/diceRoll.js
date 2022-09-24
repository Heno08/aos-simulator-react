export default function diceRoll(n) {
  const rolls = [];
  for (let i = 0; i < n; i++) {
    let roll = 1 + Math.floor(Math.random() * 6);
    rolls.push(roll)
  };
  return rolls;
};
