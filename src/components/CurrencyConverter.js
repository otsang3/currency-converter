import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import CurrencyList from './CurrencyList';

function CurrencyConverter() {

    const initialState = {
        amount: 0,
        currencies: currencies,
        selectedCurrency1: currencies[0],
        selectedCurrency2: currencies[1],   
    }

    const [state, setState] = useState(initialState)

    const selectCurr1 = (currency) => {
        setState(prevState => {
            return {
                ...prevState,
                selectedCurrency1: currency
            }
        })
    }

    return(
        <div>
            <input/>
            <CurrencyList currencies={currencies} selectCurr1={selectCurr1}/>
        </div>
    )
}

export default CurrencyConverter;