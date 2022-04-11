import { useState } from 'react';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material';
import { PeopleList } from './PeopleList';
import { PeopleQuery } from './PeopleQuery';
import { fetchPeople } from './fetchPeople';

function App() {
  const [people, setPeople] = useState([]);

  return (
    <>
      <header>
        <h1>People</h1>
      </header>
      <main>
        <PeopleQuery getPeople={getPeople}></PeopleQuery>
        <PeopleList people={people} />
      </main>
      <footer>
        copyright &copy; Us.com, {(new Date()).getFullYear()}
      </footer>
    </>
  );

  function getPeople(number, nat, gender) {
    fetchPeople(number, nat, gender)
      .then(people => setPeople(people));
  }
}

export default App;
