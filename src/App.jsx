import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "redux/UserList/userSlice";
import s from "./App.module.css";
import Container from "components/Container";
import UserList from "components/UserList";
import Button from "components/Button";
import {
  deleteUsers,
  selectAllUsers,
  getIsSelectedAll,
} from "./redux/UserList/userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isSelectedAll = useSelector(getIsSelectedAll);

  function deleteClickHandler() {
    dispatch(deleteUsers());
  }

  function selectAllClickHandler() {
    dispatch(selectAllUsers());
  }

  function isDisabled() {
    return users.every((user) => user.selected === false);
  }

  return (
    <Container>
      <div className={s.navigation}>
        <Button
          btnClass="selectButton"
          type="button"
          title={isSelectedAll ? "Unselect All" : "Select All"}
          onClick={selectAllClickHandler}
          disabled={users.length === 0}
        />
        <Button
          btnClass="deleteButton"
          type="button"
          title="Delete"
          onClick={deleteClickHandler}
          disabled={isDisabled()}
        />
      </div>
      <UserList />
    </Container>
  );
}

export default App;
