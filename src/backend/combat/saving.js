export default function saving(saves) {
  const saved = saves.filter((save) => save > 3)
  return saved
}
