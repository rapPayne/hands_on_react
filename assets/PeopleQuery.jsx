<>
  <h1>People Query</h1>
  <div className="mdl-textfield mdl-js-textfield">
    <input className="mdl-textfield__input" type="number" id="number" autoComplete="false" />
    <label className="mdl-textfield__label" htmlFor="number">How many people do you want?</label>
  </div>

  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <select className="mdl-textfield__input" id="gender" >
      <option value="all">all</option>
      <option value="female">female</option>
      <option value="male">male</option>
    </select>
    <label className="mdl-textfield__label" htmlFor="gender">Which gender(s) do you want to see?</label>
  </div>

  <div>
    <label htmlFor="au" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
      <input type="checkbox" id="au" className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">Australia</span>
    </label>
  </div>
  <div>
    <label htmlFor="br" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
      <input type="checkbox" id="br" className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">Brazil</span>
    </label>
  </div>
  <div>
    <label htmlFor="ca" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
      <input type="checkbox" id="ca" className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">Canada</span>
    </label>
  </div>
  <div>
    <label htmlFor="ch" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
      <input type="checkbox" id="ch" className="mdl-checkbox__input" />
      <span className="mdl-checkbox__label">Switzerland</span>
    </label>
  </div>

  <div>
    <button onClick={getPeople} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
      Get People
    </button>
  </div>
</>