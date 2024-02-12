import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAccess } from "../utlis/Redux/userSlice";
import Dropdown from "./Dropdown";
const Table = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [localCheckboxChange, setLocalCheckboxChange] = useState([...users]);
  console.log("localCheckbox:", localCheckboxChange);
  const handleCheckBoxChange = (userId, cardIndex) => {
    dispatch(updateUserAccess({ userId, cardIndex }));
  };

  const handleAccessUpdate = () => {};
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
      <table className="w-full border-collapse border border-gray-300 ">
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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2 text-center w-6/12 sm:w-12/12">
                {user.name}
              </td>
              {user.access.map((access, index) => (
                <td key={index} className="border border-gray-300 px-4 py-2 ">
                  <input
                    type="checkbox"
                    checked={access}
                    onChange={() => handleCheckBoxChange(user.id, index)}
                    className="form-checkbox h-6 w-full text-green-500 items-center justify-center"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
