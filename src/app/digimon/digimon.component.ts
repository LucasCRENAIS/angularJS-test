import { Component, OnInit } from '@angular/core';
import {DigimonService} from "../../services/digimon.service";
import {Digimon} from "../../models/digimon/digimon";

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.scss']
})
export class DigimonComponent implements OnInit {

  apiResult: Array<Digimon>|undefined;

  constructor(private digimonService : DigimonService) { }

  ngOnInit(): void {
    this.digimonService.getDigimons().subscribe((results) => {
      console.log(results)
      this.apiResult = results;
    });
  }
}
