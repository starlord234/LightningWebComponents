import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/contactAuraServices.getContactList';

export default class ContactListDemo extends LightningElement {
    @track error;
    @track contacts;
    @track searchKey;
    @wire (getContactList)
    wiredContact({error,data}){
        if(data){
            this.contacts = data;
        }
        if(error){
            this.error = error;
            console.log('ERROR ' + error);
        }
    }

    handlechange(event){
        event.preventDefault();
        /*eslint-disable no-console*/
        console.log('value ' + event.target.value);
        console.log(this.contacts);
        this.searchKey = event.target.value;
               
    }
}