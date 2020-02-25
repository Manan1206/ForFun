import { Component, OnInit } from '@angular/core';
import { LolService } from '../../services/lol.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public freeChamps: any;
  constructor(private lolService: LolService) { }

  ngOnInit() {
    this.lolService.getFreeRotationChamps().subscribe(data => {
      console.log(data);
      this.freeChamps = data;
    },
    error => {
      console.log(error.message)
    })    
  }

}
