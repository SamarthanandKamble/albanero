import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTheLocalUsersChanges,
  updateUserAccess,
} from "../utlis/Redux/userSlice";
import Dropdown from "./Dropdown";
const Table = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
 
    //made a copy of users (original array) to perform the actions of this before mutating the users directly.

  const [localCheckboxChange, setLocalCheckboxChange] = useState([...users]);

  useEffect(() => {
    if (localStorage.getItem("table")) {
      setLocalCheckboxChange(JSON.parse(localStorage.getItem("table")));
    }
  }, []);

  const handleCheckBoxChange = (userId, cardIndex) => {
    const updatedCheckBoxChange = localCheckboxChange.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          access: user.access.map((value, index) =>
            index === cardIndex ? !value : value
          ),
        };
      }
      return user;
    });

    // Update the state with the modified array
    setLocalCheckboxChange(updatedCheckBoxChange);
    dispatch(updateUserAccess({ userId, cardIndex }));
  };

  const handleAccessUpdate = () => {
    //Updates the original array.
    dispatch(updateTheLocalUsersChanges(localCheckboxChange));

    var myData = localStorage.getItem("name");
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4 w-full">
        <h1 className="sm:text-2xl font-bold ">Access Control Page</h1>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600"
            onClick={handleAccessUpdate}
          >
            Save
          </button>
          <Dropdown />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full sm:max-w-none border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">User</th>
              <th className="border border-gray-300 px-4 py-2">Card 1</th>
              <th className="border border-gray-300 px-4 py-2">Card 2</th>
              <th className="border border-gray-300 px-4 py-2">Card 3</th>
              <th className="border border-gray-300 px-4 py-2">Card 4</th>
            </tr>
          </thead>
          <tbody>
            {localCheckboxChange.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.name}
                </td>
                {user.access.map((access, index) => (
                  <td key={index} className="border border-gray-300 px-4 py-2">
                    <input
                      type="checkbox"
                      checked={access}
                      onChange={() => handleCheckBoxChange(user.id, index)}
                      className="form-checkbox h-6 w-6 sm:w-full text-green-500 items-center justify-center"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
