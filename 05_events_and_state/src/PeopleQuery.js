import React, { useState } from 'react';

export const PeopleQuery = ({ getPeople }) => {
  const [searchParams, setSearchParams] = useState({ number: 5, nat: ['au', 'br', 'ca', 'ch', 'de'], gender: "all" });

  return (
    <>
      <div className="mdl-textfield mdl-js-textfield">
        <input value={searchParams.number} onChange={e => setSearchParams({ ...searchParams, number: e.target.value }) } className="mdl-textfield__input" type="number" id="number" autoComplete="false" />
        <label className="mdl-textfield__label" htmlFor="number">How many people do you want?</label>
      </div>

      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="au">
          <input name='au' checked={searchParams.nat.includes('au')} onChange={e => setNat(e)} type="checkbox" id="au" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Australia</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="br">
          <input name='br' checked={searchParams.nat.includes('br')} onChange={e => setNat(e)} type="checkbox" id="br" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Brazil</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="ca">
          <input name='ca' checked={searchParams.nat.includes('ca')} onChange={e => setNat(e)} type="checkbox" id="ca" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Canada</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="ch">
          <input name='ch' checked={searchParams.nat.includes('ch')} onChange={e => setNat(e)} type="checkbox" id="ch" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">China</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="de">
          <input name='de' checked={searchParams.nat.includes('de')} onChange={e => setNat(e)} type="checkbox" id="de" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Germany</span>
        </label>
      </div>

      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <select value={searchParams.gender} onChange={e => setSearchParams({ ...searchParams, gender: e.target.value })} className="mdl-textfield__input" id="gender" >
          <option value="all">all</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <label className="mdl-textfield__label" htmlFor="gender">Which gender(s) do you want to see?</label>
      </div>
      <div>
        <button onClick={() => getPeople(searchParams.number, searchParams.nat, searchParams.gender)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Get People
        </button>
      </div>
    </>
  )

  function setNat(e) {
    const { name, checked } = e.target;
    if (checked) {
      setSearchParams({ ...searchParams, nat: [...searchParams.nat, name] })
    } else {
      setSearchParams({ ...searchParams, nat: searchParams.nat.filter(n => n !== name) })
    }
  }
}