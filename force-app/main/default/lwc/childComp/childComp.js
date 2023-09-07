import { LightningElement, track, api } from 'lwc';  
 export default class childComp extends LightningElement
{  
  DisplayText = false;
  textValue='LWC Function Invoked through Aura Component'  
  @api LWCFunction()
  {
    this.DisplayText = true; 
  }
}