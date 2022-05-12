import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Digimon} from "../../models/digimon/digimon";
import {DigimonService} from "../../services/digimon.service";

@Component({
  selector: 'app-digimon-level',
  templateUrl: './digimon-level.component.html',
  styleUrls: ['./digimon-level.component.scss']
})
export class DigimonLevelComponent implements OnInit {

  digimons: Array<Digimon> = [];

  constructor(
    private httpDigimon: DigimonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.httpDigimon.getDigimonsByLevel(params.level).subscribe((jsonDigimon) => {
        this.digimons = jsonDigimon;
      })
    });
  }

}
