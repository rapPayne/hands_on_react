export function fetchPeople(number=10, nat=['gb','fi', 'de', 'us'], gender="all") {
  const url=`https://randomuser.me/api/?results=${number}&nat=${nat.join(",")}&gender=${gender}`;
  console.log(url);
  return fetch(url)
  .then(res => res.json())
  .then(res => res.results)
  .catch(err => console.error("Error fetching people", err));
}