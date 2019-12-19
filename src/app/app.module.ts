import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxButtonModule,
  IgxCheckboxModule,
  IgxComboModule,
  IgxDatePickerModule,
  IgxDialogModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxLayoutModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxSelectModule
} from 'igniteui-angular';
import { AppComponent } from './app.component';
import { SelectFormComponent } from './select-form/select-form.component';

@NgModule({
  declarations: [AppComponent, SelectFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // IGX
    IgxButtonModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxSelectModule,
    IgxRippleModule,
    IgxComboModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
