import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAccess } from "../utlis/Redux/userSlice";
import Dropdown from "./Dropdown";
const Table = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleCheckBoxChange = (userId, cardIndex) => {
    dispatch(updateUserAccess({ userId, cardIndex }));
  };

  const handleAccessUpdate = () => {};
  return (
    <div>
      <section>
        <button
          className="px-2 py-1 border border-black rounded-lg"
          onClick={handleAccessUpdate}
        >
          Save
        </button>
        <Dropdown />
      </section>
      <section>
        <table className="border border-black">
          <thead>
            <tr>
              <th>Users</th>
              <th>Card 1</th>
              <th>Card 2</th>
              <th>Card 3</th>
              <th>Card 4</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr key={user.id} className="border border-black">
                <td>
                  <input
                    type="checkbox"
                    // onChange={() => handleCheckBoxChange(user.id,)}
                  />

                  {user.name}
                </td>
                {user.access.map((access, index) => (
                  <td key={index}>
                    {
                      <input
                        type="checkbox"
                        checked={access}
                        onChange={() => handleCheckBoxChange(user.id, index)}
                      />
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
