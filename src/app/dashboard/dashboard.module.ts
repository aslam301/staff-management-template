import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxSpinnerModule } from 'ngx-spinner';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SheduleComponent } from './shedule/shedule.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { AdminComponent } from './admin/admin.component';
import { StaffsComponent } from './staffs/staffs.component';
import { ServiceusersComponent } from './serviceusers/serviceusers.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { FinanceComponent } from './finance/finance.component';
import { ShedulesheduleComponent } from './sheduleshedule/sheduleshedule.component';
import { InformationComponent } from './information/information.component';
import { WeeklyviewComponent } from './weeklyview/weeklyview.component';
import { AllinformationComponent } from './allinformation/allinformation.component';
import { VisitledgerComponent } from './visitledger/visitledger.component';
import { InvoiceledgerComponent } from './invoiceledger/invoiceledger.component';
import { SheduleoneComponent } from './sheduleone/sheduleone.component';
import { ServiceVisitDeatilsComponent } from './service-visit-deatils/service-visit-deatils.component';
import { NdisSheduleComponent } from './ndis-shedule/ndis-shedule.component';
import { StaffholidayComponent } from './staffholiday/staffholiday.component';
import { StaffLandingPageComponent } from './staff-landing-page/staff-landing-page.component';
import { SupportWorkerDetailsComponent } from './support-worker-details/support-worker-details.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SupportWorkerMapComponent } from './support-worker-map/support-worker-map.component';
import { ServiceUsersLandingComponent } from './service-users-landing/service-users-landing.component';
import { InformationsComponent } from './informations/informations.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SheduleComponent,
    KnowledgebaseComponent,
    AdminComponent,
    StaffsComponent,
    ServiceusersComponent,
    OrganizationsComponent,
    FinanceComponent,
    ShedulesheduleComponent,
    InformationComponent,
    WeeklyviewComponent,
    AllinformationComponent,
    VisitledgerComponent,
    InvoiceledgerComponent,
    SheduleoneComponent,
    ServiceVisitDeatilsComponent,
    NdisSheduleComponent,
    StaffholidayComponent,
    StaffLandingPageComponent,
    SupportWorkerDetailsComponent,
    CalendarComponent,
    AttributeComponent,
    SupportWorkerMapComponent,
    ServiceUsersLandingComponent,
    InformationsComponent,
   
   
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
