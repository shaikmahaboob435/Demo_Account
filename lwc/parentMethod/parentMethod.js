import { LightningElement } from 'lwc';

export default class ParentMethod extends LightningElement {
    myname="shaik Mahaboob Basha"

    sendData(){
        this.template.querySelector('c-child-method').receivedata(this.myname)
    }
}