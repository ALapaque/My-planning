export interface Event {
  idEvent: number;
  title: string;
  isADayOff: boolean;
  isPrivate: boolean;
  statusDisplayed: string;
  eventType: string;
  startDate: string | Date;
  endDate: string | Date;
  meetingUrl: string;
  report: string;
}
