import { SharedService } from '../shared/shared.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  siteName : string;
  isScrolled : boolean;

  constructor(private SharedService: SharedService){
    this.siteName = SharedService.siteName;
    this.isScrolled = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    if(window.scrollY > 100){
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
