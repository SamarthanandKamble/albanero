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
    <>
      {selectedUser.length === 0 ? (
        <div className="flex flex-wrap">
          {users?.map((card) => (
            <div key={card.id} className="p-2 border border-black">
              {card?.title}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap">
          {users[selectedUser - 1]?.access.map(
            (card, index) =>
              card && (
                <div key={card.id} className="p-2 border border-black">
                  {index + 1}
                </div>
              )
          )}
        </div>
      )}
    </>
  );
};

export default Cards;
