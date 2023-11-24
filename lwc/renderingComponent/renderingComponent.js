import { LightningElement } from 'lwc';

export default class RenderingComponent extends LightningElement {
    issecond=false
    change(){
        this.issecond=!this.issecond
    }
}