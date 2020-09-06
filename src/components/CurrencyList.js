import React from 'react';

function CurrencyList(props) {

    const renderCurrencies = (currencies) => {
        return currencies.map((currency, index) => <option key={index}>{currency}</option>)
    }

    return(
        <div>
            <select onChange={(event) => props.selectCurr1(event.target.value)}>
                {renderCurrencies(props.currencies)}
            </select>
        </div>
    )
}

export default CurrencyList;