import {observable, action , computed} from 'mobx';

class CounterStore {
    @observable counter = 0;

    @action incrementCounter = () => {
        this.counter += 1;
    }

    @action decrementCounter = () => {
        this.counter -= 1;
    }

    @action addCounter = (value) => {
        this.counter += value;
    }

    @action substractCounter = (value) => {
        this.counter -= value;
    }

    @computed get counterValue() {
        return this.counter;
    }
}

const store = new CounterStore();
export default store;