export interface CalendarEvent {
  date: string; // ISO Date String YYYY-MM-DD
  event: string;
}

export interface CalendarData {
  theme: string;
  events: CalendarEvent[];
}

export interface DayCellData {
  date: Date;
  isCurrentMonth: boolean;
  event?: string;
}

export enum LayoutMode {
  POSTER_3X3 = 'POSTER_3X3', // 9 Pages (Print Mode)
  ASSEMBLY_PREVIEW = 'ASSEMBLY_PREVIEW', // 9 Pages stitched together (View Mode)
}
