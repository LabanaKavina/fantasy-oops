import { Shot } from "./shot";

export class ShotMapper {
  static toDomain({
    name,
    point,
    runs,
  }: {
    name: string;
    point: number;
    runs: number;
  }): Shot {
    return new Shot(name, point, runs);
  }
}
