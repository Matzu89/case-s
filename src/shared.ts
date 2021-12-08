export enum Activity {
    PV = "PV",
    VP = "VP"
}

export enum KnowledgeLevel {
    "LOW" = 1,
    "MEDIUM" = 2,    
    "HIGH" = 3    
}

export interface Appointment {
    id: string
    clientName: string
    duration: number
    activity: Activity
    knowledgeLevel: KnowledgeLevel
}

export interface AppointmentRoute {
    id: string,
    name: string,
    knowledgeLevel: KnowledgeLevel,
    appointments: Appointment[]
}