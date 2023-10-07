import React, { useState } from 'react';

interface ColorItem {
  name: string;
  color: string;
}

const ColorCard: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#FF5733"); // Default color
  const [name, setName] = useState<string>("");
  const [colorList, setColorList] = useState<ColorItem[]>([]);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name.trim() !== "") {
      setColorList([...colorList, { name, color: selectedColor }]);
      setName("");
    }
  };

  return (
    <div className="card" style={{ border: "1px solid grey", padding: "10px" }}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div
          style={{
            backgroundColor: selectedColor,
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
        ></div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleEnter}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div
          style={{ backgroundColor: "#FF5733", width: "30px", height: "30px", cursor: "pointer" }}
          onClick={() => handleColorClick("#FF5733")}
        ></div>
        <div
          style={{ backgroundColor: "#33FF57", width: "30px", height: "30px", cursor: "pointer" }}
          onClick={() => handleColorClick("#33FF57")}
        ></div>
        <div
          style={{ backgroundColor: "#5733FF", width: "30px", height: "30px", cursor: "pointer" }}
          onClick={() => handleColorClick("#5733FF")}
        ></div>
        {/* Add more color squares as needed */}
      </div>
      <ul>
        {colorList.map((item, index) => (
          <li key={index} style={{ color: item.color }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorCard;