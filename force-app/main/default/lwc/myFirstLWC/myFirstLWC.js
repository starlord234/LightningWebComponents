import { LightningElement, api, track } from 'lwc';

export default class myFirstLWC extends LightningElement {
  @api Name = 'mohammad jeelan';
  @track Profession = 'Salesforce Developer';
  phone = '8019692811'; 
  email = 'jshaik830@gmail.com';


  handleclick(){
    /* eslint-disable no-console*/
    console.log('Iam in inside JS File');
    this.Name = 'shamshad begum';
    this.Profession = 'Business man';
    this.phone = '9177159152';
  }

}