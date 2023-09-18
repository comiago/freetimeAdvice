import { SharedService } from '../shared/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  siteName : string;

  constructor(private SharedService: SharedService){
    this.siteName = SharedService.siteName;
  }
}
