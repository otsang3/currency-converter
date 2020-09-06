import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import CurrencyList from './CurrencyList';

function CurrencyConverter() {

    currencies.sort();

    const initialState = {
        amount: 0,
        currencies: currencies,
        currency1: currencies[8],
        currency2: currencies[31],
        result: ""   
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

    const handleClick = () => {
        fetch("https://api.exchangeratesapi.io/latest?base=" + state.currency1)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[state.currency2]
            const result = rate*state.amount
            setState(prevState => {
                return {
                    ...prevState,
                    result: result
                }
            })
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
            <button onClick={() => handleClick()}>Convert</button>
        </div>
    )
}

export default CurrencyConverter;