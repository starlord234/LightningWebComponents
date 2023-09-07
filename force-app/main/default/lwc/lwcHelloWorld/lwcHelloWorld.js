import { LightningElement, api } from 'lwc';

export default class LwcHelloWorld extends LightningElement {
    @api name;
    @api
    testFunction(){
        console.log('Hello world');
    }
}