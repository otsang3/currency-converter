import React from 'react';

function Result(props) {

    return(
        <div className="col-result">
            <h3 style={{marginTop: "1em"}}>{props.state.amount} {props.state.resultCurrency1} =</h3>
            <h1>{props.state.result.toFixed(6)} <span style={{fontSize: "0.5em"}}>{props.state.resultCurrency2}</span></h1>
            <h3>1 {props.state.resultCurrency1} = {props.state.homeRate.toFixed(6)}</h3>
            <h3>1 {props.state.resultCurrency2} = {props.state.awayRate.toFixed(6)}</h3>
        </div>      
    )
}

export default Result;