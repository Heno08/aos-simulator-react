export default function saving(saveRoll) {
  let saves = 0;
  for (let i = 0; i < saveRoll.length; i++) {
    if(saveRoll[i] >= 3) {
      saves++;
    }
  };
  return saves
}
