import { Person } from "./Person";

export function People() {
  return (
    <>
      <h1>People</h1>
      <button>Get people</button>
      <p>No people to show</p>
      <Person />
    </>
  )
}