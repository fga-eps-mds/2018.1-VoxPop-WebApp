import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'
import { Router } from '@angular/router';
import { PropositionModel } from '../../models/proposition'

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {

  propositionsList: Array<PropositionModel>

  constructor(private router:Router, private requester:RequestsService) { }

  ngOnInit() {
    this.requester.getProjects().subscribe( response =>{
      this.propositionsList = response['results'];
      console.log(this.propositionsList);
    });
  }
}
