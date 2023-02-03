// written by Dylan, demonstrates race condition

import { useState } from "react";

const possibleNames = [
  "Dylan",
  "Chayce",
  "Christopher",
  "Chantel",
  "William",
  "Nadia",
  "Tristan"
];

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * possibleNames.length);
      const newName = possibleNames[randomIndex];
      console.log(`Adding ${newName} to guests`);
      setGuests([...guests, newName]);
      setName("");
    }, 1000);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button type="button" onClick={onClick}>
        Add Guest
      </button>
      <div>
        {guests.map((guest, index) => (
          <div key={index}>{guest}</div>
        ))}
      </div>
    </div>
  );
};

export default GuestList;
