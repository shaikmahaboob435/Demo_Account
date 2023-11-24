import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    constructor(){
        super();
        console.log('consturctor');
    }
    connectedCallback(){
        console.log('connected call back')
    }
}