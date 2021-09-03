import {setDate} from 'date-fns';
import {SchedulerEvent} from '../../@application/agenda/@shared/models/scheduler-event.model';
import { Agenda } from '../models/agenda.model';
import { Event } from '../models/event.model';

const eventBase: Event = new Event();

export let scheduleData: SchedulerEvent[] = [
  {
    'Id': 1,
    'Subject': '',
    'StartTime': '2021-08-25T17:51:56.000Z',
    'EndTime': '2021-08-25T19:51:56.000Z',
    'Description': 'test',
    'CategoryColor': '#1aaa55',
    'Meta': {
      'name': 'test',
      'dayOff': false,
      'privateEvent': false,
      'statusDisplayed': 'BUSY',
      'eventType': 'APPOINTMENT',
      'startDate': 'Wed Aug 25 2021 19:51:56 GMT+0200 (Central European Summer Time)',
      'endDate': 'Wed Aug 25 2021 21:51:56 GMT+0200 (Central European Summer Time)',
      'meetingUrl': null,
      'report': null,
      'agenda': {
        'id': 1,
        'name': 'test'
      } as Agenda,
      'comments': [],
      'id': 1,
      'sharedAgendas': [],
    }
  }
];
