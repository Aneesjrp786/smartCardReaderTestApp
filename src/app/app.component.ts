import { Component } from '@angular/core';
import {SmartCardReader} from "../../../smartcardreader";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  async startConnection() {
    await SmartCardReader.connect();
  }

  async disconnect() {
    await SmartCardReader.disconnect();
  }
}
