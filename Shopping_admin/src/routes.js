/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import List from '@material-ui/icons/List';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import shopyProductAdd from 'views/Product/shopyProductAdd';
import productEdit from 'views/Product/productEdit';
import productList from 'views/Product/productList';

// import UserProfile from "views/UserProfile/UserProfile.js";





// Layout Types

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
    menu : "/sidemenu"
  },
  {
    path: "/productList",
    name: "Product List",
    icon: List,
    component: productList,
    layout: "/admin",
    menu : "/sidemenu"
  },
  {
    path: "/shopyProductAdd",
    name: "Product Add",
    icon: List,
    component: shopyProductAdd,
    layout: "/admin",
    menu : ""
  },
  {
    path: "/productEdit/:id",
    name: "Product Edit",
    icon: List,
    component: productEdit,
    layout: "/admin",
    menu : ""
  },
 
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  //   menu : ""
  // },
  
  
];

export default dashboardRoutes;
