export default function Logout({ setAdmin }){

  function handleLogout() {
    fetch("/logout", { method: "DELETE"}).then((r) => {
      if (r.ok) {
        setAdmin(null)
      }
    })
  };

  return (
    <button type="submit" onClick={() => handleLogout()}>Logout</button>
  );
}
