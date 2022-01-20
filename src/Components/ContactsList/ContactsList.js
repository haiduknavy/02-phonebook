import { ContactList, ContactListItem, DelBtn } from "./ContactsList.styled";

export default function ContactsList({ data, deleteButton }) {
  return (
    <ContactList>
      {data.map((item) => (
        <ContactListItem key={item.id}>
          {item.name}: {item.number}{" "}
          <DelBtn id={item.id} type="button" onClick={deleteButton}>
            Delete
          </DelBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
}
