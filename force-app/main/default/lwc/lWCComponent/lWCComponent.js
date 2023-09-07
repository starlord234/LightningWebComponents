import { LightningElement, api } from 'lwc';

export default class LWCComponent extends LightningElement {
    displayText=false;
    textValue = 'This is invoked by LWC function'
    @api LWCFunction(){
        this.displayText=true;
    }
}