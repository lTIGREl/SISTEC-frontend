import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'client',
        loadChildren: () =>
            import('./modules/client/client.routes').then((m) => m.routes),
    },
];
