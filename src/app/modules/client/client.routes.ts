import { Routes } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { InfoSummaryComponent } from "./pages/info-summary/info-summary.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            redirectTo: 'register',
            pathMatch: 'full'
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'infoSummary',
            component: InfoSummaryComponent
        },

    ]
    },
];