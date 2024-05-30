import { People } from "./People"

function App() {
  const people = [
    { id: 0, name: { first: "Chandler", last: "Bing" } },
    { id: 1, name: { first: "Monica", last: "Geller" } },
    { id: 2, name: { first: "Phoebe", last: "Buffay" } },
    { id: 3, name: { first: "Rachel", last: "Green" } },
    { id: 4, name: { first: "Joey", last: "Tribiani" } },
  ];
  return (
    <>
      <header>
      </header>
      <main>
        <button>Get people</button>
        {people ? <People people={people} /> : <p>No people to show</p>}
      </main>
      <footer>
        Copyright &copy; Us.com {(new Date()).getFullYear()}
      </footer>
    </>
  )
}

export default App
