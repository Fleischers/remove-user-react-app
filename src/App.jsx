import { useDispatch, useSelector } from "react-redux";
import { selectremovalIds } from "redux/UserList/userSlice";
import s from "./App.module.css";
import UserList from "./components/UserList";
import Button from "./components/Button";
import { deleteUsers, selectAllUsers } from "./redux/UserList/userSlice";

function App() {
  const dispatch = useDispatch();
  const selectedIds = useSelector(selectremovalIds);

  function deleteClickHandler() {
    dispatch(deleteUsers());
  }

  function selectAllClickHandler() {
    dispatch(selectAllUsers());
  }

  return (
    <div className={s.container}>
      <div className={s.navigation}>
        <Button
          className="selectButton"
          type="button"
          title="Select All"
          onClick={selectAllClickHandler}
        />
        <Button
          className="deleteButton"
          type="button"
          title="Delete"
          onClick={deleteClickHandler}
          disabled={!selectedIds.length}
        />
      </div>
      <UserList />
    </div>
  );
}

export default App;
