import React from 'react';

export const Person = ({person}) => {
  return (
    <h1>{person.name.first} {person.name.last}</h1>
  )
}