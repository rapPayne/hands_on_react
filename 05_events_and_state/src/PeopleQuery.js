import { useState } from 'react';

export const PeopleQuery = ({ getPeople }) => {
  const [nat, setNat] = useState(['de', 'au', 'ca', 'br', 'ch']);
  const [gender, setGender] = useState("all");
  const [numberOfPeople, setnumberOfPeople] = useState(10);
  return (
    <>
      <div className="mdl-textfield mdl-js-textfield">
        <input value={numberOfPeople} onChange={e => setnumberOfPeople(+e.target.value)} className="mdl-textfield__input" type="number" id="number" autoComplete="false" />
        <label className="mdl-textfield__label" htmlFor="number">How many people do you want?</label>
      </div>

      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="au">
          <input name='au' checked={nat.includes('au')} onChange={e => updateNatArray(e)} type="checkbox" id="au" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Australia</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="br">
          <input name='br' checked={nat.includes('br')} onChange={e => updateNatArray(e)} type="checkbox" id="br" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Brazil</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="ca">
          <input name='ca' checked={nat.includes('ca')} onChange={e => updateNatArray(e)} type="checkbox" id="ca" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Canada</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="ch">
          <input name='ch' checked={nat.includes('ch')} onChange={e => updateNatArray(e)} type="checkbox" id="ch" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Switzerland</span>
        </label>
      </div>
      <div>
        <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
          htmlFor="de">
          <input name='de' checked={nat.includes('de')} onChange={e => updateNatArray(e)} type="checkbox" id="de" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">Germany</span>
        </label>
      </div>

      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <select value={gender} onChange={e => setGender(e.target.value)} className="mdl-textfield__input" id="gender" >
          <option value="all">all</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <label className="mdl-textfield__label" htmlFor="gender">Which gender(s) do you want to see?</label>
      </div>
      <div>
        <button onClick={() => getPeople(numberOfPeople, nat, gender)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Get People
        </button>
      </div>
    </>
  )

  function updateNatArray(e) {
    const { name, checked } = e.target;
    if (checked) {
      setNat([...nat, name])
    } else {
      setNat(nat.filter(n => n !== name))
    }
  }
}