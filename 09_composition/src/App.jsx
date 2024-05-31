import { useState } from 'react'
import { People } from "./People"
import { PeopleQuery } from './PeopleQuery';

function App() {
  const [people, setPeople] = useState([
    { id: 0, name: { first: "Chandler", last: "Bing" } },
    { id: 1, name: { first: "Monica", last: "Geller" } },
    { id: 2, name: { first: "Phoebe", last: "Buffay" } },
    { id: 3, name: { first: "Rachel", last: "Green" } },
    { id: 4, name: { first: "Joey", last: "Tribiani" } },
  ]);
  const [numberToFetch, setNumberToFetch] = useState(10);
  const [gender, setGender] = useState("all");
  return (
    <>
      <header>
      </header>
      <main>
        <PeopleQuery numberToFetch={numberToFetch} gender={gender} setNumberToFetch={setNumberToFetch} setGender={setGender} fetchPeople={fetchPeople} />
        {people ? <People people={people} /> : <p>No people to show</p>}
      </main>
      <footer>
        Copyright &copy; Us.com {(new Date()).getFullYear()}
      </footer>
    </>
  )

  function fetchPeople(numberToFetch, gender) {
    const url = `https://randomuser.me/api/?results=${numberToFetch}&gender=${gender}`
    fetch(url)
      .then(res => res.json())
      .then(res => res.results)
      .then(people => people.map((p, i) => ({ ...p, id: i })))
      .then(people => setPeople(people))
      .catch(err => console.error("Error fetching", err))
  }
}

export default App
