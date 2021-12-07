import names from './names.json';
import { Activity, Appointment, KnowledgeLevel } from "./shared";

import { v4 as uuidv4 } from "uuid";

export const knowledgeLevelToString = (level: KnowledgeLevel): string => {
    switch (level) {
      case KnowledgeLevel.HIGH:
        return "High";
  
      case KnowledgeLevel.MEDIUM:
        return "Medium";
  
      case KnowledgeLevel.LOW:
        return "Low";
  
      default:
        return "Unknown Knowledge Level";
    }
  };


export const createAppointmentsList = (level: KnowledgeLevel, size: number) : Appointment[] => {
    const emptyList = Array(size).fill(0);

    const list = emptyList.map(_x => {
      return createAppointment(level);
    });

    return list;
}

const createAppointment = (knowledgeLevel: KnowledgeLevel) : Appointment => {
  return {
    id: uuidv4(),
    clientName: getFirstName(),
    duration: 100,
    activity: Activity.VP,
    knowledgeLevel
  }
}

const getFirstName = () : string => {
  const random = Math.floor(Math.random() * names.length);

  return names[random];
}