export class Player {
  private id: number;
  private name: string;
  private role: string;
  private credit: number;
  private fantasyPoints: number = 0;

  constructor(id: number, name: string, role: string, credit: number) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.credit = credit;
  }

  getName(): string {
    return this.name;
  }
  getPlayer(): Player {
    return this;
  }
  getId(): number {
    return this.id;
  }
  getCredit(): number {
    return this.credit;
  }
  getRole(): string {
    return this.role;
  }
  addFantasyPoints(points: number): void {
    this.fantasyPoints += points;
  }
  getFantasyPoints(): number {
    return this.fantasyPoints;
  }
}
