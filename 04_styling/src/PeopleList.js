import { Person } from './Person';

export const PeopleList = ({ people }) => {
  return (
    <>
      <h1>People List</h1>
      <section style={styles.wrapper}>
        {people.map(person => <Person person={person} key={person.login?.uuid} />)}
      </section>
    </>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}