/* eslint-disable react/prop-types */
import { Person } from "./Person";

export function People({ people }) {
  return (
    <>
      <h1>People</h1>
      {people.map(person => <div key={person.name}>{person.name.first} {person.name.last}</div>)}
      <Person />
    </>
  )
}