export const Person = ({ person }) => {
  return (
    <div className="mdl-card mdl-shadow--8dp" style={styles.wrapper}>
      <div className="mdl-card__media">
        <img src={person.picture.large} alt={person.name.first} style={styles.image} />
      </div>
      <div className="mdl-card__title">
        {person.name.first} {person.name.last}
      </div>
      <div className="mdl-card__supporting-text">
        <table className="mdl-data-table mdl-js-data-table" style={styles.table}>
          <tbody>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Cell</td>
              <td>{person.cell}</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Email</td>
              <td>{person.email}</td>
            </tr>
            <tr>
              <td className="mdl-data-table__cell--non-numeric">Address</td>
              <td>
                {person.location.street.number} {person.location.street.name}<br />
                {`${person.location?.city}, ${person.location?.state} ${person.location?.postcode}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    width: '350px',
    margin: '10px',
  },
  image: {
    width: '100%',
  },
  table: {
    width: '90%',
  },
}