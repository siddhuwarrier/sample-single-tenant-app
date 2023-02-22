import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/internal/ajax/ajax';
import { BehaviorSubject, map } from 'rxjs';
import { Action, IPolicyModel } from '@sample-single-tenant-app/shared/models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'sample-single-tenant-app-policies-table',
  templateUrl: './policies-table.component.html',
  styleUrls: ['./policies-table.component.scss'],
})
export class PoliciesTableComponent implements OnInit {
  public policies$: BehaviorSubject<IPolicyModel[]> = new BehaviorSubject<
    IPolicyModel[]
  >([]);

  public ACTION = Action;
  public dataSource = new MatTableDataSource<IPolicyModel>();
  public displayedColumns = ['src', 'dest', 'action'];
  public ngOnInit(): void {
    const apiData = ajax(`http://localhost/api/policies`).pipe(
      map((res: any) => {
        return res.response;
      })
    );

    apiData.subscribe((policies) => {
      this.dataSource.data = policies;
    });
  }
}
