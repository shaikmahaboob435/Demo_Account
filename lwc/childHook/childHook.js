import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    connectedCallback(){
        console.log('connected call back')
    }
}