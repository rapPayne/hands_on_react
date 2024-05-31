/* eslint-disable react/prop-types */
import { Person } from "./Person";
import './People.css'

export function People({ people }) {
  return (
    <section className="People">
      <h1>People</h1>
      <section style={styles.wrapper}>
        {people.map(person => <Person key={person.id} first={person.name.first} last={person.name.last} email={person.email} cell={person.cell} imageSrc={person.picture?.large} />)}
      </section>
    </section>
  )
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  }
}