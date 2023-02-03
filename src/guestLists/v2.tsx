// written by Dylan, onClick avoids closing over "name"

import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = (newName: string) => {
    setGuests([...guests, newName]);
    setName("");
  };
  return (
    <div>
      <h3>Guest List</h3>
      <div>
        {guests.map((guest) => (
          <div key={guest}>{guest}</div>
        ))}
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button type="button" onClick={() => onClick(name)}>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
