import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/internal/ajax/ajax';
import { map } from 'rxjs';

@Component({
  selector: 'sample-single-tenant-app-policies-table',
  templateUrl: './policies-table.component.html',
  styleUrls: ['./policies-table.component.scss'],
})
export class PoliciesTableComponent implements OnInit {
  public ngOnInit(): void {
    const apiData = ajax('http://localhost:3333/api/policies').pipe(
      map((res: any) => {
        console.log('res: ', res);
        return res.response;
      })
    );
    apiData.subscribe({
      next(x: any) {
        console.log('data: ', x);
      },
    });
  }
}
