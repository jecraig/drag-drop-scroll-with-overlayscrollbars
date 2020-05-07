import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { OverlayscrollbarsModule } from "overlayscrollbars-ngx";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    DragDropModule,
    BrowserAnimationsModule,
    OverlayscrollbarsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
