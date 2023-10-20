import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ScreenComponent } from '../components/screen/screen.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from "../components/components.module";
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';



@NgModule({
    declarations: [
        ScreenComponent,
        LayoutComponent,
        TeachersComponent,
        StudentsComponent,
        TopnavComponent,
        SidenavComponent,

    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ComponentsModule,

    ]
})
export class LayoutModule { }