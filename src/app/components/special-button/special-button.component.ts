import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent {
  @Input() title = '';
  @Output() buttonClick = new EventEmitter<boolean>();

  onClick() {
    this.buttonClick.emit(true);
  }
}
