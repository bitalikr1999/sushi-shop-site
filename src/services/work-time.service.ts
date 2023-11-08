class WorkTimeService {
  public getStartWork() {
    return 1000;
  }

  public getEndWork() {
    return 2100;
  }

  public getRangeToOrder() {
    const min = this.convertNumberToTime(this.getMinRangeToOrder());
  }

  public getMinRangeToOrder() {
    const nowTime = this.combineTimeToNumber(new Date());
    if (this.getStartWork() > nowTime) return this.getStartWork() + 30;

    return nowTime + 30;
  }

  public getMaxRangeToOrder() {
    return this.getEndWork();
  }

  public combineTimeToNumber(date: Date): number {
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      throw new Error("Time not valid");
    }

    const combinedNumber: number = hours * 100 + minutes;
    return combinedNumber;
  }

  public convertNumberToTime(timeNumber: number): Date | string {
    const timeStr: string = timeNumber.toString().padStart(4, "0"); // Забезпечуємо чотирицифровий формат

    const hours: number = parseInt(timeStr.substring(0, 2));
    const minutes: number = parseInt(timeStr.substring(2, 4));

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return "Некоректний формат часу";
    }

    const date: Date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
  }
}

export const workTimeService = new WorkTimeService();
