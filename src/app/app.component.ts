import { Component, ViewChild, AfterViewInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDropList,
} from "@angular/cdk/drag-drop";
import { OverlayScrollbarsComponent } from "overlayscrollbars-ngx";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("overlayscrollbarDropList") overlayscrollbarDropList: CdkDropList;
  @ViewChild(OverlayScrollbarsComponent)
  overlayscrollbarScroller: OverlayScrollbarsComponent;

  public overlayscrollbarsOptions = {
    overflowBehavior: {
      y: "scroll",
      x: "hidden",
    },
    scrollbars: {
      autoHide: "leave",
      autoHideDelay: 500,
    },
  };

  overlayscrollbarItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  ngAfterViewInit() {
    this.setOverlayscrollbarsParentScroll();
  }

  setOverlayscrollbarsParentScroll() {
    this.overlayscrollbarDropList._dropListRef.withScrollableParents([
      this.overlayscrollbarScroller
        .osTarget()
        .querySelector<HTMLElement>(".os-viewport"),
    ]);
  }

  onDrop(event: CdkDragDrop<any>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
