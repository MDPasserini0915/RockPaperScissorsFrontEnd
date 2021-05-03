import { Component, OnInit } from '@angular/core';
import { GameOptions } from 'src/app/models/game-options';
import { History } from 'src/app/models/history';
import { RoundHistory } from 'src/app/models/round-history';
import { RpslsService } from 'src/app/services/rpsls.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public history: History[] = [];

  ngOnInit():void {
    this.rpslsService.getRoundHistory().subscribe(roundHistory => {
      // this.roundHistory = roundHistory;
      roundHistory.reverse();
      roundHistory.forEach(x =>
        this.history.push(
          {
            player1Choice: GameOptions[x.player1Choice],
            player2Choice: GameOptions[x.player2Choice],
            winner: x.winner,
            timeStamp: x.timeStamp
          }
        )
      )
    });
    // this.history.reverse();
  }

  constructor(private rpslsService: RpslsService) {

  }
}
