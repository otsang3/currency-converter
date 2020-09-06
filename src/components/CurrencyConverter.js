import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import CurrencyList from './CurrencyList';

function CurrencyConverter() {

    currencies.sort();

    const initialState = {
        amount: 0,
        currencies: currencies,
        currency1: currencies[8],
        currency2: currencies[31]   
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

    const handleChange = (number) => {
        setState(prevState => {
            return {
                ...prevState,
                amount: number
            }
        })
    }

    return(
        <div>
            <input type="number" onChange={(event) => handleChange(event.target.value)}/>
            <CurrencyList 
                currencies={currencies}
                name="currency1" 
                selectCurrency={selectCurrency}
                value={state.currency1}
            />
            <CurrencyList 
                currencies={currencies}
                name="currency2" 
                selectCurrency={selectCurrency}
                value={state.currency2}
            />
        </div>
    )
}

export default CurrencyConverter;