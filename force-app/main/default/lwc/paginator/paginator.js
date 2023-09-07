import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    handleNext(){
        const nextEvent = new CustomEvent('next')
        this.dispatchEvent(nextEvent)
    }
    handlePrevious(){
        const previousEvent = new CustomEvent('pevious')
        this.dispatchEvent(previousEvent)
    }
}