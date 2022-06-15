import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private _services:ServicesService) { }


  headDis:any=[];
  ngOnInit(): void {


    this._services.head().subscribe((result)=>{
      console.log(result); 
      this.headDis=result.articles;
    })
  }

}
