import { IScheduleShift } from "@/typing/interfaces";
import moment from "moment";

class WorkTimeService {
  public getStartWork() {
    return 1100;
  }

  public getEndWork() {
    return 2100;
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

  public convertNumberToTime(timeNumber: number): Date {
    const timeStr: string = timeNumber.toString().padStart(4, "0"); // Забезпечуємо чотирицифровий формат

    const hours: number = parseInt(timeStr.substring(0, 2));
    const minutes: number = parseInt(timeStr.substring(2, 4));

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      throw new Error("Некоректний формат часу");
    }

    const date: Date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
  }

  public getTimeString(timeNumber: number): string {
    try {
      const date = this.convertNumberToTime(timeNumber);
      return moment(date).format("HH:MM");
    } catch (e) {
      return "";
    }
  }

  public getCurrentStateMessage(shift: IScheduleShift | undefined) {
    if (!shift) return "";

    if (shift?.isClosed)
      return "Заклад не приймає сьогодні замовлень, вибачте за незручності.";

    const nowTime = workTimeService.combineTimeToNumber(new Date());

    if (nowTime < shift?.start)
      return `Заклад відчинеться о ${workTimeService.getTimeString(
        shift.start
      )}`;

    if (nowTime > shift.end)
      return "Вибачте за незручності але ми вже зачинені і не приймаємо замовлень сьогодні. Повертайтесь завтра";
  }
}

export const workTimeService = new WorkTimeService();
