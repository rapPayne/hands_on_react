import React from 'react';

export const PeopleList = ({ people }) => {
  return (
    <>
      <h1>People List</h1>
      {people.map(person => <p key={person.login?.uuid}>{person.name?.first} {person.name?.last}</p>)}
    </>
  )
}