import './Person.css';

export const Person = ({ person, remove }) => {
  return (
    <section className="Person">
      <div className="imageAndName">
        <img src={person?.picture.large} alt={person?.name.first} />
        <p>{person?.name.first} {person?.name.last}</p>
        <p onClick={() => remove(person)} className='delete'>X</p>
      </div>
      <div className="details">
        <div>
          <p>Cell</p>
          <p>{person?.cell}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{person?.email}</p>
        </div>
        <div>
          <p>Address</p>
          <p>
            {person?.location.street.number} {person?.location.street.name}<br />
            {person?.location?.city},
            {person?.location?.state}
            {person?.location?.postcode}
          </p>
        </div>
      </div>
    </section>
  );

}
