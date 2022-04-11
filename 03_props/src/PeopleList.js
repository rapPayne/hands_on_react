import { Person } from './Person';

export const PeopleList = ({ people }) => {
  return (
    <>
      <h1>People List</h1>
      {people.map(person => <Person key={person.login?.uuid} person={person} />)}

    </>
  )
}