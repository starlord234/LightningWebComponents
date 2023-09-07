import { LightningElement } from 'lwc';

export default class hello extends LightningElement {
    greeting = 'World';

    handleChange(event) {
        this.greeting = event.target.value;
    }
}