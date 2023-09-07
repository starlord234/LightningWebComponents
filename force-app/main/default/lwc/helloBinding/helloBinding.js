import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    Greeting = 'World';
    handlechange(event){
        this.Greeting = event.target.value;
    }
}