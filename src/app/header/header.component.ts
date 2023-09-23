import { SharedService } from '../shared/shared.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteName : string;
  isScrolled : boolean;
  colorInverted : boolean;

  @Input() inverted ?: boolean;

  constructor(private SharedService: SharedService){
    this.siteName = SharedService.siteName;
    this.isScrolled = false;
    this.colorInverted = false;
  }

  ngOnInit() : void {
    if(this.inverted == true){
      this.colorInverted = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    if(window.scrollY > 100){
      this.isScrolled = true;
      this.colorInverted = true;
    } else {
      this.isScrolled = false;
      this.colorInverted = false;
    }
  }
}
