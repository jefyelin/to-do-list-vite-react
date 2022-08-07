export type Task = {
  id: string
  description: string
  status: TASK_STATUS
}

export enum TASK_STATUS {
  OPEN = 'OPEN',
  CONCLUDED = 'CONCLUDED',
}
