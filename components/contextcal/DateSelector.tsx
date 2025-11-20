import React from 'react';
import { Calendar } from 'lucide-react';

interface DateSelectorProps {
  year: number;
  month: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ year, month, onYearChange, onMonthChange }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 2 + i);

  return (
    <div className="flex items-center gap-3 bg-slate-800 p-1 rounded-lg">
      <div className="flex items-center gap-2 px-3 py-2">
        <Calendar size={18} className="text-slate-400" />
      </div>

      <select
        value={month}
        onChange={(e) => onMonthChange(parseInt(e.target.value))}
        className="px-3 py-2 bg-slate-700 text-white rounded border-none outline-none cursor-pointer hover:bg-slate-600 transition"
      >
        {months.map((monthName, idx) => (
          <option key={idx} value={idx}>
            {monthName}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="px-3 py-2 bg-slate-700 text-white rounded border-none outline-none cursor-pointer hover:bg-slate-600 transition"
      >
        {years.map((yr) => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
