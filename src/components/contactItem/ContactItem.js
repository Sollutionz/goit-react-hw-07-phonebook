import PropTypes from 'prop-types';
import css from './ContactsItem.module.css'
import { useContext } from 'react';
import { Context } from 'components/App';

export const ContactItem = ({ name, phone, id }) => {
  const context = useContext(Context);
  return (
    <>
      <span className={css.item}>
        {name}: {phone}
      </span>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => context(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
