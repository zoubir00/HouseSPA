import { Component } from "@angular/core";

@Component(
    {
    selector:'app-property-card',
    // template:'<h1>I am card</h1>'
    templateUrl:'Property-Card.component.html',
    styleUrls:['Property-Card.component.css']
}
)
export class PropertyCardComponent{

    property:any={
       
        "name":"Zoubir",
        "Image":"https://i0.wp.com/www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-business-man-free1.png?ssl=1"

    }
}