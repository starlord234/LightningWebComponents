import { LightningElement, track, wire } from 'lwc';
import nameTest from '@salesforce/apex/testDemo.nameTest';

export default class LogicalLwcDemo extends LightningElement {
    @track greeting = 'welcome';
    @track message = 'welcome Jeelan';

    @track contact = [
        {
             Id : '8783748474',
             Name : 'mohammad jeelan'
        },
        {
             Id : '0909989890',
             Name : 'jason bourne'
        },
        { 
            Id : '9898876675',
            Name : 'jack bauer' ,
            iden : 'kack kdkdk'
        }
    ]
    @wire(nameTest) records;
}