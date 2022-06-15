import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _services:ServicesService) { }


  techDis:any=[];
  ngOnInit(): void {
    this._services.tech().subscribe((result)=>{
      console.log(result);
      this.techDis=result.articles;
    })
  }

}
