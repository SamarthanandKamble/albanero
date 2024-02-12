import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Cards = () => {
  const users = useSelector((state) => state.users?.users);
  const selectedUser = useSelector((state) => state.users?.selectedUser);
  useEffect(() => {
    console.log("Card rendered");
  }, [selectedUser]);

  if (!selectedUser) {
    console.log("selected user:", selectedUser.length);
  }
  return (
    <section className="w-full border-black">
      {selectedUser.length === 0 ? (
        <div className="flex flex-wrap w-full m-auto items-center justify-center">
          {users?.map((card, index) => (
            <div
              key={card.id}
              className="p-4 border border-gray-300 rounded-lg shadow-md bg-white mr-4 h-32 w-32 text-center font-bold mb-4"
            >
              Card {index + 1}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center m-auto">
          {users[selectedUser - 1]?.access.map(
            (card, index) =>
              card && (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg shadow-md bg-white h-32 w-32 text-center mr-4 mb-4 font-bold"
                >
                  Card {index + 1}
                </div>
              )
          )}
        </div>
      )}
    </section>
  );
};

export default Cards;
