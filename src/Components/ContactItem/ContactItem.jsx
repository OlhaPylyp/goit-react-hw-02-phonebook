const ContactItem = ({ onDeleteContact, contacts }) => (
  <div>
    {" "}
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {" "}
            <span>{name}:</span>
            <span>{number}</span>{" "} 
            <button type="submit"  onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        );
      })}
     
    </ul>{" "}
  </div>
);
export default ContactItem;
