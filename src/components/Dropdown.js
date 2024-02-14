import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedUser } from "../utlis/Redux/userSlice";

const Dropdown = () => {
  const users = useSelector((state) => state.users?.users);
  const selectedUser = useSelector((state) => state.user?.selectedUser);
  const handleUserSelection = (e) => {
    dispatch(updateSelectedUser(e.target.value));
  };
  const dispatch = useDispatch();
  return (
    <>
      <select
        value={selectedUser}
        onChange={handleUserSelection}
        required
        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-lg cursor-pointer"
      >
        <option hidden>Choose User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id} className="cursor-pointer ">
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
