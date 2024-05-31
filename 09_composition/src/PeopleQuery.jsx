/* eslint-disable react/prop-types */

export const PeopleQuery = ({ gender, setGender, numberToFetch, setNumberToFetch, fetchPeople }) => {
  return (
    <section className="PeopleQuery">
      <div>
        <label htmlFor="numberToFetch">Number to fetch</label>
        <input onChange={e => setNumberToFetch(e.target.value)} type="number" id="numberToFetch" value={numberToFetch} />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select onChange={e => setGender(e.target.value)} value={gender}>
          <option>all</option>
          <option>male</option>
          <option>female</option>
        </select>
      </div>
      <button onClick={() => fetchPeople(numberToFetch, gender)}>Get people</button>
    </section>
  )
}