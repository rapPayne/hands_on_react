import { People } from "./People"

function App() {
  const people = [
    { id: 0, name: { first: "Chandler", last: "Bing" } },
    { id: 1, name: { first: "Monica", last: "Geller" } },
    { id: 2, name: { first: "Phoebe", last: "Buffay" } },
    { id: 3, name: { first: "Rachel", last: "Green" } },
    { id: 4, name: { first: "Joey", last: "Tribiani" } },
  ];
  const numberToFetch = 10;
  const gender = "all";
  return (
    <>
      <header>
      </header>
      <main>
        <section className="PeopleQuery">
          <div>
            <label htmlFor="numberToFetch">Number to fetch</label>
            <input onChange={e => console.log(e.target.value)} type="number" id="numberToFetch" value={numberToFetch} />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select onChange={e => console.log(e.target.value)} value={gender}>
              <option>all</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
        </section>
        <button onClick={() => fetchPeople(numberToFetch, gender)}>Get people</button>
        {people ? <People people={people} /> : <p>No people to show</p>}
      </main>
      <footer>
        Copyright &copy; Us.com {(new Date()).getFullYear()}
      </footer>
    </>
  )

  function fetchPeople(numberToFetch, gender) {
    const url = `https://randomuser.me/api/?results=${numberToFetch}&gender=${gender}&seed=42`
    fetch(url)
      .then(res => res.json())
      .then(res => res.results)
      .then(people => console.log("People", people))
      .catch(err => console.error("Error fetching", err))
  }
}

export default App
