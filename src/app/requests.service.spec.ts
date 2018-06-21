import { TestBed, inject } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { RequestsService } from './requests.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserModel } from '../models/user';
import { SocialInformationModel } from '../models/socialInformation';
import { VoteModel } from '../models/vote';
import { MessageModel } from '../models/message';

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
        region: null,
        income: null,
        education: null,
        race: null,
        gender: null,
        birth_date: null
      },
    };
    const promise = service.postUser(user);
    expect(promise).toBeDefined();
  }));

  it('postSocialInformation should return a promise', inject([RequestsService], (service: RequestsService) => {
    const social_information: SocialInformationModel = {
      region: null,
      income: null,
      education: null,
      race: null,
      gender: null,
      birth_date: null
    };
    const promise = service.postSocialInformation(social_information);
    expect(promise).toBeDefined();
  }));

  it('postVote should return a promise', inject([RequestsService], (service: RequestsService) => {
    const vote: VoteModel = {
      proposition: 123,
      option: 'Y'
    };
    const promise = service.postVote(vote);
    expect(promise).toBeDefined();
  }));

  it('updateVote should return a promise', inject([RequestsService], (service: RequestsService) => {
    const vote: VoteModel = {
      proposition: 124,
      option: 'N'
    };
    const id = 42;
    const promise = service.updateVote(vote, id);
    expect(promise).toBeDefined();
  }));

  it('postFollow should return a promise', inject([RequestsService], (service: RequestsService) => {
    const id = 1;

    const promise = service.postFollow(id);
    expect(promise).toBeDefined();
  }));

  it('deleteFollow should return a promise', inject([RequestsService], (service: RequestsService) => {
    const id = 1;

    const promise = service.deleteFollow(id);
    expect(promise).toBeDefined();
  }));

  it('postMessage should return a promise', inject([RequestsService], (service: RequestsService) => {
    const msg: MessageModel = {
      topic: 'abc',
      email: 'abc@123.com',
      choice: 'A',
      text: 'aaabbb'
    }

    const promise = service.postMessage(msg);
    expect(promise).toBeDefined();
  }));

  it('getPropositionSpecific should return a promise',  inject([RequestsService], (service: RequestsService) => {
    const id = 18;

    const promise = service.getPropositionSpecific(id);
    expect(promise).toBeDefined();
  }));

  it('getPropositionSpecificSocialInfo should return a promise',  inject([RequestsService], (service: RequestsService) => {
    const id = 19;

    const promise = service.getPropositionSpecificSocialInfo(id);
    expect(promise).toBeDefined();
  }));

});
