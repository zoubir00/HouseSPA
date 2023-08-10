import { Component,Input } from "@angular/core";

@Component(
    {
    selector:'app-property-card',
    // template:'<h1>I am card</h1>'
    templateUrl:'Property-Card.component.html',
    styleUrls:['Property-Card.component.css']
}
) 
export class PropertyCardComponent{
   @Input() property:any


 
}