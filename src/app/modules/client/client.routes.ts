import { Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { InfoSummaryComponent } from "./pages/info-summary/info-summary.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterOutComponent } from "./pages/register-out/register-out.component";

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'registerIn',
            pathMatch: 'full'
        },
        {
            path: 'registerIn',
            component: RegisterComponent
        },
        {
            path: 'registerOut',
            component: RegisterOutComponent
        },
        {
            path: 'infoSummary',
            component: InfoSummaryComponent
        },

    ]
    },
];