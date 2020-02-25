import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../../app-routing.module'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public links = [];
  

  ngOnInit(){
    appRoutes.map(data => {
      if(data.path.length && data.path!='home'){
       this.links.push(data.path)
      }
    });
    console.log(this.links)
  }
}
