import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/service/storage/storage.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public shared_storage: StorageService) {}

  ngOnInit(): void {
    this.shared_storage.permanent = 'vicky';
    this.shared_storage.temporary = 'vicky';
  }
}
