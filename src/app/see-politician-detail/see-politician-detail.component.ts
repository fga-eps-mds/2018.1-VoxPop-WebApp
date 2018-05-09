import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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
  }
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log(this.id);
   });
  }
}
