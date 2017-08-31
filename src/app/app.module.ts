import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';
import { DetailComponent } from './detail/detail.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { EduExperienceComponent } from './edu-experience/edu-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ProfileComponent,
    ExperienceComponent,
    ProjectExperienceComponent,
    DetailComponent,
    LanguagesComponent,
    ProcessBarComponent,
    EduExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
