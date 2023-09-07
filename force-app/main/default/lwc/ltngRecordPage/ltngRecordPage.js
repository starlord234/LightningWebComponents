import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class LtngRecordPage extends LightningElement {
   
    @api recordId;
    @api objectApiName;

}