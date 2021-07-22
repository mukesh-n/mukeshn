import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/service/storage/storage.service';

@Component({
  selector: 'dhf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public shared_storage: StorageService) { }

  ngOnInit(): void {
  }

}
