import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Survey } from '../models/survey';
import { SurveyAnswers } from '../models/survey-answers';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private endpoint = 'http://localhost:3000/api/surveys';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public getSurveys(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getSelectedSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + '/survey/' + survey._id, this.httpOptions);
  }

  public collectSurveyAnswers(surveyAnswers: SurveyAnswers): Observable<any> {
    return this.http.post<any>(this.endpoint + '/survey/:id', surveyAnswers, this.httpOptions);
  }
}
