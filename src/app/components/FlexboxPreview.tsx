
import React from 'react';

interface FlexboxPreviewProps {
  layout: {
    container: string;
    items: Array<{
      id: string;
      content: string;
      className: string;
      backgroundColor?: string;
      gridArea?: {
        columnStart: number;
        columnEnd: number;
        rowStart: number;
        rowEnd: number;
      };
    }>;
    gridSettings?: {
      columns: number;
      rows: number;
      gap: number;
    };
  };
}

const FlexboxPreview: React.FC<FlexboxPreviewProps> = ({ layout }) => {
  const isCustomGrid = layout.gridSettings && layout.items.some(item => item.gridArea);
  
  return (
    <div className="w-full h-64 bg-card border-4 border-pixel-border p-4" style={{ boxShadow: '8px 8px 0 hsl(var(--pixel-shadow))' }}>
      <div 
        className={`w-full h-full ${isCustomGrid ? 'grid' : layout.container} ${!isCustomGrid ? 'gap-2' : ''}`}
        style={isCustomGrid && layout.gridSettings ? {
          gridTemplateColumns: `repeat(${layout.gridSettings.columns}, 1fr)`,
          gridTemplateRows: `repeat(${layout.gridSettings.rows}, 1fr)`,
          gap: `${layout.gridSettings.gap}px`
        } : {}}
      >
        {layout.items.map((item) => (
          <div
            key={item.id}
            className={`${isCustomGrid ? '' : item.className} border-2 border-pixel-border flex items-center justify-center text-xs font-pixel text-white`}
            style={isCustomGrid && item.gridArea ? {
              gridColumn: `${item.gridArea.columnStart} / ${item.gridArea.columnEnd}`,
              gridRow: `${item.gridArea.rowStart} / ${item.gridArea.rowEnd}`,
              backgroundColor: item.backgroundColor,
              boxShadow: '2px 2px 0 hsl(var(--pixel-shadow))'
            } : {
              backgroundColor: item.backgroundColor || '#4CAF50',
              boxShadow: '2px 2px 0 hsl(var(--pixel-shadow))'
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexboxPreview;
