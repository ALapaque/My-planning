import {setDate} from 'date-fns';
import {SchedulerEvent} from '../../@application/agenda/@shared/models/scheduler-event.model';
import {Event} from '../../@application/@shared/models/Event.model';

const eventBase: Event = new Event();

export let scheduleData: SchedulerEvent[] = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), 3),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), 3),
    CategoryColor: '#1aaa55',
    Meta: eventBase,
  }, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#357cd2',
    Meta: eventBase,
  }, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#7fa900',
    Meta: eventBase,
  }, {
    Id: 4,
    Subject: 'Meteor Showers in 2018',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#ea7a57',
    Meta: eventBase,
  }, {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#00bdae',
    Meta: eventBase,
  }, {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#f57f17',
    Meta: eventBase,
  }, {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#1aaa55',
    Meta: eventBase,
  }, {
    Id: 8,
    Subject: 'Life on Mars',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#357cd2',
    Meta: eventBase,
  }, {
    Id: 9,
    Subject: 'Alien Civilization',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#7fa900',
    Meta: eventBase,
  }, {
    Id: 10,
    Subject: 'Wildlife Galleries',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#ea7a57',
    Meta: eventBase,
  }, {
    Id: 11,
    Subject: 'Best Photography 2018',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#00bdae',
    Meta: eventBase,
  }, {
    Id: 12,
    Subject: 'Smarter Puppies',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#f57f17',
    Meta: eventBase,
  }, {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#1aaa55',
    Meta: eventBase,
  }, {
    Id: 14,
    Subject: 'Aliens vs Humans',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#357cd2',
    Meta: eventBase,
  }, {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#7fa900',
    Meta: eventBase,
  }, {
    Id: 16,
    Subject: 'Sky Gazers',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#ea7a57',
    Meta: eventBase,
  }, {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#00bdae'
  }, {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#f57f17',
    Meta: eventBase,
  }, {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#7fa900',
    Meta: eventBase,
  }, {
    Id: 20,
    Subject: 'Sky Gazers',
    StartTime: setDate(new Date().setHours(Math.floor(Math.random() * 12) + 1, 0, 0), Math.floor(Math.random() * 8) + 2),
    EndTime: setDate(new Date().setHours(Math.floor(Math.random() * 24) + 13, 0, 0), Math.floor(Math.random() * 8) + 2),
    CategoryColor: '#ea7a57',
    Meta: eventBase,
  }
];
