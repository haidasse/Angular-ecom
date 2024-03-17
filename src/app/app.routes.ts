import { Component } from '@angular/core';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './pages/admin/product/product.component';
import { CustomerComponent } from './pages/admin/customer/customer.component';

export const routes: Routes = [
    { path:"",
     redirectTo:"login",
     pathMatch:"full"

    }
,

    {  
        path:'login',
        component:LoginComponent
    }
    ,

    {
        path:"",
           component:LayoutComponent,
        children:[{
           path:"product",
           component:ProductComponent
                  }] 
                     
    } , 
    // {
    //     // path:"",
    //     //    component:LayoutComponent,
    //     // children:[{
    //     //     path:"customer",
    //     //     Component:CustomerComponent,

    //     //           }] 
   

    // }
    

    {  
        path:'**',
        component:LoginComponent
    }
];
