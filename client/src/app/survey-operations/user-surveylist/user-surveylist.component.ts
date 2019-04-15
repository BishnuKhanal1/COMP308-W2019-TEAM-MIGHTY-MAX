import { Component, OnInit } from "@angular/core";
import { Survey } from "src/app/models/survey";
import { SurveyService } from "src/app/services/survey.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-surveylist",
  templateUrl: "./user-surveylist.component.html",
  styleUrls: ["./user-surveylist.component.css"]
})
export class UserSurveylistComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.displaySurveys();
  }

  displaySurveys(): void {
    this.surveyService.getSurveys().subscribe(content => {
      if (content.success) {
        this.surveys = content.surveys;
      } else {
        this.flashMessage.show("Could not load properly", {
          cssClass: "alert-danger",
          timeOut: 5000
        });
      }
    });
  }
}
let countDownDate = new Date("Apr 14, 2019 5:26:20").getTime();

// Update the count down every 1 second
let x = setInterval(() => {
  // Get todays date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("surveyLink").remove();
  }
}, 1000);
