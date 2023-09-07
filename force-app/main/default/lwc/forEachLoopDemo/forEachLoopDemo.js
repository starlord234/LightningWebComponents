import { LightningElement, track } from 'lwc';

export default class ForEachLoopDemo extends LightningElement {
    @track message = 'welcome user to web components'
    carlist = ["hyundai","ford","BMW","honda","jeep compas"];
    programminglist = [
          {
            Id : '02345',
            Name : 'php',
            Identification : 'aadhar'

          },
          {
            Id: '12345',
            Name: 'javascript'

          },
          {
            Id : '22345',
            Name : 'java'

          },
          {
            Id : '32345',
            Name : 'python'

          },
          {
            Id: '42345',
            Name : 'HTML'
          }

    ];

}