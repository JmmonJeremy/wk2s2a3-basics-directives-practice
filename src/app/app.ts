import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  display = true;
  clickCount = 0;
  clickLog = [];

  onDisplayToggle() {
    this.clickCount += 1;
    this.clickLog.push(this.clickCount);
    if (this.display === false) {
      this.display = true;
    } else {
      this.display = false;
    };
    return this.display;
  }

  decideColor(clicks) {
    if (clicks > 4) {
      return 'blue';
    } else {
      return 'none';
    }
  }

}
