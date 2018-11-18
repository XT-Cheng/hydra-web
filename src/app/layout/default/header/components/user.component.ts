<<<<<<< HEAD
import { Component, Inject } from '@angular/core';
=======
import { Component, OnInit, Inject } from '@angular/core';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'header-user',
  template: `
  <nz-dropdown nzPlacement="bottomRight">
<<<<<<< HEAD
    <div class="alain-default__nav-item d-flex align-items-center px-sm" nz-dropdown>
=======
    <div class="item d-flex align-items-center px-sm" nz-dropdown>
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{settings.user.name}}
    </div>
    <div nz-menu class="width-sm">
<<<<<<< HEAD
      <div nz-menu-item routerLink="/pro/account/center"><i class="anticon anticon-user mr-sm"></i>
        {{ 'menu.account.center' | translate }}
      </div>
      <div nz-menu-item routerLink="/pro/account/settings"><i class="anticon anticon-setting mr-sm"></i>
        {{ 'menu.account.settings' | translate }}
      </div>
      <li nz-menu-divider></li>
      <div nz-menu-item (click)="logout()"><i class="anticon anticon-logout mr-sm"></i>
        {{ 'menu.account.logout' | translate }}
      </div>
=======
      <div nz-menu-item [nzDisabled]="true"><i class="anticon anticon-user mr-sm"></i>个人中心</div>
      <div nz-menu-item [nzDisabled]="true"><i class="anticon anticon-setting mr-sm"></i>设置</div>
      <li nz-menu-divider></li>
      <div nz-menu-item (click)="logout()"><i class="anticon anticon-setting mr-sm"></i>退出登录</div>
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
    </div>
  </nz-dropdown>
  `,
})
<<<<<<< HEAD
export class HeaderUserComponent {
=======
export class HeaderUserComponent implements OnInit {
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  constructor(
    public settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {}

<<<<<<< HEAD
=======
  ngOnInit(): void {
    this.tokenService.change().subscribe((res: any) => {
      this.settings.setUser(res);
    });
    // mock
    const token = this.tokenService.get() || {
      token: 'nothing',
      name: 'Admin',
      avatar: './assets/logo-color.svg',
      email: 'cipchk@qq.com',
    };
    this.tokenService.set(token);
  }

>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
