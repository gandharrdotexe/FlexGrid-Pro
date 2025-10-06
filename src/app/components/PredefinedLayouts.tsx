
import React from 'react';

const getRandomColor = () => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

interface Layout {
  id: string;
  name: string;
  description: string;
  preview: React.ReactNode;
  container: string;
  items: Array<{
    id: string;
    content: string;
    className: string;
    backgroundColor?: string;
  }>;
}

interface PredefinedLayoutsProps {
  onLayoutSelect: (layout: Layout) => void;
}

const PredefinedLayouts: React.FC<PredefinedLayoutsProps> = ({ onLayoutSelect }) => {
  const layouts: Layout[] = [
    {
      id: 'single-column',
      name: 'Single Column',
      description: 'Full-width single column layout',
      preview: <div className="w-full h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>,
      container: 'flex flex-col',
      items: [
        { id: '1', content: 'Content', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'two-equal',
      name: 'Two Equal Columns',
      description: 'Two columns with equal width',
      preview: (
        <div className="flex space-x-1">
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Column 1', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '2', content: 'Column 2', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'three-equal',
      name: 'Three Equal Columns',
      description: 'Three columns with equal width',
      preview: (
        <div className="flex space-x-1">
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Column 1', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '2', content: 'Column 2', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '3', content: 'Column 3', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'sidebar-content',
      name: 'Sidebar + Content',
      description: 'Fixed sidebar with flexible content area',
      preview: (
        <div className="flex space-x-1">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Sidebar', className: 'w-64', backgroundColor: getRandomColor() },
        { id: '2', content: 'Main Content', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'content-sidebar',
      name: 'Content + Sidebar',
      description: 'Main content with right sidebar',
      preview: (
        <div className="flex space-x-1">
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Main Content', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '2', content: 'Sidebar', className: 'w-64', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'header-content-footer',
      name: 'Header + Content + Footer',
      description: 'Classic three-row layout',
      preview: (
        <div className="flex flex-col space-y-1">
          <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-full h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="w-full h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
        </div>
      ),
      container: 'flex flex-col min-h-screen gap-4',
      items: [
        { id: '1', content: 'Header', className: 'h-16', backgroundColor: getRandomColor() },
        { id: '2', content: 'Main Content', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '3', content: 'Footer', className: 'h-16', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'hero-content',
      name: 'Hero + Content',
      description: 'Large hero section with content below',
      preview: (
        <div className="flex flex-col space-y-1">
          <div className="w-full h-4 bg-gradient-to-r from-indigo-400 to-purple-600 rounded"></div>
          <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded"></div>
        </div>
      ),
      container: 'flex flex-col gap-8',
      items: [
        { id: '1', content: 'Hero Section', className: 'h-96', backgroundColor: getRandomColor() },
        { id: '2', content: 'Content Section', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'two-thirds-one-third',
      name: '2/3 + 1/3 Layout',
      description: 'Main content with smaller sidebar',
      preview: (
        <div className="flex space-x-1">
          <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Main Content', className: 'flex-2', backgroundColor: getRandomColor() },
        { id: '2', content: 'Sidebar', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'grid-layout',
      name: 'Grid Layout',
      description: 'Two-by-two grid layout',
      preview: (
        <div className="grid grid-cols-2 gap-1">
          <div className="h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
          <div className="h-3 bg-gradient-to-r from-red-400 to-orange-500 rounded"></div>
        </div>
      ),
      container: 'grid grid-cols-2 gap-4',
      items: [
        { id: '1', content: 'Item 1', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Item 2', className: '', backgroundColor: getRandomColor() },
        { id: '3', content: 'Item 3', className: '', backgroundColor: getRandomColor() },
        { id: '4', content: 'Item 4', className: '', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'three-column-grid',
      name: '3-Column Grid',
      description: 'Three equal columns in a grid',
      preview: (
        <div className="grid grid-cols-3 gap-1">
          <div className="h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
        </div>
      ),
      container: 'grid grid-cols-3 gap-4',
      items: [
        { id: '1', content: 'Column 1', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Column 2', className: '', backgroundColor: getRandomColor() },
        { id: '3', content: 'Column 3', className: '', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'card-layout',
      name: 'Card Layout',
      description: 'Responsive card grid layout',
      preview: (
        <div className="grid grid-cols-2 gap-1">
          <div className="h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
          <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="col-span-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
        </div>
      ),
      container: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      items: [
        { id: '1', content: 'Card 1', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Card 2', className: '', backgroundColor: getRandomColor() },
        { id: '3', content: 'Card 3', className: '', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'dashboard-layout',
      name: 'Dashboard Layout',
      description: 'Header with sidebar and main content',
      preview: (
        <div className="space-y-1">
          <div className="w-full h-2 bg-gradient-to-r from-slate-400 to-slate-600 rounded"></div>
          <div className="flex space-x-1">
            <div className="w-6 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
            <div className="flex-1 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          </div>
        </div>
      ),
      container: 'flex flex-col h-full',
      items: [
        { id: '1', content: 'Header', className: 'h-16', backgroundColor: getRandomColor() },
        { id: '2', content: 'Content Area', className: 'flex flex-1 gap-4', backgroundColor: 'transparent' },
        { id: '3', content: 'Sidebar', className: 'w-64', backgroundColor: getRandomColor() },
        { id: '4', content: 'Main Content', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'alternating-grid',
      name: 'Alternating Grid',
      description: 'Alternating column sizes for dynamic layouts',
      preview: (
        <div className="grid grid-cols-4 gap-1">
          <div className="h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="col-span-2 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
        </div>
      ),
      container: 'grid grid-cols-4 gap-4',
      items: [
        { id: '1', content: 'Small', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Large', className: 'col-span-2', backgroundColor: getRandomColor() },
        { id: '3', content: 'Small', className: '', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'fill-space',
      name: 'Fill Space',
      description: 'Items fill available space proportionally',
      preview: (
        <div className="flex space-x-1">
          <div className="w-4 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Fixed Small', className: 'w-16', backgroundColor: getRandomColor() },
        { id: '2', content: 'Fill Space', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '3', content: 'Fixed Medium', className: 'w-32', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'stretch-middle',
      name: 'Stretch Middle',
      description: 'Middle section stretches between fixed ends',
      preview: (
        <div className="flex space-x-1">
          <div className="w-6 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-6 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4 items-stretch',
      items: [
        { id: '1', content: 'Left', className: 'w-24', backgroundColor: getRandomColor() },
        { id: '2', content: 'Stretch Middle', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '3', content: 'Right', className: 'w-24', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'html5-layout',
      name: 'HTML5 Layout',
      description: 'Semantic HTML5 structure layout',
      preview: (
        <div className="flex flex-col space-y-1">
          <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded"></div>
          <div className="flex space-x-1">
            <div className="w-4 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
            <div className="flex-1 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
            <div className="w-4 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
        </div>
      ),
      container: 'flex flex-col h-full',
      items: [
        { id: '1', content: 'Header', className: 'h-16', backgroundColor: getRandomColor() },
        { id: '2', content: 'Body', className: 'flex flex-1 gap-4', backgroundColor: 'transparent' },
        { id: '3', content: 'Nav', className: 'w-20', backgroundColor: getRandomColor() },
        { id: '4', content: 'Main', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '5', content: 'Aside', className: 'w-20', backgroundColor: getRandomColor() },
        { id: '6', content: 'Footer', className: 'h-12', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'masonry-column',
      name: 'Masonry Column',
      description: 'Vertical masonry-style column layout',
      preview: (
        <div className="flex space-x-1">
          <div className="flex flex-col space-y-1 flex-1">
            <div className="h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
            <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          </div>
          <div className="flex flex-col space-y-1 flex-1">
            <div className="h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
            <div className="h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
          </div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Column 1', className: 'flex-1', backgroundColor: getRandomColor() },
        { id: '2', content: 'Column 2', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'masonry-row',
      name: 'Masonry Row',
      description: 'Horizontal masonry-style row layout',
      preview: (
        <div className="grid grid-cols-3 gap-1">
          <div className="h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="h-5 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
        </div>
      ),
      container: 'grid grid-cols-3 gap-4',
      items: [
        { id: '1', content: 'Item 1', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Item 2', className: '', backgroundColor: getRandomColor() },
        { id: '3', content: 'Item 3', className: '', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'grid-3x3',
      name: '3×3 Grid',
      description: 'Nine equal grid items',
      preview: (
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          ))}
        </div>
      ),
      container: 'grid grid-cols-3 gap-4',
      items: Array.from({ length: 9 }, (_, i) => ({
        id: String(i + 1),
        content: `Item ${i + 1}`,
        className: '',
        backgroundColor: getRandomColor()
      }))
    },
    {
      id: 'grid-4x4',
      name: '4×4 Grid',
      description: 'Sixteen equal grid items',
      preview: (
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          ))}
        </div>
      ),
      container: 'grid grid-cols-4 gap-4',
      items: Array.from({ length: 16 }, (_, i) => ({
        id: String(i + 1),
        content: `Item ${i + 1}`,
        className: '',
        backgroundColor: getRandomColor()
      }))
    },
    {
      id: 'fill-right',
      name: 'Fill Right',
      description: 'Fixed left, expanding right section',
      preview: (
        <div className="flex space-x-1">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded"></div>
          <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
        </div>
      ),
      container: 'flex gap-4',
      items: [
        { id: '1', content: 'Fixed Left', className: 'w-32', backgroundColor: getRandomColor() },
        { id: '2', content: 'Fill Right', className: 'flex-1', backgroundColor: getRandomColor() }
      ]
    },
    {
      id: 'row-wrap',
      name: 'Row Wrap',
      description: 'Flexible row with wrapping items',
      preview: (
        <div className="flex flex-wrap gap-1">
          <div className="w-8 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
          <div className="w-6 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded"></div>
          <div className="w-10 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded"></div>
          <div className="w-4 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded"></div>
        </div>
      ),
      container: 'flex flex-wrap gap-4',
      items: [
        { id: '1', content: 'Item 1', className: '', backgroundColor: getRandomColor() },
        { id: '2', content: 'Item 2', className: '', backgroundColor: getRandomColor() },
        { id: '3', content: 'Item 3', className: '', backgroundColor: getRandomColor() },
        { id: '4', content: 'Item 4', className: '', backgroundColor: getRandomColor() }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {layouts.map((layout) => (
        <div
          key={layout.id}
          onClick={() => onLayoutSelect(layout)}
          className="card-minecraft p-6 cursor-pointer"
        >
          <div className="mb-4 bg-muted border-2 border-pixel-border p-3">
            {layout.preview}
          </div>
          <h3 className="font-pixel text-sm text-foreground mb-2">{layout.name}</h3>
          <p className="text-xs font-body text-muted-foreground">{layout.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PredefinedLayouts;
