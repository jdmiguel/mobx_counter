import {observable, action , computed} from 'mobx';

class ResultStore {
    @observable result = [];

    @action storeResult = value => this.result.push({id:String( Math.floor( Math.random() * ( 100000 - 1 ) + 1 ) ),val:value});

    @action deleteResult = idSelected => {
        let index = this.result.findIndex(item => item.id === idSelected)
        this.result.splice(index,1);
    }
    
    @computed get resultValue (){
        return this.result;
    }
}

const store = new ResultStore();
export default store;