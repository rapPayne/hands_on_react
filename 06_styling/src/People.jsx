/* eslint-disable react/prop-types */
import { Person } from "./Person";
import './People.css'

export function People({ people }) {
  return (
    <section className="People">
      <h1>People</h1>
      <section style={styles.wrapper}>
        {people.map(person => <div key={person.id}>{person.name.first} {person.name.last}</div>)}
      </section>
      <Person />
    </section>
  )
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  }
}