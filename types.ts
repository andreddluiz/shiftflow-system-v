
export enum ShiftStatus {
  SCHEDULED = 'SCHEDULED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  weeklyHours: number;
}

export interface Shift {
  id: string;
  employeeId: string;
  startTime: string;
  endTime: string;
  status: ShiftStatus;
  department: string;
}

export interface AIInsight {
  title: string;
  description: string;
  recommendation: string;
  impact: 'High' | 'Medium' | 'Low';
}
