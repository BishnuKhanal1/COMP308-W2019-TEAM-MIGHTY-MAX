// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { DetailsComponent } from "./pages/details/details.component";
import { SurveySiteComponent } from "./pages/survey-site/survey-site.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SurveyListComponent } from "./pages/survey-list/survey-list.component";
import { SurveyComponent } from "./survey-operations/survey/survey.component";
import { UserSurveylistComponent } from "./survey-operations/user-surveylist/user-surveylist.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "About" } },
  { path: "details", component: DetailsComponent, data: { title: "Details" } },
  {
    path: "survey-site/add",
    component: SurveySiteComponent,
    data: { title: "Survey-site" },
    canActivate: [AuthGuard]
  },
  {
    path: "survey-site",
    component: SurveyListComponent,
    data: { title: "Survey-List" },
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, data: { title: "Profile" } },

  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Register" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },

  {
    path: "surveys",
    component: UserSurveylistComponent,
    data: { title: "Surveys made by users" }
  },
  {
    path: "surveys/survey/:id",
    component: SurveyComponent /*canActivate: [AuthGuard]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
