import { LightningElement } from 'lwc';

export default class bikeCard extends LightningElement {
    name = 'Electra X4';
    description = 'A bike design for comfort';
    material = 'steel';
    category = 'mountain';
    price = '2400';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}