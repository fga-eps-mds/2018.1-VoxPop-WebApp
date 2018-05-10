import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-see-politician',
  templateUrl: './see-politician-detail.component.html',
  styleUrls: ['./see-politician-detail.component.css']
})
export class SeePoliticianDetailedComponent implements OnInit {
  sub: any;
  id: number = 0;
  parlimentarian: any = {
    name: '',
    gender: '',
    federal_unit: '',
    photo: ''
  };
  gender: string = '';

  constructor(
    private route: ActivatedRoute,
    private requester:RequestsService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id);
   });
   this.requester.getParlimentarian(this.id).subscribe( response =>{
    this.parlimentarian = response['body'];
    console.log(this.parlimentarian);
    if(this.parlimentarian['gender'] == 'M'){
      this.gender = "Masculino";  
    }
    else if (this.parlimentarian['gender'] == 'F'){
      this.gender = "Feminino";
    }
   });
  }
}
