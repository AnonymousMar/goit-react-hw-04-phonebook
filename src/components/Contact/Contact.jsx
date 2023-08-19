import PropTypes from 'prop-types'
import css from './Contact.module.css'

function Contact({ contacts, onDeleteContact }) {

    return (

        <ul>
            {contacts.map(({ id, name, number }) => (
    
                    <li key={id} className={css.contactItem}>
                        {name}:&nbsp;<span>{number}</span>
                <button className={css.deleteButton} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                )
             )}
        </ul>    
    );   }


  


Contact.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }),
    ),
    onDeleteContact: PropTypes.func.isRequired
};

export default Contact;