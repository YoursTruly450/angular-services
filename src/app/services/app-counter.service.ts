import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {}

  increase(): void {
    this.counter++;
    this.logService.log(`Increase counter... ${this.counter}`);
  }

  decrease(): void {
    this.counter--;
    this.logService.log(`Decrease counter... ${this.counter}`);
  }
}