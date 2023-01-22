import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] =
  [
    {
      id: '1',
      name: 'Jhon Doe',
      email: 'jhon@gmail.com',
      phone: 9888883,
      salary: 50000,
      department: 'HRM'
    },
    {
      id: '2',
      name: 'Danny Potter',
      email: 'danny@gmail.com',
      phone: 9885873,
      salary: 50000,
      department: 'CSE'
    },
    {
      id: '3',
      name: 'Maxy Doe',
      email: 'maxy@gmail.com',
      phone: 9888883,
      salary: 50000,
      department: 'IT'
    },
    {
      id: '4',
      name: 'Jhon Doe',
      email: 'jhon@gmail.com',
      phone: 9888883,
      salary: 50000,
      department: 'CSE'
    }

  ];

  constructor() {}


}
