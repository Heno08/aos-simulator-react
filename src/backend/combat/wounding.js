export default function wounding(hits, toWound) {
  let wounds = 0;
  for (let i = 0; i < hits.length; i++) {
    if(hits[i] >= toWound) {
      wounds++;
    }
  };
  return wounds
};
