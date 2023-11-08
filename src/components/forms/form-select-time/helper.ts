export class TimeRoundedArrayGenerator {
  private startHour: number;
  private startMinute: number;
  private endHour: number;
  private endMinute: number;
  private readonly ROUNDING_TIME: number = 15;
  private readonly FULL_HOUR: number = 60;

  constructor(
    private startTime: number,
    private endTime: number,
    private timeStep: number
  ) {
    [this.startHour, this.startMinute] = this.extractHourAndMinute(
      this.startTime
    );
    [this.endHour, this.endMinute] = this.extractHourAndMinute(this.endTime);
  }

  private extractHourAndMinute(time: number): [number, number] {
    const hour = Math.floor(time / 100);
    const minute = time % 100;
    return [hour, minute];
  }

  private generateRoundedTimeArray(): string[] {
    const result: string[] = [];
    let [currentHour, currentMinute] = [this.startHour, this.startMinute];

    while (
      currentHour < this.endHour ||
      (currentHour === this.endHour && currentMinute <= this.endMinute)
    ) {
      const currentTime = `${currentHour
        .toString()
        .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
      result.push(currentTime);

      if (
        currentHour === this.startHour &&
        currentMinute === this.startMinute
      ) {
        currentMinute += this.timeStep;
      } else {
        currentMinute += this.ROUNDING_TIME;
      }

      if (currentMinute >= this.FULL_HOUR) {
        currentHour++;
        currentMinute = 0;
      }
    }

    return result;
  }

  public generateRoundedTime(): string[] {
    return this.generateRoundedTimeArray();
  }
}
