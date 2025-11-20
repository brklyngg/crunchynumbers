'use client';

import React, { useState, useMemo } from 'react';
import PrintManager from '@/components/contextcal/PrintManager';
import DateSelector from '@/components/contextcal/DateSelector';
import { CalendarData, LayoutMode } from '@/types/contextcal';
import { Printer, Grid, Layers } from 'lucide-react';
import { format } from 'date-fns';
import holidaysData from '@/data/holidays.json';

export default function ContextCal() {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [mode, setMode] = useState<LayoutMode>(LayoutMode.POSTER_3X3);

  // Generate calendar data with holidays
  const calendarData: CalendarData = useMemo(() => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const theme = `${monthNames[month]} ${year}`;

    // Get holidays for the selected year
    const yearHolidays = (holidaysData as Record<string, Record<string, string>>)[year.toString()] || {};

    // Convert holidays to calendar events
    const events = Object.entries(yearHolidays).map(([dateKey, eventName]) => ({
      date: `${year}-${dateKey}`,
      event: eventName
    }));

    return {
      theme,
      events
    };
  }, [year, month]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="no-print bg-slate-900 text-white p-4 sticky top-0 z-[100] shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-bold text-xl border-2 border-white">
              {format(new Date(year, month), 'MMM').charAt(0)}
            </div>
            <div>
              <h1 className="font-bold text-xl leading-none">ContextCal</h1>
              <p className="text-xs text-slate-400">Printable Wall Calendar</p>
            </div>
          </div>

          <DateSelector
            year={year}
            month={month}
            onYearChange={setYear}
            onMonthChange={setMonth}
          />

          <div className="flex flex-wrap items-center gap-2 bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setMode(LayoutMode.POSTER_3X3)}
              className={`px-3 py-2 rounded flex items-center gap-2 text-sm transition ${mode === LayoutMode.POSTER_3X3 ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              <Grid size={16} />
              <span>View Sheets</span>
            </button>
            <button
              onClick={() => setMode(LayoutMode.ASSEMBLY_PREVIEW)}
              className={`px-3 py-2 rounded flex items-center gap-2 text-sm transition ${mode === LayoutMode.ASSEMBLY_PREVIEW ? 'bg-white text-slate-900 shadow' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              <Layers size={16} />
              <span>Preview Assembly</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded text-sm font-bold shadow-lg transition flex items-center gap-2"
          >
            <Printer size={18} />
            <span>PRINT CALENDAR</span>
          </button>
        </div>
      </header>

      <main className="flex-grow bg-gray-100 pt-8 print:pt-0 print:bg-white">
        <PrintManager data={calendarData} mode={mode} year={year} month={month} />
      </main>
    </div>
  );
}
