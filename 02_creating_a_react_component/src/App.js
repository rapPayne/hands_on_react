import React, { useState } from 'react';
import { PeopleList } from './PeopleList';
import { PeopleQuery } from './PeopleQuery';
import { fetchPeople } from './fetchPeople';

function App() {
  const [people, setPeople ] = useState([]);

  return (
    <div>
      <header>
        <h1>People</h1>
      </header>
      <main>
        <button onClick={getPeople}>Get People</button>
        {people.map(person => <p key={person.login?.uuid}>{person.name?.first} {person.name?.last}</p>)}
        <PeopleQuery></PeopleQuery>
        <PeopleList />
      </main>
      <footer>
        copyright &copy; Us.com, {(new Date()).getFullYear()}
      </footer>
    </div>
  );

  function getPeople() {
    fetchPeople()
    .then(people => setPeople(people) );
  }
}

export default App;
