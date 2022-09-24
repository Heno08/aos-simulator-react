export default function wounding(hits) {
  let wounds = 0;
  for (let i = 0; i < hits.length; i++) {
    if(hits[i] >= 3) {
      wounds++;
    }
  };
  return wounds
};
