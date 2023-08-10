import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-Property-list',
  templateUrl: './Property-list.component.html',
  styleUrls: ['./Property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   properties:any;
  constructor(private housingservice:HousingService) { }

  ngOnInit():void {
    this.housingservice.getAllProperties().subscribe(
      data=>{
         this.properties=data;
        console.log(data);
      },
      error=>{
        console.log('httperror:');
        console.log(error);
      }
      
    );
  }

}
