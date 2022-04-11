export const PeopleQuery = ({ getPeople }) => {
  return (
    <>
      <h1>People Query</h1>
      <button onClick={getPeople}>Get People</button>
    </>
  )
}