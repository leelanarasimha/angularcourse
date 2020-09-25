import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Users Data Received');
    }, 3000);
  })
  filteredString: string = '';
  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser() {
    this.users.push({
      name: 'Sample',
      joinedDate: new Date(12, 2, 2009)
    })
  }

}
