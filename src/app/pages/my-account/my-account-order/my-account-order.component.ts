import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account-order',
  templateUrl: './my-account-order.component.html',
  styleUrls: ['./my-account-order.component.scss'],
})
export class MyAccountOrderComponent implements OnInit {
  @Input() order;

  constructor() {}

  ngOnInit(): void {}
}
