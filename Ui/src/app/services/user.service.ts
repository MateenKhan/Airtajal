import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public isUserLoggedIn = false;
  
  public pagesList = [
    {
      title:"Users",
      route:"/users",
      user:"owner"
    },
    {
      title:"Products",
      route:"/products",
      user:"owner"
    },
    {
      title:"Warehouses",
      route:"/warehouses",
      user:"owner"
    }
  ]

  public userHierarchy = [
    {
      role:"owner",
      rank: 1,
      description:"every thing accessible"
    },
    {
      role:"admin_read",
      rank: 2,
      description:"every thing accessible to view"
    },
    {
      role:"warehouse_admin",
      rank: 3,
      description:"warehouse CRUD"
    },
    {
      role:"warehouse_read",
      rank: 4,
      description:"warehouse read"
    },
    {
      role:"user",
      rank: 3,
      description:"login"
    }
  ]
}
