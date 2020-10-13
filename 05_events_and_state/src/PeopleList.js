import React from 'react';
import { Person } from './Person';

export const PeopleList = ({ people }) => {
  return (
    <>
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