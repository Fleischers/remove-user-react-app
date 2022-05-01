import { useDispatch } from "react-redux";
import s from "./UserListItem.module.css";
import { toggleSelected } from "redux/UserList/userSlice";
import PropTypes from "prop-types";

export default function UserListItem({ user }) {
  const { id, name, email, gender, status, selected } = user;

  const dispatch = useDispatch();

  function toggle() {
    dispatch(toggleSelected(id));
  }

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        onChange={toggle}
        checked={selected}
        id={id}
        className={s.checkBox}
      />
      <div className={s.userData}>
        <label htmlFor={id} className={s.name}>
          {name}
        </label>
        <p className={s.email}>{email}</p>
      </div>
      <div className={s.userDetails}>
        <p className={s.gender}>{gender}</p>
        <p className={status === "active" ? s.activeStatus : s.inactiveStatus}>
          {status}
        </p>
      </div>
    </div>
  );
}

UserListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }),
};
