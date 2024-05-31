/* eslint-disable react/prop-types */
import "./Person.css";

export const Person = ({ first, last, email, cell, imageSrc }) => {
  // console.log(first, last, email, cell, imageSrc)
  return (
    <section className="Person">
      <h2>{first} {last}</h2>
      <img src={imageSrc} alt={first} />
      <p><span>Email:</span><span>{email}</span></p>
      <p><span>Cell:</span><span>{cell}</span></p>
    </section>
  );
}