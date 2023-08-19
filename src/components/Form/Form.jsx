import PropTypes from 'prop-types'
import css from './Form.module.css'

import React, { useState } from 'react'

function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = e => {
        setName(e.currentTarget.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });

        setName('');
        setNumber('');
    };
    const isFormEmpty = !name || !number;
    return (
        <div >
            <form onSubmit={handleSubmit} className={css.formCover}>
                <label className={css.formLabel}>
                    Name
                    <input className={css.formInput}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={handleChangeName}
                        required
                        value={name}
                    /></label>
                <label className={css.formLabel}>
                    Number
                    <input className={css.formInput}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={handleChangeNumber}
                        required
                        value={number}
                    />
                </label>
                <button className={css.formBtn} type="submit" disabled={isFormEmpty}>
                    Add contact
                </button>
            </form>
        </div>
    );

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;