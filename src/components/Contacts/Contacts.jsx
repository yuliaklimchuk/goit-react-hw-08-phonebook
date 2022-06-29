import  Form  from "../Form/Form.jsx";
import  Filter  from "../Filter/Filter.jsx";
import ContactList from '../ContactList/ContactList.jsx';
import style from './contacts.module.css';

const Contacts = () => { 
    return <>
        <h2 className={style.title}>Phonebook</h2>
        <Form></Form>
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList />
    </>
}

export default Contacts;