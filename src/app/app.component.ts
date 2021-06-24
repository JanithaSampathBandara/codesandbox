import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  input = "";
  finalOutput: string;

  inputText(data: string) {
    this.input = data;
  }

  bttonClicked() {
    this.finalOutput = this.input;
  }
}
