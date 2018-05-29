import { NgModule } from '@angular/core';
import { MatIconModule, MatGridListModule, MatDividerModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatCardModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
})
export class SharedModule { }
