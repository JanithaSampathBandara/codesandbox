import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TextComponent } from "./text/text.component";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button.component";
import { LabelComponent } from "./label/label.component";

@NgModule({
  declarations: [AppComponent, TextComponent, ButtonComponent, LabelComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
