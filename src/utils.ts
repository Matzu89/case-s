import names from "./names.json";
import {
  Activity,
  Appointment,
  AppointmentRoute,
  KnowledgeLevel,
} from "./shared";

import { v4 as uuidv4 } from "uuid";

export const knowledgeLevelToString = (level: KnowledgeLevel): string => {
  switch (level) {
    case KnowledgeLevel.HIGH:
      return "Hoog";

    case KnowledgeLevel.MEDIUM:
      return "Middel";

    case KnowledgeLevel.LOW:
      return "Laag";

    default:
      return "Unknown Knowledge Level";
  }
};

export const createAppointmentList = (
  level: KnowledgeLevel,
  size: number
): Appointment[] => {
  const emptyList = Array(size).fill(0);

  const list = emptyList.map((_x) => {
    return createAppointment(level);
  });

  return list;
};

export const createAppointmentRouteList = (): AppointmentRoute[] => {
  return [
    createAppointmentRoute(KnowledgeLevel.HIGH, "Ochtend"),
    createAppointmentRoute(KnowledgeLevel.LOW, "Middag"),
    createAppointmentRoute(KnowledgeLevel.MEDIUM, "Avond"),
  ];
};

const createAppointmentRoute = (
  knowledgeLevel: KnowledgeLevel,
  name: string
): AppointmentRoute => {
  return {
    id: uuidv4(),
    name,
    appointments: createAppointmentList(knowledgeLevel, 1),
    knowledgeLevel,
  };
};

const createAppointment = (knowledgeLevel: KnowledgeLevel): Appointment => {
  return {
    id: uuidv4(),
    clientName: getFirstName(),
    duration: 100,
    activity: Activity.VP,
    knowledgeLevel,
  };
};

const getFirstName = (): string => {
  const random = Math.floor(Math.random() * names.length);

  return names[random];
};

export const getTotalDuration = (appointments: Appointment[]): number => {
  return appointments
    .flatMap((x) => x.duration)
    .reduce((a, b) => {
      return a + b;
    }, 0);
};
