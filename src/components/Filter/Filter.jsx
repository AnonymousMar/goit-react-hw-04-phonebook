import PropTypes from 'prop-types'
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filterLabel}>
            Find contacts by name
            <input
                className={css.filterInput}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                placeholder="Search contacts"
            />
        </label> 
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;


    
