import React from 'react'
import './Account_Info_2.css'

export default function Favorite(){
    const buttonNamesRow1 = ['Bruin Cafe', 'Cafe Plate', 'Cafe 1919'];
    const buttonNamesRow2 = ['De Neve', 'Epicuria', 'Rendezvouz'];
    const buttonNamesRow3 = ['Epicuria at Ackerman', 'Feast at Rieber', 'The Study at Hedrick'];
    return(
        <div>
            <div className="favorite-wrapper">
                <h1>Feeling hungry?</h1>
                <h2>Select your favorite dining hall</h2>

                <div className="button-row">
                    {buttonNamesRow1.map((name, index) => (
                        <button key={index} className="dining-option"><a href='./Profile'>{name}</a></button>
                            ))}
                </div>


                <div className="button-row">
                    {buttonNamesRow2.map((name, index) => (
                        <button key={index} className="dining-option"><a href='./Profile'>{name}</a></button>
                            ))}
                </div>

                <div className="button-row">
                    {buttonNamesRow3.map((name, index) => (
                        <button key={index} className="dining-option"><a href='./Profile'>{name}</a></button>
                            ))}
                </div>
            </div>

        </div>
    )
}
