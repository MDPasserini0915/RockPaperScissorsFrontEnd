import { Component, OnInit } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { GameOptions } from 'src/app/models/game-options';
import { PlayerRoundInfo } from 'src/app/models/player-round-info';
import { RoundHistory } from 'src/app/models/round-history';
import { RoundResult } from 'src/app/models/round-result';
import { RpslsService } from 'src/app/services/rpsls.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  public playerName: string;
  public playerChoice: string;
  public computerChoice: string;
  public winner: string;
  public winnerChoice: string;
  public loserChoice: string;
  public shouldDisplay: boolean;

  constructor(private rpslsService: RpslsService) {
    this.playerName = "";
    this.winner = "";
    this.winnerChoice = "";
    this.loserChoice = "";
    this.playerChoice = "";
    this.computerChoice = "";
    this.shouldDisplay = false;
    console.log("Start of calls");
    this.rpslsService.getRoundById(1).subscribe();
    console.log("Middle of calls");
    this.rpslsService.getRoundById(1).subscribe((round: RoundHistory) => {
      console.log(round);
    });
    console.log("Done with calls");
  }

  ngOnInit(): void {
    // if (win == "Computer") {
    //   wChoice = computer;
    //   lChoice = player;
    //   this.winner = win;
    //   this.winnerChoice = wChoice;
    //   this.loserChoice = lChoice;
    //   this.playerChoice = player;
    //   this.computerChoice = computer;
    // } else if (win == "Tie") {
    //   wChoice = player;
    //   lChoice = computer;
    //   this.winner = win;
    //   this.winnerChoice = wChoice;
    //   this.loserChoice = lChoice;
    //   this.playerChoice = player;
    //   this.computerChoice = computer;
    // } else {
    //   wChoice = player;
    //   lChoice = computer;
    //   this.winner = win;
    //   this.winnerChoice = wChoice;
    //   this.loserChoice = lChoice;
    //   this.playerChoice = player;
    //   this.computerChoice = computer;
    // }
  }

  public updateName(name:string): void {
    this.playerName = name;
  }

  public updatePlayerChoice(pChoice:string): void {
    this.playerChoice = pChoice;
    let playerRoundInfo: PlayerRoundInfo = {
      name: this.playerName,
      playerChoice: GameOptions[this.playerChoice]
    };
    console.log("Line 77")
    this.rpslsService.getRoundResult(playerRoundInfo).subscribe((roundResult: RoundResult) => {
      this.updateComputerChoice(GameOptions[roundResult.computerChoice]);
      if (roundResult.winner != "Computer")
      {
        this.updateOutcome(roundResult.winner, GameOptions[roundResult.playerChoice], GameOptions[roundResult.computerChoice]);
      }
      else
      {
        this.updateOutcome(roundResult.winner, GameOptions[roundResult.computerChoice], GameOptions[roundResult.playerChoice]);
      }
    });
  }

  public updateComputerChoice(cChoice:string): void {
    this.computerChoice = cChoice;
  }

  public updateOutcome(win:string, wChoice:string, lChoice:string): void {
    this.shouldDisplay = true;
    this.winner = win;
    this.winnerChoice = wChoice;
    this.loserChoice = lChoice;
  }
}
