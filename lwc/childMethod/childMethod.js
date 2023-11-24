import { LightningElement,api } from 'lwc';

export default class ChildMethod extends LightningElement {

    displayname;

    @api

    receivedata(param1){
        this.displayname=param1;
    }
}