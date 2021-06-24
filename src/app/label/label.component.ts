import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-label",
  templateUrl: "label.component.html"
})
export class LabelComponent implements OnInit {
  @Input() output: string;

  ngOnInit(): void {}
}
