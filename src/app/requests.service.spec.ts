import { TestBed, inject } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { RequestsService } from './requests.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user';
import { SocialInformationModel } from '../models/socialInformation';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        RequestsService,
        CookieService,
        TokenService
      ]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));

  it('should check if status is succeed', inject([RequestsService], (service: RequestsService) => {
    expect(service.didSucceed(0)).toBeFalsy('on 0');
    expect(service.didSucceed(200)).toBeTruthy('on 200');
    expect(service.didSucceed(201)).toBeTruthy('on 201');
    expect(service.didSucceed(301)).toBeFalsy('on 301');
    expect(service.didSucceed(400)).toBeFalsy('on 400');
    expect(service.didSucceed(404)).toBeFalsy('on any other');
  }));

  it('getUser should return a promise', inject([RequestsService], (service: RequestsService) => {
    const userID = 1;

    const promise = service.getUser(userID);
    expect(promise).toBeDefined();
  }));

  it('getVotedProposition should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;

    const promise = service.getVotedProposition(offset);
    expect(promise).toBeDefined();
  }));

  it('getSearchVotedProposition should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const keyword = 'teste';
    const promise = service.getSearchVotedProposition(offset, keyword);
    expect(promise).toBeDefined();
  }));

  it('getProposition should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const limit = 5;
    const promise = service.getProposition(limit, offset);
    expect(promise).toBeDefined();
  }));

  it('getProjects should return a promise', inject([RequestsService], (service: RequestsService) => {
    const promise = service.getProjects();
    expect(promise).toBeDefined();
  }));

  it('getParliamentarian should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const limit = 5;
    const promise = service.getParliamentarian(limit, offset);
    expect(promise).toBeDefined();
  }));

  it('getSearchedParlimentarian should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const limit = 5;
    const keyword = 'john doe';
    const promise = service.getSearchedParliamentarian(limit, offset, keyword);
    expect(promise).toBeDefined();
  }));

  it('getParliamentarianSpecific should return a promise', inject([RequestsService], (service: RequestsService) => {
    const id = 1;

    const promise = service.getParlimentarianSpecific(id);
    expect(promise).toBeDefined();
  }));

  it('getFollow should return a promise', inject([RequestsService], (service: RequestsService) => {
    const id = 1;

    const promise = service.getFollow(id);
    expect(promise).toBeDefined();
  }));

  it('getFollowingParliamentarian should return a promise', inject([RequestsService], (service: RequestsService) => {
    const offset = 1;
    const limit = 5;
    const promise = service.getFollowingParliamentarians(limit, offset);
    expect(promise).toBeDefined();
  }));

  it('postUser should return a promise', inject([RequestsService], (service: RequestsService) => {
    const user: UserModel = {
      username: 'adalberto',
      first_name: 'adalberto',
      last_name: 'almeida',
      email: 'samuel@borges.com',
      password: 'amo0S4muel,MasÉSegredo!',
      social_information: {
        federal_unit: 'AC',
        city: '',
        income: 0,
        education: '',
        job: 'Gerente de Recursos Humanos em Clube de Entretenimento Adulto',
        birth_date: new Date('12-12-1929'),
      },
    };
    const promise = service.postUser(user);
    expect(promise).toBeDefined();
  }));

  it('postSocialInformation should return a promise', inject([RequestsService], (service: RequestsService) => {
    const social_information: SocialInformationModel = {
      federal_unit: 'RJ',
      city: '',
      income: 0,
      education: '',
      job: '',
      birth_date: new Date('02-05-1992'),
    };
    const promise = service.postSocialInformation(social_information);
    expect(promise).toBeDefined();
  }));
});
