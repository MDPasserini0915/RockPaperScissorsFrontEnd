import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATHS } from '../config/api-paths.constants';
import { PlayerRoundInfo } from '../models/player-round-info';
import { RoundHistory } from '../models/round-history';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RpslsService {

  constructor(private httpService: HttpService) { }

  public getRoundResult<RoundResult>(body: PlayerRoundInfo): Observable<RoundResult> {
    return this.httpService.post<RoundResult>(API_PATHS.RPSLS.BASE + API_PATHS.RPSLS.PLAY, body);
  }

  public getRoundById<RoundHistory>(id: number): Observable<RoundHistory> {
    return this.httpService.get<RoundHistory>(API_PATHS.RPSLS.BASE + id);
  }

  public updateRound<RoundHistory>(body: RoundHistory, id: number): Observable<RoundHistory> {
    return this.httpService.put<RoundHistory>(API_PATHS.RPSLS.BASE + id, body);
  }

  public createItem<RoundHistory>(body: RoundHistory): Observable<RoundHistory> {
    return this.httpService.post<RoundHistory>(API_PATHS.RPSLS.BASE, body);
  }

  public deleteRound<RoundHistory>(id:number): Observable<RoundHistory> {
    return this.httpService.delele<RoundHistory>(API_PATHS.RPSLS.BASE + id);
  }

  public getRoundHistory(): Observable<RoundHistory[]> {
    return this.httpService.get<RoundHistory[]>(API_PATHS.RPSLS.BASE);
  }

  public getAboutPic(): Observable<string> {
    return this.httpService.get<string>(API_PATHS.RPSLS.BASE + API_PATHS.RPSLS.PICTURE);
  }
}
