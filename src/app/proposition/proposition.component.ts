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
  income_ctx: HTMLElement;
  income_chart: any;
  education_ctx: HTMLElement;
  education_chart: any;
  race_ctx: HTMLElement;
  race_chart: any;
  gender_ctx: HTMLElement;
  gender_chart: any;
  parliamentarian_ctx: HTMLElement;
  parliamentarian_chart: any;
  population_ctx: HTMLElement;
  population_chart: any;

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
        'Não informada'
      ]

      //income chart
      let income_labels_list = [];
      income_labels_list = [
        'Classe A',
        'Classe B',
        'Classe C',
        'Classe D',
        'Classe E',
        'Não informada'
      ]

      //education chart
      let education_labels_list = [];
      education_labels_list = [
        'Sem escolaridade',
        'Ensino Fundamental',
        'Ensino Médio',
        'Ensino Superior',
        'Pós Graduação',
        'Não informada'
      ]

      //race chart
      let race_labels_list = [];
      race_labels_list = [
        'Branca',
        'Preta',
        'Amarela',
        'Parda',
        'Indígena',
        'Não informada'
      ]

      //gender chart
      let gender_labels_list = [];
      gender_labels_list = [
        'Masculino',
        'Feminino',
        'Outro',
        'Não informado'
      ]

      //region

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

      //income

      let income_approve_data_list = [];
      income_approve_data_list.push(this.social_information['income']['A']['Y']);
      income_approve_data_list.push(this.social_information['income']['B']['Y']);
      income_approve_data_list.push(this.social_information['income']['C']['Y']);
      income_approve_data_list.push(this.social_information['income']['D']['Y']);
      income_approve_data_list.push(this.social_information['income']['E']['Y']);
      income_approve_data_list.push(this.social_information['income']['null']['Y']);

      let income_disapprove_data_list = [];
      income_disapprove_data_list.push(this.social_information['income']['A']['N']);
      income_disapprove_data_list.push(this.social_information['income']['B']['N']);
      income_disapprove_data_list.push(this.social_information['income']['C']['N']);
      income_disapprove_data_list.push(this.social_information['income']['D']['N']);
      income_disapprove_data_list.push(this.social_information['income']['E']['N']);
      income_disapprove_data_list.push(this.social_information['income']['null']['N']);

      let income_abstention_data_list = [];
      income_abstention_data_list.push(this.social_information['income']['A']['A']);
      income_abstention_data_list.push(this.social_information['income']['B']['A']);
      income_abstention_data_list.push(this.social_information['income']['C']['A']);
      income_abstention_data_list.push(this.social_information['income']['D']['A']);
      income_abstention_data_list.push(this.social_information['income']['E']['A']);
      income_abstention_data_list.push(this.social_information['income']['null']['A']);

      //education

      let education_approve_data_list = [];
      education_approve_data_list.push(this.social_information['education']['SE']['Y']);
      education_approve_data_list.push(this.social_information['education']['EF']['Y']);
      education_approve_data_list.push(this.social_information['education']['EM']['Y']);
      education_approve_data_list.push(this.social_information['education']['ES']['Y']);
      education_approve_data_list.push(this.social_information['education']['PG']['Y']);
      education_approve_data_list.push(this.social_information['education']['null']['Y']);

      let education_disapprove_data_list = [];
      education_disapprove_data_list.push(this.social_information['education']['SE']['N']);
      education_disapprove_data_list.push(this.social_information['education']['EF']['N']);
      education_disapprove_data_list.push(this.social_information['education']['EM']['N']);
      education_disapprove_data_list.push(this.social_information['education']['ES']['N']);
      education_disapprove_data_list.push(this.social_information['education']['PG']['N']);
      education_disapprove_data_list.push(this.social_information['education']['null']['N']);

      let education_abstention_data_list = [];
      education_abstention_data_list.push(this.social_information['education']['SE']['A']);
      education_abstention_data_list.push(this.social_information['education']['EF']['A']);
      education_abstention_data_list.push(this.social_information['education']['EM']['A']);
      education_abstention_data_list.push(this.social_information['education']['ES']['A']);
      education_abstention_data_list.push(this.social_information['education']['PG']['A']);
      education_abstention_data_list.push(this.social_information['education']['null']['A']);

      //race

      let race_approve_data_list = [];
      race_approve_data_list.push(this.social_information['race']['B']['Y']);
      race_approve_data_list.push(this.social_information['race']['PR']['Y']);
      race_approve_data_list.push(this.social_information['race']['A']['Y']);
      race_approve_data_list.push(this.social_information['race']['PA']['Y']);
      race_approve_data_list.push(this.social_information['race']['I']['Y']);
      race_approve_data_list.push(this.social_information['race']['null']['Y']);

      let race_disapprove_data_list = [];
      race_disapprove_data_list.push(this.social_information['race']['B']['N']);
      race_disapprove_data_list.push(this.social_information['race']['PR']['N']);
      race_disapprove_data_list.push(this.social_information['race']['A']['N']);
      race_disapprove_data_list.push(this.social_information['race']['PA']['N']);
      race_disapprove_data_list.push(this.social_information['race']['I']['N']);
      race_disapprove_data_list.push(this.social_information['race']['null']['N']);

      let race_abstention_data_list = [];
      race_abstention_data_list.push(this.social_information['race']['B']['A']);
      race_abstention_data_list.push(this.social_information['race']['PR']['A']);
      race_abstention_data_list.push(this.social_information['race']['A']['A']);
      race_abstention_data_list.push(this.social_information['race']['PA']['A']);
      race_abstention_data_list.push(this.social_information['race']['I']['A']);
      race_abstention_data_list.push(this.social_information['race']['null']['A']);

      //gender

      let gender_approve_data_list = [];
      gender_approve_data_list.push(this.social_information['gender']['M']['Y']);
      gender_approve_data_list.push(this.social_information['gender']['F']['Y']);
      gender_approve_data_list.push(this.social_information['gender']['O']['Y']);
      gender_approve_data_list.push(this.social_information['gender']['null']['Y']);

      let gender_disapprove_data_list = [];
      gender_disapprove_data_list.push(this.social_information['gender']['M']['N']);
      gender_disapprove_data_list.push(this.social_information['gender']['F']['N']);
      gender_disapprove_data_list.push(this.social_information['gender']['O']['N']);
      gender_disapprove_data_list.push(this.social_information['gender']['null']['N']);

      let gender_abstention_data_list = [];
      gender_abstention_data_list.push(this.social_information['gender']['M']['A']);
      gender_abstention_data_list.push(this.social_information['gender']['F']['A']);
      gender_abstention_data_list.push(this.social_information['gender']['O']['A']);
      gender_abstention_data_list.push(this.social_information['gender']['null']['A']);

      //parliamentary
      let parliamentarian_data_list = [];
      parliamentarian_data_list.push(this.social_information['parliamentarians_total_votes']['Y']);
      parliamentarian_data_list.push(this.social_information['parliamentarians_total_votes']['N']);
      parliamentarian_data_list.push(this.social_information['parliamentarians_total_votes']['A']);
      parliamentarian_data_list.push(this.social_information['parliamentarians_total_votes']['others']);

      //population
      let population_data_list = [];
      population_data_list.push(this.social_information['population_total_votes']['Y']);
      population_data_list.push(this.social_information['population_total_votes']['N']);
      population_data_list.push(this.social_information['population_total_votes']['A']);

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
          scales:{
            xAxes:[{
              stacked: false,
              beginAtZero: true,
              ticks:{
                stepSize: 1,
                min: 0,
                autoSkip: false
              }
            }]
          }
        }
      });
      //income
      this.income_ctx = document.getElementById('incomeChart');
      this.income_chart = new Chart(this.income_ctx, {
        type: 'bar',
        data: {
          labels: income_labels_list,
          datasets: [
            {
              label: 'Porcentagem de aprovação',
              backgroundColor: 'rgb(68,157,68)',
              borderColor: 'rgb(255, 255, 255)',
              data: income_approve_data_list,
            },
            {
              label: 'Porcentagem de desaprovação',
              backgroundColor: 'rgb(201,48,44)',
              borderColor: 'rgb(255, 255, 255)',
              data: income_disapprove_data_list,
            },
            {
              label: 'Porcentagem de abstenção',
              backgroundColor: 'rgb(255,255,0)',
              borderColor: 'rgb(255, 255, 255)',
              data: income_abstention_data_list,
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
          scales:{
            xAxes:[{
              stacked: false,
              beginAtZero: true,
              ticks:{
                stepSize: 1,
                min: 0,
                autoSkip: false
              }
            }]
          }
        }
      });
      //education
      this.education_ctx = document.getElementById('educationChart');
      this.education_chart = new Chart(this.education_ctx, {
        type: 'bar',
        data: {
          labels: education_labels_list,
          datasets: [
            {
              label: 'Porcentagem de aprovação',
              backgroundColor: 'rgb(68,157,68)',
              borderColor: 'rgb(255, 255, 255)',
              data: education_approve_data_list,
            },
            {
              label: 'Porcentagem de desaprovação',
              backgroundColor: 'rgb(201,48,44)',
              borderColor: 'rgb(255, 255, 255)',
              data: education_disapprove_data_list,
            },
            {
              label: 'Porcentagem de abstenção',
              backgroundColor: 'rgb(255,255,0)',
              borderColor: 'rgb(255, 255, 255)',
              data: education_abstention_data_list,
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
          scales:{
            xAxes:[{
              stacked: false,
              beginAtZero: true,
              ticks:{
                stepSize: 1,
                min: 0,
                autoSkip: false
              }
            }]
          }
        }
      });
      //race
      this.race_ctx = document.getElementById('raceChart');
      this.race_chart = new Chart(this.race_ctx, {
        type: 'bar',
        data: {
          labels: race_labels_list,
          datasets: [
            {
              label: 'Porcentagem de aprovação',
              backgroundColor: 'rgb(68,157,68)',
              borderColor: 'rgb(255, 255, 255)',
              data: race_approve_data_list,
            },
            {
              label: 'Porcentagem de desaprovação',
              backgroundColor: 'rgb(201,48,44)',
              borderColor: 'rgb(255, 255, 255)',
              data: race_disapprove_data_list,
            },
            {
              label: 'Porcentagem de abstenção',
              backgroundColor: 'rgb(255,255,0)',
              borderColor: 'rgb(255, 255, 255)',
              data: race_abstention_data_list,
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
          scales:{
            xAxes:[{
              stacked: false,
              beginAtZero: true,
              ticks:{
                stepSize: 1,
                min: 0,
                autoSkip: false
              }
            }]
          }
        }
      });

      //gender

      this.gender_ctx = document.getElementById('genderChart');
      this.gender_chart = new Chart(this.gender_ctx, {
        type: 'bar',
        data: {
          labels: gender_labels_list,
          datasets: [
            {
              label: 'Porcentagem de aprovação',
              backgroundColor: 'rgb(68,157,68)',
              borderColor: 'rgb(255, 255, 255)',
              data: gender_approve_data_list,
            },
            {
              label: 'Porcentagem de desaprovação',
              backgroundColor: 'rgb(201,48,44)',
              borderColor: 'rgb(255, 255, 255)',
              data: gender_disapprove_data_list,
            },
            {
              label: 'Porcentagem de abstenção',
              backgroundColor: 'rgb(255,255,0)',
              borderColor: 'rgb(255, 255, 255)',
              data: gender_abstention_data_list,
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
          scales:{
            xAxes:[{
              stacked: false,
              beginAtZero: true,
              ticks:{
                stepSize: 1,
                min: 0,
                autoSkip: false
              }
            }]
          }
        }
      });

      //parliamentarian
      this.parliamentarian_ctx = document.getElementById('parliamentarianChart');
      this.parliamentarian_chart = new Chart(this.parliamentarian_ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: parliamentarian_data_list,
              backgroundColor: [
                'rgb(68,157,68)',
                'rgb(201,48,44)',
                'rgb(255,255,0)',
                'rgb(115,134,213)'
              ]
            }
          ],
          labels: [
            'Porcentagem de aprovação',
            'Porcentagem de desaprovação',
            'Porcentagem de abstenção',
            'Sem voto'
          ]
        },
        options: {
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.labels[tooltipItem.index] || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] * 100) / 100;
                    return label + "%";
                }
            }
          }
        }
      });

      //population
      this.population_ctx = document.getElementById('populationChart');
      this.population_chart = new Chart(this.population_ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: population_data_list,
              backgroundColor: [
                'rgb(68,157,68)',
                'rgb(201,48,44)',
                'rgb(255,255,0)'
              ]
            }
          ],
          labels: [
            'Porcentagem de aprovação',
            'Porcentagem de desaprovação',
            'Porcentagem de abstenção'
          ]
        },
        options: {
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.labels[tooltipItem.index] || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] * 100) / 100;
                    return label + "%";
                }
            }
          }
        }
      });
    });
  }

  openProposition(proposition_url) {
    window.open(
      proposition_url,
      '_blank',
      'height=700, width=820, scrollbars=yes, status=yes'
    );
  }
}
