import { useState } from "react";
import { Person } from "./Person";

export function People() {
  const [people, setPeople] = useState([]);
  console.log("people are", people);
  return (
    <>
      <h1>People</h1>
      <button onClick={() => fetchPeople()}>Fetch people</button>
      <section>
        {people.length ?
          people.map(person => (
            <div key={person?.name.last}>
              <img src={person?.picture.large} alt={person?.name.first} />
              <p>{person?.name.first} {person?.name.last}</p>
            </div>
          ))
          :
          <p>No people to show</p>
        }
      </section>
      <Person />
    </>
  )

  function fetchPeople() {
    fetch(`https://randomuser.me/api?results=10`)
      .then(res => res.json())
      .then(res => res.results)
      .then(ppl => setPeople(ppl))
      .catch(err => console.error("Error fetching people", err));
  }
}