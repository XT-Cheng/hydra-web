<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialService } from '@delon/auth';
import { Subscription } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialService } from '@delon/auth';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

@Component({
  selector: 'app-callback',
  template: ``,
  providers: [SocialService],
})
<<<<<<< HEAD
export class CallbackComponent implements OnInit, OnDestroy {
  private router$: Subscription;
=======
export class CallbackComponent implements OnInit {
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  type: string;

  constructor(
    private socialService: SocialService,
    private route: ActivatedRoute,
<<<<<<< HEAD
  ) {}

  ngOnInit(): void {
    this.router$ = this.route.params.subscribe(params => {
=======
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
      this.type = params['type'];
      this.mockModel();
    });
  }

  private mockModel() {
    this.socialService.callback({
      token: '123456789',
      name: 'cipchk',
      email: `${this.type}@${this.type}.com`,
      id: 10000,
      time: +new Date(),
    });
  }
<<<<<<< HEAD

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
=======
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
}
