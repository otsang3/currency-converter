import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import CurrencyList from './CurrencyList';

function CurrencyConverter() {

    const initialState = {
        amount: 0,
        currencies: [currencies],
        selectedCurrency1: null,
        selectedCurrency2: null,
        
    }

    const [state, setState] = useState(initialState)

    return(
        <div>
            <input/>
        </div>
    )
}

export default CurrencyConverter;