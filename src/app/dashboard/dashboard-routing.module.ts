import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyavailabilityComponent } from './myavailability/myavailability.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard.component';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { ServiceusersComponent } from './serviceusers/serviceusers.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ShedulesheduleComponent } from './sheduleshedule/sheduleshedule.component';
import { StaffsComponent } from './staffs/staffs.component';
import { SubadminsComponent } from './subadmins/subadmins.component';
import { NotificationComponent } from './notification/notification.component';
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


const routes: Routes = [
    {path: '', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'shedule', component: SheduleComponent},
    {path: 'knowledgebase', component: KnowledgebaseComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'staffs', component: StaffsComponent},
    {path: 'serviceusers', component: ServiceusersComponent},
    {path: 'organization', component: OrganizationsComponent},
    {path: 'finance', component: FinanceComponent},
    {path: 'sheduleshedule', component: ShedulesheduleComponent},
    {path: 'information', component: InformationComponent},
    {path: 'myavailability', component: MyavailabilityComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'weeklyview', component: WeeklyviewComponent},
    {path: 'allinformation', component: AllinformationComponent},
    {path: 'visitledger', component: VisitledgerComponent},
    {path: 'invoiceledger', component: InvoiceledgerComponent},
    {path: 'sheduleone', component: SheduleoneComponent},
    {path: 'servicevisitdetails', component: ServiceVisitDeatilsComponent},
    {path: 'ndisshedule', component: NdisSheduleComponent},
    {path: 'staffholiday', component: StaffholidayComponent},
    {path: 'stafflanding', component: StaffLandingPageComponent},
    {path: 'supportworkerdetails', component: SupportWorkerDetailsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'supportworkermap', component: SupportWorkerMapComponent},
    {path: 'serviceuserslanding', component: ServiceUsersLandingComponent},
    {path: 'informations', component: InformationsComponent},
   
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
