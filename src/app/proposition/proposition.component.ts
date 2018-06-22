import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../requests.service';
import { TokenService } from '../token.service';
import { CookieService } from 'ngx-cookie-service';

declare var Chart: any;

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {

  tokenValue = '';
  sub: any;
  id = 0;
  loading = true;
  social_information: any;
  region_ctx: HTMLElement;
  region_chart: any;

  proposition: any = {
    proposition_id: 0,
    proposition_type: '',
    proposition_type_initials: '',
    number: 0,
    year: 0,
    abstract: '',
    processing: '',
    situation: '',
    url_full: '',
    parliamentarians_approval: '',
    population_approval: '',
  }

  constructor(
    private route: ActivatedRoute,
    private requester: RequestsService,
    private token: TokenService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.tokenValue = this.token.getToken();
    this.token.checkToken(this.tokenValue);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.requester.getPropositionSpecific(this.id).subscribe( response => {
      this.proposition = response['body'];
    });
    this.requester.getPropositionSpecificSocialInfo(this.id).subscribe( response => {
      this.social_information = response['body'];
      this.loading = false;

      // Region chart
      let region_labels_list = [];
      region_labels_list = [
        'Norte',
        'Nordeste',
        'Centro-Oeste',
        'Sudeste',
        'Sul',
        'Região não informada'
      ]

      let region_approve_data_list = [];
      region_approve_data_list.push(this.social_information['region']['N']['Y']);
      region_approve_data_list.push(this.social_information['region']['NE']['Y']);
      region_approve_data_list.push(this.social_information['region']['CO']['Y']);
      region_approve_data_list.push(this.social_information['region']['SE']['Y']);
      region_approve_data_list.push(this.social_information['region']['S']['Y']);
      region_approve_data_list.push(this.social_information['region']['null']['Y']);

      let region_disapprove_data_list = [];
      region_disapprove_data_list.push(this.social_information['region']['N']['N']);
      region_disapprove_data_list.push(this.social_information['region']['NE']['N']);
      region_disapprove_data_list.push(this.social_information['region']['CO']['N']);
      region_disapprove_data_list.push(this.social_information['region']['SE']['N']);
      region_disapprove_data_list.push(this.social_information['region']['S']['N']);
      region_disapprove_data_list.push(this.social_information['region']['null']['N']);

      let region_abstention_data_list = [];
      region_abstention_data_list.push(this.social_information['region']['N']['A']);
      region_abstention_data_list.push(this.social_information['region']['NE']['A']);
      region_abstention_data_list.push(this.social_information['region']['CO']['A']);
      region_abstention_data_list.push(this.social_information['region']['SE']['A']);
      region_abstention_data_list.push(this.social_information['region']['S']['A']);
      region_abstention_data_list.push(this.social_information['region']['null']['A']);

      this.region_ctx = document.getElementById('regionChart');
      this.region_chart = new Chart(this.region_ctx, {
        type: 'bar',
        data: {
          labels: region_labels_list,
          datasets: [
            {
              label: 'Porcentagem de aprovação',
              backgroundColor: 'rgb(68,157,68)',
              borderColor: 'rgb(255, 255, 255)',
              data: region_approve_data_list,
            },
            {
              label: 'Porcentagem de desaprovação',
              backgroundColor: 'rgb(201,48,44)',
              borderColor: 'rgb(255, 255, 255)',
              data: region_disapprove_data_list,
            },
            {
              label: 'Porcentagem de abstenção',
              backgroundColor: 'rgb(255,255,0)',
              borderColor: 'rgb(255, 255, 255)',
              data: region_abstention_data_list,
            }
          ]
        },
        options: {
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label + "%";
                }
            }
          },
        }
      });

    });
  }

}