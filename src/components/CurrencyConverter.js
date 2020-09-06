import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import CurrencyList from './CurrencyList';

function CurrencyConverter() {

    const initialState = {
        amount: 0,
        currencies: currencies,
        currency1: currencies[0],
        currency2: currencies[1],   
    }

    const [state, setState] = useState(initialState)

    const selectCurrency = (currency, value) => {
        setState(prevState => {
            return {
                ...prevState,
                [currency]: value
            }
        })
    }

    return(
        <div>
            <input/>
            <CurrencyList 
                currencies={currencies}
                name="currency1" 
                selectCurrency={selectCurrency}
            />
            <CurrencyList 
                currencies={currencies}
                name="currency2" 
                selectCurrency={selectCurrency}
            />
        </div>
    )
}

export default CurrencyConverter;