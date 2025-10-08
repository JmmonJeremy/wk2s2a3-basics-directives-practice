import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  userName = 'JohnDoe';
  buttonStatus = false;

  getButtonStatus() {
    if (this.userName === '') {
      this.buttonStatus = false;
    } else {
      this.buttonStatus = true;
    };
    return this.buttonStatus
  }

  onResetUser() {
    this.userName = '';
  }
}
