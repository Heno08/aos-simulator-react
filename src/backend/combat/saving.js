export default function saving(saveRoll, save) {
  let saves = 0;
  for (let i = 0; i < saveRoll.length; i++) {
    if(saveRoll[i] >= save) {
      saves++;
    }
  };
  return saves
}
