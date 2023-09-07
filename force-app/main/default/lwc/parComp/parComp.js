import { LightningElement } from 'lwc';

export default class ParComp extends LightningElement {
    message;
     parentHandler(event){
        this.message = event.details;
     }
}