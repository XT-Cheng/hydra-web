import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'passport-register-result',
<<<<<<< HEAD
  templateUrl: './register-result.component.html'
=======
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.less'],
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
})
export class UserRegisterResultComponent {
  constructor(public msg: NzMessageService) {}
}
