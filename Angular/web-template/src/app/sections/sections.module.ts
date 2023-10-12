import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsSectionComponent } from './alerts-section/alerts-section.component';
import { AngularSectionComponent } from './angular-section/angular-section.component';
import { ButtonsSectionComponent } from './buttons-section/buttons-section.component';
import { CrsSectionComponent } from './crs-section/crs-section.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { ModelComponent } from './model/model.component';



@NgModule({
  declarations: [
    AlertsSectionComponent,
    AngularSectionComponent,
    ButtonsSectionComponent,
    CrsSectionComponent,
    InputSectionComponent,
    ModelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
