import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss'],
})
export class MyDataComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
