import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import CounterStore from './store/CounterStore';
import ResultStore from './store/ResultStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = (
    <Provider CounterStore={CounterStore} ResultStore={ResultStore}>
        <App/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
