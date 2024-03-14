import './Account_Info_2.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favorite() {
  const buttonNamesRow1 = ['Bruin Cafe', 'Cafe Plate', 'Cafe 1919'];
  const buttonNamesRow2 = ['De Neve', 'Epicuria', 'Rendezvouz'];
  const buttonNamesRow3 = ['Epicuria at Ackerman', 'Feast at Rieber', 'The Study at Hedrick'];

  const [selectedButtonRow1, setSelectedButtonRow1] = useState('');
  const [selectedButtonRow2, setSelectedButtonRow2] = useState('');
  const [selectedButtonRow3, setSelectedButtonRow3] = useState('');

  const handleButtonClick = (row, name) => {
    switch (row) {
      case 1:
        setSelectedButtonRow1(name);
        break;
      case 2:
        setSelectedButtonRow2(name);
        break;
      case 3:
        setSelectedButtonRow3(name);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="favorite-wrapper">
        <h1>Feeling hungry?</h1>
        <h2>Select your favorite dining hall</h2>

        {/* Button row 1 */}
        <div className="button-row">
          {buttonNamesRow1.map((name, index) => (
            <Link to="/Profile" key={index}>
              <button
                className={`dining-option ${selectedButtonRow1 === name ? 'selected' : ''}`}
                onClick={() => handleButtonClick(1, name)}
              >
                {name}
              </button>
            </Link>
          ))}
        </div>

        {/* Button row 2 */}
        <div className="button-row">
          {buttonNamesRow2.map((name, index) => (
            <Link to="/Profile" key={index}>
              <button
                className={`dining-option ${selectedButtonRow2 === name ? 'selected' : ''}`}
                onClick={() => handleButtonClick(2, name)}
              >
                {name}
              </button>
            </Link>
          ))}
        </div>

        {/* Button row 3 */}
        <div className="button-row">
          {buttonNamesRow3.map((name, index) => (
            <Link to="/Profile" key={index}>
              <button
                className={`dining-option ${selectedButtonRow3 === name ? 'selected' : ''}`}
                onClick={() => handleButtonClick(3, name)}
              >
                {name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
