import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';

//@inject(['CounterStore','ResultStore'])
@inject('CounterStore')
@inject('ResultStore')
@observer
class Counter extends Component {
    state = {
        counter: 0,
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 5 } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 5 } } )
                break;
        }
    }

    onIncrement = () => this.props.CounterStore.incrementCounter();
    onDecrement = () => this.props.CounterStore.decrementCounter();
    onAdd = value => this.props.CounterStore.addCounter(value);
    onSubstract = value => this.props.CounterStore.substractCounter(value);
    onStoreResult = value => this.props.ResultStore.storeResult(value);
    onDeleteResult = id => this.props.ResultStore.deleteResult(id);

    getRandomKey = () => String( Math.floor( Math.random() * ( 100000 - 1 ) + 1 ) );

    render () {
        const {CounterStore,ResultStore} = this.props;
        return (
            <div>
                <CounterOutput value={CounterStore.counterValue} />
                <div className='controlContainer'>
                    <CounterControl label="Increment" clicked={this.onIncrement} />
                    <CounterControl label="Decrement" clicked={this.onDecrement}  />
                    <CounterControl label="Add 5" clicked={ () => this.onAdd(5) }  />
                    <CounterControl label="Subtract 5" clicked={ () => this.onSubstract(5) } />
                </div>
                <button onClick={ () => this.onStoreResult(CounterStore.counterValue) }> Store result </button>
                <ul>
                    {
                        ResultStore.resultValue.map(result => (
                            <li onClick={ () => this.onDeleteResult(result.id) } key={result.id}> {result.val} </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Counter;