const ContactItem = ({ contacts }) => (
  <div>
    {" "}
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {" "}
            <span>{name}:</span>
            <span>{number}</span>{" "}
          </li>
        );
      })}
    </ul>{" "}
  </div>
);
export default ContactItem;
