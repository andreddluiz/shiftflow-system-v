
import { Employee, Shift, ShiftStatus } from './types';

export const MOCK_EMPLOYEES: Employee[] = [
  { id: '1', name: 'Alex Rivera', role: 'Team Lead', email: 'alex@shiftflow.io', avatar: 'https://picsum.photos/seed/alex/100/100', weeklyHours: 38 },
  { id: '2', name: 'Sarah Chen', role: 'Senior Analyst', email: 'sarah@shiftflow.io', avatar: 'https://picsum.photos/seed/sarah/100/100', weeklyHours: 42 },
  { id: '3', name: 'Marcus Johnson', role: 'Developer', email: 'marcus@shiftflow.io', avatar: 'https://picsum.photos/seed/marcus/100/100', weeklyHours: 35 },
  { id: '4', name: 'Elena Rodriguez', role: 'Operations', email: 'elena@shiftflow.io', avatar: 'https://picsum.photos/seed/elena/100/100', weeklyHours: 40 },
  { id: '5', name: 'Jordan Smith', role: 'Security', email: 'jordan@shiftflow.io', avatar: 'https://picsum.photos/seed/jordan/100/100', weeklyHours: 20 },
];

export const MOCK_SHIFTS: Shift[] = [
  { id: 's1', employeeId: '1', startTime: '2023-10-23T08:00:00Z', endTime: '2023-10-23T16:00:00Z', status: ShiftStatus.COMPLETED, department: 'Engineering' },
  { id: 's2', employeeId: '2', startTime: '2023-10-24T09:00:00Z', endTime: '2023-10-24T17:00:00Z', status: ShiftStatus.ACTIVE, department: 'Strategy' },
  { id: 's3', employeeId: '4', startTime: '2023-10-25T10:00:00Z', endTime: '2023-10-25T18:00:00Z', status: ShiftStatus.SCHEDULED, department: 'Logistics' },
];

export const DEPARTMENTS = ['Engineering', 'Strategy', 'Logistics', 'Security', 'Customer Support'];
