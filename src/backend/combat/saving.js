export default function saving(saves) {
  let saved = 0;
  let failed = 0;
  for (let i = 0; i < saves.length; i++) {
    if(saves[i] >= 3) {
      saved++
    } else {
      failed++
    }
  };
  return [ saved, failed ]
}
