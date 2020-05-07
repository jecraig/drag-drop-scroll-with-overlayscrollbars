import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
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
  @ViewChild("basicDropList") basicDropList: CdkDropList;
  @ViewChild("basicScrollParent") basicScrollParent: ElementRef<HTMLElement>;

  @ViewChild("overlayscrollbarDropList") overlayscrollbarDropList: CdkDropList;
  @ViewChild(OverlayScrollbarsComponent)
  overlayscrollbarScroller: OverlayScrollbarsComponent;

  overlayscrollbarsOptions = {
    overflowBehavior: {
      y: "scroll",
      x: "hidden",
    },
    scrollbars: {
      autoHide: "leave",
      autoHideDelay: 500,
    },
  };

  basicItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  overlayscrollbarItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  ngAfterViewInit() {
    this.setBasicParentScroll();
    this.setOverlayscrollbarsParentScroll();
  }

  setOverlayscrollbarsParentScroll() {
    this.overlayscrollbarDropList._dropListRef.withScrollableParents([
      this.overlayscrollbarScroller
        .osTarget()
        .querySelector<HTMLElement>(".os-viewport"),
    ]);
  }

  setBasicParentScroll() {
    this.basicDropList._dropListRef.withScrollableParents([
      this.basicScrollParent.nativeElement,
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
