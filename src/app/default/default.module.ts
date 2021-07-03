import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";

import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { DashboardService } from "../services/dashboard.service";
//  import { AgDetailsButtonComponent } from './agCustomCells/ag-details-button/ag-details-button.component';
//  import { AgSettingsButtonComponent } from './agCustomCells/ag-settings-button/ag-settings-button.component';
//  import { AgSwimlanesButtonComponent } from './agCustomCells/ag-swimlanes-button/ag-swimlanes-button.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    //AgGridModule.withComponents([AgDetailsButtonComponent,AgSettingsButtonComponent,AgSwimlanesButtonComponent]),
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
