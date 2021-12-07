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
    clientName: string
    duration: number
    activity: Activity
    knowledgeLevel: KnowledgeLevel
}