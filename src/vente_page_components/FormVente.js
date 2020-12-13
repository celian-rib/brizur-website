/* eslint-disable */
import React, { useState } from 'react';
import '../stylesheets/form.css';
import QuantityDropdown from "react-quantity-dropdown";
import DateTimePicker from 'react-datetime-picker';

function Form() {

    const [value, onChange] = useState(new Date());

    const options = [
        {
            title: 'Entrée et plat',
            description: '16€',
            key: 'item1',
        },
        {
            title: 'Plat et dessert',
            description: '16€',
            key: 'item2',
        },
        {
            title: 'Entrée, plat et déssert',
            description: '20€',
            key: 'item3',
        }
    ];
	return (
		<div className="Form">
			<h3>Choisissez votre quantité de menus</h3>
            <QuantityDropdown options={options}/>
			<h3>Choisissez une date et une heure</h3>
            <DateTimePicker
                onChange={onChange}
                value={value}
                />
            <h3>Nom</h3>
            <input type="text" name="name" />
            <h3>Prénom</h3>
            <input type="text" name="name" />

            <h3>Les commandes ne sont pas encore disponibles.</h3>
            
        </div>
	);
}

export default Form;
