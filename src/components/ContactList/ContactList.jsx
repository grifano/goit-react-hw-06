import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              phoneNumber={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}
