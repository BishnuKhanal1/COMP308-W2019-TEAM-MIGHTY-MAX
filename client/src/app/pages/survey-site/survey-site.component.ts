import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyListService } from 'src/app/services/survey-list.service';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-site',
  templateUrl: './survey-site.component.html',
  styleUrls: ['./survey-site.component.css']
})
export class SurveySiteComponent /*extends BasePageComponent*/ implements OnInit {
  title: string;
  survey: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyListService: SurveyListService,
    private router: Router
  ) {
    //super(route);
  }
  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    /*this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });*/
  }
  /*isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }*/

  onPageSubmit(): void {
    
      this.surveyListService.addSurvey(this.survey).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeOut: 3000});
          this.router.navigate(['/survey-site']);
        } else {
          this.flashMessage.show('Add Contact Failed', {cssClass: 'alert-danger', timeOut: 3000});
          this.router.navigate(['/survey-site']);
        }
      });
}
}
