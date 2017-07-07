import { action, observable } from 'mobx';

let store = null;

class GlobalStore {
    @observable user = null;

    constructor(){
        this.user = {
            isMusician: false,
            isUser: false
        }
    }

    @action setUser = (user, isMusician) => {
        if (isMusician) {
            this.user = {...this.user, isMusician: true};
        }
        else {
            this.user = {...this.user, isUser: true};
        }
        this.user = {
            ...this.user,
            ...user
        }
    }

    @action setProps = (obj) => {
        this.user = {
            ...this.user,
            ...obj
        }
    }

    @action removeProp = (prop) => {
        const copy = this.user;
        copy[prop] = null;
        this.user = copy;
    }
}

export function initStore() {
    if (typeof window === 'undefined') {
        return new GlobalStore();
    }
    else {
        if (store == null) {
            store = new GlobalStore();
        }
        return store;
    }
}
