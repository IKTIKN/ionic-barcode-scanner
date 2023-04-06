import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-checkmark',
  templateUrl: './checkmark.component.html',
  styleUrls: ['./checkmark.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],

})
export class CheckmarkComponent  implements OnInit {
  @Input() isSupported!: boolean;

  constructor() { }

  ngOnInit() {}

}
