export default function hitting(hitRoll, toHit) {
  let hits = 0;
  for (let i = 0; i < hitRoll.length; i++) {
    if(hitRoll[i] >= toHit) {
      hits++;
    }
  };
  return hits
};
