import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'dashboard-machine-main',
  templateUrl: './machine.main.component.html',
})
export class DashboardMachineComponent implements OnInit {
  constructor(private http: _HttpClient) { }

  webSite: any[] = [];

  ngOnInit() {
    this.http.get('/chart').subscribe((res: any) => {
      this.webSite = res.visitData.slice(0, 10);
    });
  }
}
