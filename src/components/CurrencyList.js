import React from 'react';

function CurrencyList(props) {

    const renderCurrencies = (currencies) => {
        return currencies.map((currency, index) => <option key={index}>{currency}</option>)
    }

    return(
        <div>
            <select 
                name={props.name}
                onChange={(event) => props.selectCurrency(event.target.name, event.target.value)}>
                {renderCurrencies(props.currencies)}
            </select>
        </div>
    )
}

export default CurrencyList;