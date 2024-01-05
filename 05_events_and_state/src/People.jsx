import { useState } from "react";
import { Person } from "./Person";

export function People() {
  const [people, setPeople] = useState([]);
  console.log("people are", people);
  return (
    <>
      <h1>People</h1>
      <button onClick={() => fetchPeople()}>Fetch people</button>
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {people.length ?
          people.map(person => <Person person={person} remove={removePersonFromList} key={person.login.uuid} />)
          :
          <p>No people to show</p>
        }
      </section>
    </>
  )

  function fetchPeople() {
    fetch(`https://randomuser.me/api?results=10`)
      .then(res => res.json())
      .then(res => res.results)
      .then(ppl => setPeople(ppl))
      .catch(err => console.error("Error fetching people", err));
  }

  function removePersonFromList(person) {
    setPeople(people.filter(p => p !== person));
  }
}