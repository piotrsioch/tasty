import {Component, Input, Output} from '@angular/core';

interface ImageItem {
  name: string;
  photoUrl?: string;
  postId: number;
}

@Component({
  selector: 'tasty-img-list-item',
  templateUrl: './img-list-item.component.html',
  styleUrls: ['./img-list-item.component.scss']
})
export class ImgListItemComponent {

  @Input() item!: ImageItem;

  constructor() {
    this.item = {
      name: 'example',
      photoUrl: "assets/kanapeczki.jpg",
      postId: 1
    }
  }

  @Output() emitPhotoId() {
    return this.item.postId;
  }
}
