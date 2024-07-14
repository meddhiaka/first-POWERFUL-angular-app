import { Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { NativepageComponent } from './nativepage/nativepage.component';

export const routes: Routes = [
    {
        path: "firstpage",
        component: FirstpageComponent
    },
    {
        path: "secondpage",
        component: SecondpageComponent
    },
    {
        path: "",
        component: NativepageComponent
    }
];
