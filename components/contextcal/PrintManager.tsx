import React, { useState, useEffect } from 'react';
import CalendarSegment from './CalendarSegment';
import { CalendarData, LayoutMode } from '@/types/contextcal';

interface PrintManagerProps {
  data: CalendarData;
  mode: LayoutMode;
  year: number;
  month: number;
}

const PrintManager: React.FC<PrintManagerProps> = ({ data, mode, year, month }) => {

  // Layout configuration
  const layout = { rows: 3, cols: 3, totalPages: 9 };

  // Generate pages array
  const pages = Array.from({ length: layout.totalPages }).map((_, i) => {
    const row = Math.floor(i / layout.cols);
    const col = i % layout.cols;
    return {
      row,
      col,
      id: i,
      isFirstRow: row === 0,
      isLastRow: row === layout.rows - 1,
      isFirstCol: col === 0,
      isLastCol: col === layout.cols - 1
    };
  });

  // State for responsive scaling in Preview Mode
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    if (mode === LayoutMode.ASSEMBLY_PREVIEW) {
      const handleResize = () => {
        const availableWidth = window.innerWidth - 64;
        const neededWidth = 2448; // 816px * 3
        const newScale = Math.min(1, availableWidth / neededWidth);
        setScale(newScale > 0.1 ? newScale : 0.1);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [mode]);

  const renderAssemblyPreview = () => {
    const totalWidth = 2448;
    const totalHeight = 3168;
    const pageWidth = 816;  // 8.5in
    const pageHeight = 1056; // 11in
    const padding = 48; // 0.5in padding simulation

    return (
      <div className="w-full flex flex-col items-center pb-20 px-4 bg-gray-200 min-h-screen">
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm my-8 text-center max-w-xl">
           <h3 className="text-lg font-bold text-gray-900">Assembly Preview</h3>
           <p className="text-gray-600 text-sm">
             This simulates the 9 pages taped together (margins removed).
           </p>
        </div>

        <div style={{
          width: totalWidth * scale,
          height: totalHeight * scale,
          position: 'relative',
          marginBottom: '50px'
        }}>
          <div style={{
             transform: `scale(${scale})`,
             transformOrigin: 'top left',
             width: totalWidth,
             height: totalHeight,
             display: 'grid',
             gridTemplateColumns: 'repeat(3, 1fr)',
             gap: 0,
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            {pages.map((page) => (
              <div
                key={`preview-${page.id}`}
                className="bg-white relative overflow-hidden"
                style={{ width: pageWidth, height: pageHeight, padding: padding }}
              >
                <CalendarSegment
                  data={data}
                  mode={LayoutMode.ASSEMBLY_PREVIEW}
                  year={year}
                  month={month}
                  segmentRow={page.row}
                  segmentCol={page.col}
                  isFirstRow={page.isFirstRow}
                  isLastRow={page.isLastRow}
                  isFirstCol={page.isFirstCol}
                  isLastCol={page.isLastCol}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 border border-gray-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSheetView = () => {
    return (
      <div className="w-full flex flex-col items-center gap-8 pb-20">
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg max-w-2xl text-center shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Poster Assembly Instructions</h3>
          <p className="text-blue-800 mb-2">
            This calendar is split into <strong>9 separate parts</strong>.
          </p>
          <ol className="text-blue-800 text-left list-decimal list-inside space-y-1">
            <li>Print all pages single-sided on <strong>8.5x11 Letter Paper</strong>.</li>
            <li>Set printer Scale to <strong>100% (Actual Size)</strong>.</li>
            <li>Tape the sheets edge-to-edge.</li>
          </ol>
        </div>

        <div>
          {pages.map((page) => (
            <div
              key={`sheet-${page.id}`}
              className="relative bg-white shadow-2xl mb-8 mx-auto flex flex-col w-[8.5in] h-[11in] p-[0.5in]"
            >
              <CalendarSegment
                data={data}
                mode={LayoutMode.POSTER_3X3}
                year={year}
                month={month}
                segmentRow={page.row}
                segmentCol={page.col}
                isFirstRow={page.isFirstRow}
                isLastRow={page.isLastRow}
                isFirstCol={page.isFirstCol}
                isLastCol={page.isLastCol}
                className="flex-grow w-full h-full"
              />
              <div className="absolute bottom-2 right-4 text-[10px] text-gray-300 font-mono">
                Part {page.id + 1} of {pages.length} [R{page.row+1}, C{page.col+1}]
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Screen Content (Hidden when printing) */}
      <div className="no-print">
        {mode === LayoutMode.ASSEMBLY_PREVIEW ? renderAssemblyPreview() : renderSheetView()}
      </div>

      {/* Print Content (Always present but hidden on screen) */}
      <div className="print-only">
        {pages.map((page) => (
          <div
            key={`print-${page.id}`}
            className="print-sheet"
          >
            <CalendarSegment
              data={data}
              mode={LayoutMode.POSTER_3X3} // Force poster mode for print
              year={year}
              month={month}
              segmentRow={page.row}
              segmentCol={page.col}
              isFirstRow={page.isFirstRow}
              isLastRow={page.isLastRow}
              isFirstCol={page.isFirstCol}
              isLastCol={page.isLastCol}
              className="w-full h-full"
            />
            <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-mono">
              Part {page.id + 1} of {pages.length} [R{page.row+1}, C{page.col+1}]
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrintManager;
