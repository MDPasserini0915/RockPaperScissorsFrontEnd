import { Component, OnInit } from '@angular/core';
import { RpslsService } from 'src/app/services/rpsls.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  public imageUrl: string;

  constructor(private rpslsService: RpslsService) { }

  ngOnInit(): void {
    this.rpslsService.getAboutPic().subscribe(url => this.imageUrl = url);
  }

}
