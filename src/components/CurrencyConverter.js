import React, { useState } from 'react';
import { currencies } from '../data/Currencies';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import CurrencyList from './CurrencyList';
import Result from './Result';


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
        if (state.amount == 0) {
            return;
        } else {
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
        
    }

    return(
        <div className="currency-container">

            <h2 className="col-header">Currency Converter</h2>
            <div className="columns">

                <div className="row">
                    <h3>Amount</h3>
                    <input type="number" onChange={(event) => handleChange(event.target.value)}/>
                </div>

                <div className="row">
                    <h3>From</h3>
                    <CurrencyList 
                        currencies={currencies}
                        name="currency1" 
                        selectCurrency={selectCurrency}
                        value={state.currency1}
                    />
                </div>

                <div className="row">
                    <h3>To</h3>
                    <CurrencyList 
                        currencies={currencies}
                        name="currency2" 
                        selectCurrency={selectCurrency}
                        value={state.currency2}
                    />
                </div>

                <div className="row">
                    <button 
                        className="button-submit" 
                        onClick={() => handleClick()}>
                        <FaArrowAltCircleRight size="3em" color="orange"/>
                    </button>
                </div> 

            </div>
                {state.result && <Result result={state.result}/>}              
        </div>
    )
}

export default CurrencyConverter;