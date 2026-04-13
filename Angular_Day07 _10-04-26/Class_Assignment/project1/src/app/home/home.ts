import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  students = [
    { name: 'Aman', rollNo: 10, branch: 'CS_AI' },
    { name: 'Kaustubh', rollNo: 11, branch: 'CS' },
    { name: 'Himanshu', rollNo: 12, branch: 'IT' },
    { name: 'dev', rollNo: 13, branch: 'ECE' },
  ];

  displayedColumns: string[] = ['name', 'rollNo', 'branch'];
}
