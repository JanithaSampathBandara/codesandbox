import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "button.component.html"
})
export class ButtonComponent implements OnInit {
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}

  emitButton() {
    this.clickEvent.emit();
  }
}
