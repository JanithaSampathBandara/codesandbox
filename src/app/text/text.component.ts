import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-text",
  templateUrl: "text.component.html"
})
export class TextComponent implements OnInit {
  @Output() sendText: EventEmitter<string> = new EventEmitter<string>();
  textInput = "";
  ngOnInit(): void {}

  emitText() {
    this.sendText.emit(this.textInput);
  }
}
