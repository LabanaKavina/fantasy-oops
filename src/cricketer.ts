import { Player } from "./player";

export class Cricketer extends Player {
  private runs: number = 0;
  private balls: number = 0;
  private isCaptain: boolean = false;
  private isViceCaptain: boolean = false;
  private isBat: boolean = false;
  private over: number = 0;
  private wicket: number = 0;

  constructor(id: number, name: string, role: string, credit: number) {
    super(id, name, role, credit);
  }

  addWickets(): void {
    this.wicket += 1;
  }
  getWicket(): number {
    return this.wicket;
  }
  setIsCaptain(): void {
    this.isCaptain = true;
  }
  setIsViceCaptain(): void {
    this.isViceCaptain = true;
  }
  getIsCaptain(): boolean {
    return this.isCaptain;
  }
  getIsViceCaptain(): boolean {
    return this.isViceCaptain;
  }

  addRuns(runs: number): void {
    this.runs += runs;
  }
  getRuns(): number {
    return this.runs;
  }

  addBalls(): void {
    this.balls += 1;
  }
  getBalls(): number {
    return this.balls;
  }
  setIsBat(): void {
    this.isBat = true;
  }

  addOver(): void {
    this.over += 1;
  }
  getIsBat(): boolean {
    return this.isBat;
  }
  getOver(): number {
    return this.over;
  }
}
