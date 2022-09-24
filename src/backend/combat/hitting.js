export default function hitting(hitRoll) {
  let hits = 0;
  for (let i = 0; i < hitRoll.length; i++) {
    if(hitRoll[i] >= 3) {
      hits++;
    }
  };
  return hits
};
