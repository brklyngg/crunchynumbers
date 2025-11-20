import React, { useMemo } from 'react';
import { startOfMonth, startOfWeek, eachDayOfInterval, getDate, isSameMonth, format, addDays } from 'date-fns';
import { DayCellData, CalendarData, LayoutMode } from '@/types/contextcal';
import { clsx } from 'clsx';

interface CalendarSegmentProps {
  data: CalendarData;
  mode: LayoutMode;
  year: number;
  month: number;
  segmentRow?: number;
  segmentCol?: number;
  isFirstRow?: boolean;
  isLastRow?: boolean;
  isFirstCol?: boolean;
  isLastCol?: boolean;
  className?: string;
}

const CalendarSegment: React.FC<CalendarSegmentProps> = ({
  data,
  mode,
  year,
  month,
  segmentRow = 0,
  segmentCol = 0,
  isFirstRow = false,
  isLastRow = false,
  isFirstCol = false,
  isLastCol = false,
  className
}) => {
  const fullMatrix = useMemo(() => {
    const start = startOfMonth(new Date(year, month));
    const matrixStart = startOfWeek(start);
    const matrixEnd = addDays(matrixStart, 34);

    const allDays = eachDayOfInterval({ start: matrixStart, end: matrixEnd }).map((date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      const eventObj = data.events.find(e => e.date === dateStr);

      return {
        date,
        isCurrentMonth: isSameMonth(date, start),
        event: eventObj?.event
      } as DayCellData;
    });

    const weeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeks.push(allDays.slice(i, i + 7));
    }
    return weeks;
  }, [data, year, month]);

  let visibleWeekIndices: number[] = [];
  let showHeader = false;

  if (mode === LayoutMode.POSTER_3X3 || mode === LayoutMode.ASSEMBLY_PREVIEW) {
    if (segmentRow === 0) {
      visibleWeekIndices = [0];
      showHeader = true;
    } else if (segmentRow === 1) {
      visibleWeekIndices = [1, 2];
    } else {
      visibleWeekIndices = [3, 4];
    }
  }

  let visibleDayIndices: number[] = [];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (mode === LayoutMode.POSTER_3X3 || mode === LayoutMode.ASSEMBLY_PREVIEW) {
    if (segmentCol === 0) visibleDayIndices = [0, 1];
    else if (segmentCol === 1) visibleDayIndices = [2, 3, 4];
    else visibleDayIndices = [5, 6];
  }

  const renderHeader = () => {
    if (!showHeader) return null;

    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthName = monthNames[month];
    const monthParts = [
      monthName.substring(0, 3),
      monthName.substring(3)
    ];

    let text = "";
    if (segmentCol === 0) text = monthParts[0];
    else if (segmentCol === 1) text = monthParts[1];
    else text = year.toString();

    return (
      <div className="flex-1 flex flex-col border-b-4 border-black bg-white text-black">
         <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
            <h1 className="font-display font-bold text-[8rem] leading-none uppercase tracking-tighter text-black z-0">
              {text}
            </h1>

             {segmentCol === 1 && data.theme && (
                 <div className="absolute top-[55%] left-0 right-0 text-center z-10 flex justify-center">
                    <div className="bg-white px-6 py-2 border-y-2 border-black transform -translate-y-1/2">
                      <p className="text-xl font-bold tracking-[0.2em] uppercase text-black whitespace-nowrap">
                        {data.theme}
                      </p>
                    </div>
                 </div>
             )}
         </div>

         <div className="flex w-full bg-white text-black border-t-4 border-black">
             {visibleDayIndices.map((dayIdx, i) => (
               <div
                key={`header-${dayIdx}`}
                className={clsx(
                  "flex-1 py-2 text-center font-bold uppercase text-xl",
                  i !== visibleDayIndices.length - 1 && "border-r-2 border-black"
                )}
               >
                 {weekDays[dayIdx]}
               </div>
             ))}
         </div>
      </div>
    );
  };

  return (
    <div className={clsx(
      "flex flex-col h-full w-full bg-white border-black",
      isFirstRow ? "border-t-[4px]" : "border-t-[1px]",
      isLastRow ? "border-b-[4px]" : "border-b-[1px]",
      isFirstCol ? "border-l-[4px]" : "border-l-[1px]",
      isLastCol ? "border-r-[4px]" : "border-r-[1px]",
      className
    )}>

      {showHeader && (
        <div className="flex-1 flex w-full relative overflow-hidden">
          {renderHeader()}
        </div>
      )}

      {visibleWeekIndices.map((weekIdx, idx) => {
        const week = fullMatrix[weekIdx];
        const isFirstGridRow = idx === 0 && !showHeader;

        return (
          <div key={`week-${weekIdx}`} className="flex-1 flex flex-col relative">
            <div className={clsx("flex-1 flex", !isFirstGridRow && "border-t-2 border-black")}>
               {visibleDayIndices.map((dayIdx, i) => {
                 const cell = week[dayIdx];
                 return (
                   <div
                    key={cell.date.toISOString()}
                    className={clsx(
                      "flex-1 p-3 relative flex flex-col",
                      i !== visibleDayIndices.length - 1 && "border-r-2 border-black"
                    )}
                   >
                      <span className={clsx(
                        "text-4xl font-bold font-display mb-2",
                         cell.isCurrentMonth ? "text-black" : "text-gray-300"
                      )}>
                        {getDate(cell.date)}
                      </span>

                      {cell.event && (
                        <div className="mt-auto">
                          <p className="text-xl font-bold leading-tight text-black">
                            {cell.event}
                          </p>
                        </div>
                      )}
                   </div>
                 );
               })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarSegment;
