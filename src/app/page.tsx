// "use client"
// import React, { useState, useEffect } from 'react';
// import { ThemeProvider, useTheme } from '@/app/context/ThemeContext';
// import ThemeToggle from '@/app/components/ThemeToggle';
// import PredefinedLayouts from '@/app/components/PredefinedLayouts';

// import Logo2 from '@/app/FlexGridPro-finalLogo-removebg-preview.png';
// import Image from 'next/image';


// type Mode = 'home' | 'predefined' | 'custom' | 'preview';

// const Index = () => {
//   useEffect(() => {
//     // Dynamically inject Google Fonts link
//     const link = document.createElement('link');
//     link.href = 'https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=Press+Start+2P&display=swap';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//   }, []);

//   return (
//     <ThemeProvider>
//       <MainApp />
//     </ThemeProvider>
//   );
// };

// const MainApp = () => {
//   const [mode, setMode] = useState<Mode>('home');
//   const [currentLayout, setCurrentLayout] = useState<any>(null);
//   const [codeMode, setCodeMode] = useState<'tailwind' | 'external'>('tailwind');
//   const { isDark } = useTheme();

//   const generateHTML = (layout: any) => {
//     if (!layout) return '';
    
//     if (codeMode === 'tailwind') {
//       // For CSS Grid layouts from custom builder
//       if (layout.gridSettings) {
//         const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
//                         layout.gridSettings.gap <= 8 ? 'gap-2' : 
//                         layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
//         return `<div class="grid ${gapClass} w-full h-80" style="grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr); grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);">
// ${layout.items.map(item => `  <div class="flex items-center justify-center rounded-lg text-white font-bold" style="grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd}; grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd}; background-color: ${item.backgroundColor};">${item.content}</div>`).join('\n')}
// </div>`;
//       }
      
//       // For predefined layouts
//       return `<div class="${layout.container}">
// ${layout.items.map(item => `  <div class="${item.className}">${item.content}</div>`).join('\n')}
// </div>`;
//     } else {
//       // External CSS mode
//       if (layout.gridSettings) {
//         return `<div class="grid-container">
// ${layout.items.map((item, index) => `  <div class="grid-item-${index + 1}">${item.content}</div>`).join('\n')}
// </div>`;
//       }
      
//       return `<div class="container">
// ${layout.items.map((item, index) => `  <div class="item-${index + 1}">${item.content}</div>`).join('\n')}
// </div>`;
//     }
//   };

//   const generateCSS = (layout: any, mode: 'tailwind' | 'external') => {
//     if (!layout) return '';
    
//     if (mode === 'tailwind') {
//       // For CSS Grid layouts, show proper Tailwind approach
//       if (layout.gridSettings) {
//         const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
//                         layout.gridSettings.gap <= 8 ? 'gap-2' : 
//                         layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
//         return `/* Tailwind CSS Classes Used:
// Container: grid ${gapClass} w-full h-80
// Items: flex items-center justify-center rounded-lg text-white font-bold

// Grid template defined via inline styles:
// grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr)
// grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr)

// ${layout.items.map((item, index) => 
// `Box ${index + 1}: 
//   grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd}
//   grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd}
//   background-color: ${item.backgroundColor}`
// ).join('\n\n')} */`;
//       }
      
//       // For predefined layouts
//       return `/* Use the Tailwind classes directly in your HTML as shown above */`;
//     } else {
//       // External CSS mode
//       if (layout.gridSettings) {
//         return `.grid-container {
//   display: grid;
//   grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr);
//   grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);
//   gap: ${layout.gridSettings.gap}px;
//   width: 100%;
//   height: 320px;
// }

// ${layout.items.map((item, index) => 
// `.grid-item-${index + 1} {
//   grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd};
//   grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd};
//   background-color: ${item.backgroundColor};
//   border-radius: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 600;
//   text-shadow: 0 1px 2px rgba(0,0,0,0.3);
// }`).join('\n\n')}`;
//       }

//       // Convert Tailwind classes to CSS for predefined layouts
//       const containerCSS = convertTailwindToCSS(layout.container);
//       return `.container {${containerCSS}
// }

// ${layout.items.map((item, index) => {
//   const itemCSS = convertTailwindToCSS(item.className);
//   return `.item-${index + 1} {${itemCSS}
//   background-color: ${item.backgroundColor || '#6B73FF'};
//   border-radius: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 600;
//   text-shadow: 0 1px 2px rgba(0,0,0,0.3);
//   min-height: 50px;
// }`;
// }).join('\n\n')}`;
//     }
//   };

//   const convertTailwindToCSS = (tailwindClasses: string) => {
//     const classes = tailwindClasses.split(' ');
//     let css = '\n';
    
//     classes.forEach(cls => {
//       switch (cls) {
//         case 'flex': css += '  display: flex;\n'; break;
//         case 'flex-col': css += '  flex-direction: column;\n'; break;
//         case 'flex-1': css += '  flex: 1;\n'; break;
//         case 'flex-2': css += '  flex: 2;\n'; break;
//         case 'gap-4': css += '  gap: 1rem;\n'; break;
//         case 'gap-6': css += '  gap: 1.5rem;\n'; break;
//         case 'gap-8': css += '  gap: 2rem;\n'; break;
//         case 'min-h-screen': css += '  min-height: 100vh;\n'; break;
//         case 'h-16': css += '  height: 4rem;\n'; break;
//         case 'h-96': css += '  height: 24rem;\n'; break;
//         case 'w-64': css += '  width: 16rem;\n'; break;
//         case 'grid': css += '  display: grid;\n'; break;
//         case 'grid-cols-1': css += '  grid-template-columns: repeat(1, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-2': css += '  grid-template-columns: repeat(2, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-3': css += '  grid-template-columns: repeat(3, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-4': css += '  grid-template-columns: repeat(4, minmax(0, 1fr));\n'; break;
//         case 'md:grid-cols-2': css += '  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n'; break;
//         case 'lg:grid-cols-3': css += '  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n'; break;
//         case 'col-span-2': css += '  grid-column: span 2 / span 2;\n'; break;
//         case 'row-span-2': css += '  grid-row: span 2 / span 2;\n'; break;
//         case 'flex-wrap': css += '  flex-wrap: wrap;\n'; break;
//         case 'items-stretch': css += '  align-items: stretch;\n'; break;
//         case 'justify-between': css += '  justify-content: space-between;\n'; break;
//       }
//     });
    
//     return css;
//   };

//   const handleLayoutSelect = (layout: any) => {
//     setCurrentLayout(layout);
//     setMode('preview');
//   };

//   return (
//     <div className="min-h-screen bg-background press-start-2p-regular transition-all duration-500 relative overflow-hidden">
//       {/* Pixel grid background pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-5">
//         <div className="w-full h-full" style={{
//           backgroundImage: `
//             linear-gradient(0deg, hsl(var(--pixel-border)) 1px, transparent 1px),
//             linear-gradient(90deg, hsl(var(--pixel-border)) 1px, transparent 1px)
//           `,
//           backgroundSize: '32px 32px'
//         }} />
//       </div>

//       {/* Floating pixel blocks */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-10 left-10 w-16 h-16 bg-primary/30 pixel-float" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//         <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 pixel-float" style={{ animationDelay: '2s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//         <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/15 pixel-float" style={{ animationDelay: '4s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//       </div>

//       {/* Header */}
//       <header 
//         className="relative bg-card border-b-4" 
//         style={{ 
//           borderColor: isDark ? '#22c55e' : '#000000' 
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-6">
//               <button 
//                 onClick={() => setMode('home')}
//                 className="flex items-center space-x-2 text-2xl press-start-2p-regular font-bold text-primary hover:scale-105 transition-all duration-200 pixel-glitch"
//               >
//                 <Image 
//           src={Logo2} 
//           alt="FlexGrid Pro" 
//           width={60} 
//           height={100}
//           className="pixel-glitch"
//         />
//         <span className="text-2xl press-start-2p-regular font-bold text-primary pixel-glitch">
//           FlexGrid Pro
//         </span>
//               </button>
//               {mode !== 'home' && (
//                 <button
//                   onClick={() => setMode('home')}
//                   className="btn-minecraft text-xs"
//                 >
//                   ← Back
//                 </button>
//               )}
//             </div>
//             <ThemeToggle/>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {mode === 'home' && (
//           <div className="text-center space-y-16 animate-slide-in-up">
//             {/* Hero Section */}
//             <div className="space-y-8 relative">
//               <div className="text-8xl pixel-float">⛏</div>
//               <h1 className="text-4xl md:text-5xl press-start-2p-regular font-bold text-primary leading-tight">
//                 Minecraft Grid Builder
//               </h1>
//               <div className="pixel-box max-w-4xl mx-auto p-6">
//                 <p className="text-base md:text-lg font-body text-foreground leading-relaxed">
//                   Craft epic, responsive layouts with blocky Minecraft-style grids! 
//                   Generate clean code instantly! ⚡
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="pixel-box max-w-2xl mx-auto p-6">
//                  <h3 className="text-lg press-start-2p-regular text-foreground mb-4">🔤 Font Test</h3>
//                 <div className="space-y-3">
//                   <div className="press-start-2p-regular text-sm text-primary ">Press Start 2P: Retro Gaming Font</div>
//                   <div className="bitcount-prop-single text-base text-foreground">Bitcount Prop Single: Modern Variable Font</div>
//                   <div className="bitcount-prop-single-bold text-lg text-primary">Bitcount Prop Single Bold: Heavy Weight</div>
//                   <div className="font-bitcount text-sm text-muted-foreground">Tailwind font-bitcount: Utility Class</div>
//                   <div className="font-press-start text-xs text-accent">Tailwind font-press-start: Utility Class</div>
                  
//                   {/* Button Test */}
//                   <div className="mt-4 space-y-2">
//                     <div className="text-sm text-foreground">Button Test:</div>
//                     <button className="btn-minecraft text-xs">Test btn-minecraft</button>
//                     <button className="minecraft-btn text-xs">Test minecraft-btn</button>
//                     <button 
//                       className="text-xs"
//                       style={{
//                         backgroundColor: 'hsl(var(--primary))',
//                         color: 'hsl(var(--primary-foreground))',
//                         padding: '0.75rem 1.5rem',
//                         border: '4px solid hsl(var(--pixel-border))',
//                         boxShadow: '4px 4px 0 hsl(var(--pixel-shadow))',
//                         fontFamily: '"Press Start 2P", monospace, system-ui',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Inline Style Button
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Mode Selection */}
//             <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//               <div
//                 onClick={() => setMode('predefined')}
//                 className="card-minecraft group cursor-pointer p-10"
//               >
//                 <div className="text-6xl mb-6 pixel-glitch">📦</div>
//                 <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
//                   Templates
//                 </h3>
//                 <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
//                   Choose from pre-built layouts! Quick start for pro designs.
//                 </p>
//               </div>

//               <div
//                 onClick={() => setMode('custom')}
//                 className="card-minecraft group cursor-pointer p-10"
//               >
//                 <div className="text-6xl mb-6 pixel-glitch" style={{ animationDelay: '1s' }}>🔨</div>
//                 <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
//                   Custom Build
//                 </h3>
//                 <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
//                   Build unique layouts! Interactive grid system awaits.
//                 </p>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float">⚡</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Fast</h4>
//                 <p className="font-body text-sm text-muted-foreground">Real-time layouts!</p>
//               </div>
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '1s' }}>🎮</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Blocky</h4>
//                 <p className="font-body text-sm text-muted-foreground">Pixel perfect!</p>
//               </div>
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '2s' }}>📋</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Export</h4>
//                 <p className="font-body text-sm text-muted-foreground">Copy code fast!</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* {mode === 'predefined' && (
//           <div className="space-y-12 animate-slide-in-up">
//             <div className="text-center">
//               <div className="text-6xl mb-4 pixel-glitch">📦</div>
//               <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
//                 Layout Templates
//               </h2>
//               <div className="pixel-box max-w-2xl mx-auto p-6">
//                 <p className="text-base font-body text-muted-foreground">
//                   Select from blocky Minecraft-style layouts!
//                 </p>
//               </div>
//             </div>
//             <PredefinedLayouts onLayoutSelect={handleLayoutSelect} />
//           </div>
//         )}

//         {mode === 'custom' && (
//           <CustomGridBuilder onLayoutGenerate={handleLayoutSelect} />
//         )}

//         {mode === 'preview' && currentLayout && (
//           <div className="space-y-12 animate-slide-in-up">
//             <div className="text-center">
//               <div className="text-6xl mb-4 pixel-glitch">⚒</div>
//               <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
//                 Your Creation
//               </h2>
//               <div className="pixel-box max-w-2xl mx-auto mb-6 p-6">
//                 <p className="text-base font-body text-muted-foreground">
//                   Here's your layout with code! ✨
//                 </p>
//               </div>
//               <button
//                 onClick={() => setMode('predefined')}
//                 className="btn-minecraft"
//               >
//                 ← Back
//               </button>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <h3 className="text-base press-start-2p-regular text-foreground">Preview</h3>
//                 <FlexboxPreview layout={currentLayout} />
//               </div>

//               <div>
//                 <CodeOutput
//                   html={generateHTML(currentLayout)}
//                   css={generateCSS(currentLayout, codeMode)}
//                   mode={codeMode}
//                   onModeChange={setCodeMode}
//                 />
//               </div>
//             </div>
//           </div>
//         )} */}
//       </main>
//     </div>
//   );
// };

// export default Index;
// "use client"
// import React, { useState, useEffect } from 'react';
// import { ThemeProvider, useTheme } from '@/app/context/ThemeContext';
// import ThemeToggle from '@/app/components/ThemeToggle';
// // import PredefinedLayouts from '@/app/components/PredefinedLayouts';
// // import CustomGridBuilder from '@/app/components/CustomGridBuilder';
// // import FlexboxPreview from '@/app/components/FlexboxPreview';
// // import CodeOutput from '@/app/components/CodeOutput';

// import Logo2 from '@/app/FlexGridPro-finalLogo-removebg-preview.png';
// import Image from 'next/image';

// // Define proper types
// interface GridArea {
//   columnStart: number;
//   columnEnd: number;
//   rowStart: number;
//   rowEnd: number;
// }

// interface GridSettings {
//   columns: number;
//   rows: number;
//   gap: number;
// }

// interface LayoutItem {
//   content: string;
//   className?: string;
//   backgroundColor?: string;
//   gridArea?: GridArea;
// }

// interface Layout {
//   container?: string;
//   items: LayoutItem[];
//   gridSettings?: GridSettings;
// }

// type Mode = 'home' | 'predefined' | 'custom' | 'preview';

// const Index = () => {
//   useEffect(() => {
//     // Dynamically inject Google Fonts link
//     const link = document.createElement('link');
//     link.href = 'https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=Press+Start+2P&display=swap';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//   }, []);

//   return (
//     <ThemeProvider>
//       <MainApp />
//     </ThemeProvider>
//   );
// };

// const MainApp = () => {
//   const [mode, setMode] = useState<Mode>('home');
//   const [currentLayout, setCurrentLayout] = useState<Layout | null>(null);
//   const [codeMode, setCodeMode] = useState<'tailwind' | 'external'>('tailwind');
//   const { isDark } = useTheme();

//   const generateHTML = (layout: Layout | null) => {
//     if (!layout) return '';
    
//     if (codeMode === 'tailwind') {
//       // For CSS Grid layouts from custom builder
//       if (layout.gridSettings) {
//         const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
//                         layout.gridSettings.gap <= 8 ? 'gap-2' : 
//                         layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
//         return `<div class="grid ${gapClass} w-full h-80" style="grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr); grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);">
// ${layout.items.map(item => `  <div class="flex items-center justify-center rounded-lg text-white font-bold" style="grid-column: ${item.gridArea?.columnStart} / ${item.gridArea?.columnEnd}; grid-row: ${item.gridArea?.rowStart} / ${item.gridArea?.rowEnd}; background-color: ${item.backgroundColor};">${item.content}</div>`).join('\n')}
// </div>`;
//       }
      
//       // For predefined layouts
//       return `<div class="${layout.container || ''}">
// ${layout.items.map(item => `  <div class="${item.className || ''}">${item.content}</div>`).join('\n')}
// </div>`;
//     } else {
//       // External CSS mode
//       if (layout.gridSettings) {
//         return `<div class="grid-container">
// ${layout.items.map((item, index) => `  <div class="grid-item-${index + 1}">${item.content}</div>`).join('\n')}
// </div>`;
//       }
      
//       return `<div class="container">
// ${layout.items.map((item, index) => `  <div class="item-${index + 1}">${item.content}</div>`).join('\n')}
// </div>`;
//     }
//   };

//   const generateCSS = (layout: Layout | null, mode: 'tailwind' | 'external') => {
//     if (!layout) return '';
    
//     if (mode === 'tailwind') {
//       // For CSS Grid layouts, show proper Tailwind approach
//       if (layout.gridSettings) {
//         const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
//                         layout.gridSettings.gap <= 8 ? 'gap-2' : 
//                         layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
//         return `/* Tailwind CSS Classes Used:
// Container: grid ${gapClass} w-full h-80
// Items: flex items-center justify-center rounded-lg text-white font-bold

// Grid template defined via inline styles:
// grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr)
// grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr)

// ${layout.items.map((item, index) => 
// `Box ${index + 1}: 
//   grid-column: ${item.gridArea?.columnStart} / ${item.gridArea?.columnEnd}
//   grid-row: ${item.gridArea?.rowStart} / ${item.gridArea?.rowEnd}
//   background-color: ${item.backgroundColor}`
// ).join('\n\n')} */`;
//       }
      
//       // For predefined layouts
//       return `/* Use the Tailwind classes directly in your HTML as shown above */`;
//     } else {
//       // External CSS mode
//       if (layout.gridSettings) {
//         return `.grid-container {
//   display: grid;
//   grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr);
//   grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);
//   gap: ${layout.gridSettings.gap}px;
//   width: 100%;
//   height: 320px;
// }

// ${layout.items.map((item, index) => 
// `.grid-item-${index + 1} {
//   grid-column: ${item.gridArea?.columnStart} / ${item.gridArea?.columnEnd};
//   grid-row: ${item.gridArea?.rowStart} / ${item.gridArea?.rowEnd};
//   background-color: ${item.backgroundColor};
//   border-radius: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 600;
//   text-shadow: 0 1px 2px rgba(0,0,0,0.3);
// }`).join('\n\n')}`;
//       }

//       // Convert Tailwind classes to CSS for predefined layouts
//       const containerCSS = convertTailwindToCSS(layout.container || '');
//       return `.container {${containerCSS}
// }

// ${layout.items.map((item, index) => {
//   const itemCSS = convertTailwindToCSS(item.className || '');
//   return `.item-${index + 1} {${itemCSS}
//   background-color: ${item.backgroundColor || '#6B73FF'};
//   border-radius: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: 600;
//   text-shadow: 0 1px 2px rgba(0,0,0,0.3);
//   min-height: 50px;
// }`;
// }).join('\n\n')}`;
//     }
//   };

//   const convertTailwindToCSS = (tailwindClasses: string) => {
//     const classes = tailwindClasses.split(' ');
//     let css = '\n';
    
//     classes.forEach(cls => {
//       switch (cls) {
//         case 'flex': css += '  display: flex;\n'; break;
//         case 'flex-col': css += '  flex-direction: column;\n'; break;
//         case 'flex-1': css += '  flex: 1;\n'; break;
//         case 'flex-2': css += '  flex: 2;\n'; break;
//         case 'gap-4': css += '  gap: 1rem;\n'; break;
//         case 'gap-6': css += '  gap: 1.5rem;\n'; break;
//         case 'gap-8': css += '  gap: 2rem;\n'; break;
//         case 'min-h-screen': css += '  min-height: 100vh;\n'; break;
//         case 'h-16': css += '  height: 4rem;\n'; break;
//         case 'h-96': css += '  height: 24rem;\n'; break;
//         case 'w-64': css += '  width: 16rem;\n'; break;
//         case 'grid': css += '  display: grid;\n'; break;
//         case 'grid-cols-1': css += '  grid-template-columns: repeat(1, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-2': css += '  grid-template-columns: repeat(2, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-3': css += '  grid-template-columns: repeat(3, minmax(0, 1fr));\n'; break;
//         case 'grid-cols-4': css += '  grid-template-columns: repeat(4, minmax(0, 1fr));\n'; break;
//         case 'md:grid-cols-2': css += '  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n'; break;
//         case 'lg:grid-cols-3': css += '  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n'; break;
//         case 'col-span-2': css += '  grid-column: span 2 / span 2;\n'; break;
//         case 'row-span-2': css += '  grid-row: span 2 / span 2;\n'; break;
//         case 'flex-wrap': css += '  flex-wrap: wrap;\n'; break;
//         case 'items-stretch': css += '  align-items: stretch;\n'; break;
//         case 'justify-between': css += '  justify-content: space-between;\n'; break;
//       }
//     });
    
//     return css;
//   };

//   const handleLayoutSelect = (layout: Layout) => {
//     setCurrentLayout(layout);
//     setMode('preview');
//   };

//   return (
//     <div className="min-h-screen bg-background press-start-2p-regular transition-all duration-500 relative overflow-hidden">
//       {/* Pixel grid background pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-5">
//         <div className="w-full h-full" style={{
//           backgroundImage: `
//             linear-gradient(0deg, hsl(var(--pixel-border)) 1px, transparent 1px),
//             linear-gradient(90deg, hsl(var(--pixel-border)) 1px, transparent 1px)
//           `,
//           backgroundSize: '32px 32px'
//         }} />
//       </div>

//       {/* Floating pixel blocks */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-10 left-10 w-16 h-16 bg-primary/30 pixel-float" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//         <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 pixel-float" style={{ animationDelay: '2s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//         <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/15 pixel-float" style={{ animationDelay: '4s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
//       </div>

//       {/* Header */}
//       <header 
//         className="relative bg-card border-b-4" 
//         style={{ 
//           borderColor: isDark ? '#22c55e' : '#000000' 
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-6">
//               <button 
//                 onClick={() => setMode('home')}
//                 className="flex items-center space-x-2 text-2xl press-start-2p-regular font-bold text-primary hover:scale-105 transition-all duration-200 pixel-glitch"
//               >
//                 <Image 
//           src={Logo2} 
//           alt="FlexGrid Pro" 
//           width={60} 
//           height={100}
//           className="pixel-glitch"
//         />
//         <span className="text-2xl press-start-2p-regular font-bold text-primary pixel-glitch">
//           FlexGrid Pro
//         </span>
//               </button>
//               {mode !== 'home' && (
//                 <button
//                   onClick={() => setMode('home')}
//                   className="btn-minecraft text-xs"
//                 >
//                   ← Back
//                 </button>
//               )}
//             </div>
//             <ThemeToggle/>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {mode === 'home' && (
//           <div className="text-center space-y-16 animate-slide-in-up">
//             {/* Hero Section */}
//             <div className="space-y-8 relative">
//               <div className="text-8xl pixel-float">⛏</div>
//               <h1 className="text-4xl md:text-5xl press-start-2p-regular font-bold text-primary leading-tight">
//                 Minecraft Grid Builder
//               </h1>
//               <div className="pixel-box max-w-4xl mx-auto p-6">
//                 <p className="text-base md:text-lg font-body text-foreground leading-relaxed">
//                   Craft epic, responsive layouts with blocky Minecraft-style grids! 
//                   Generate clean code instantly! ⚡
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="pixel-box max-w-2xl mx-auto p-6">
//                  <h3 className="text-lg press-start-2p-regular text-foreground mb-4">🔤 Font Test</h3>
//                 <div className="space-y-3">
//                   <div className="press-start-2p-regular text-sm text-primary ">Press Start 2P: Retro Gaming Font</div>
//                   <div className="bitcount-prop-single text-base text-foreground">Bitcount Prop Single: Modern Variable Font</div>
//                   <div className="bitcount-prop-single-bold text-lg text-primary">Bitcount Prop Single Bold: Heavy Weight</div>
//                   <div className="font-bitcount text-sm text-muted-foreground">Tailwind font-bitcount: Utility Class</div>
//                   <div className="font-press-start text-xs text-accent">Tailwind font-press-start: Utility Class</div>
                  
//                   {/* Button Test */}
//                   <div className="mt-4 space-y-2">
//                     <div className="text-sm text-foreground">Button Test:</div>
//                     <button className="btn-minecraft text-xs">Test btn-minecraft</button>
//                     <button className="minecraft-btn text-xs">Test minecraft-btn</button>
//                     <button 
//                       className="text-xs"
//                       style={{
//                         backgroundColor: 'hsl(var(--primary))',
//                         color: 'hsl(var(--primary-foreground))',
//                         padding: '0.75rem 1.5rem',
//                         border: '4px solid hsl(var(--pixel-border))',
//                         boxShadow: '4px 4px 0 hsl(var(--pixel-shadow))',
//                         fontFamily: '"Press Start 2P", monospace, system-ui',
//                         cursor: 'pointer'
//                       }}
//                     >
//                       Inline Style Button
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Mode Selection */}
//             <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//               <div
//                 onClick={() => setMode('predefined')}
//                 className="card-minecraft group cursor-pointer p-10"
//               >
//                 <div className="text-6xl mb-6 pixel-glitch">📦</div>
//                 <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
//                   Templates
//                 </h3>
//                 <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
//                   Choose from pre-built layouts! Quick start for pro designs.
//                 </p>
//               </div>

//               <div
//                 onClick={() => setMode('custom')}
//                 className="card-minecraft group cursor-pointer p-10"
//               >
//                 <div className="text-6xl mb-6 pixel-glitch" style={{ animationDelay: '1s' }}>🔨</div>
//                 <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
//                   Custom Build
//                 </h3>
//                 <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
//                   Build unique layouts! Interactive grid system awaits.
//                 </p>
//               </div>
//             </div>

//             {/* Features */}
//             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float">⚡</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Fast</h4>
//                 <p className="font-body text-sm text-muted-foreground">Real-time layouts!</p>
//               </div>
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '1s' }}>🎮</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Blocky</h4>
//                 <p className="font-body text-sm text-muted-foreground">Pixel perfect!</p>
//               </div>
//               <div className="card-minecraft p-8">
//                 <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '2s' }}>📋</div>
//                 <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Export</h4>
//                 <p className="font-body text-sm text-muted-foreground">Copy code fast!</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* {mode === 'predefined' && (
//           <div className="space-y-12 animate-slide-in-up">
//             <div className="text-center">
//               <div className="text-6xl mb-4 pixel-glitch">📦</div>
//               <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
//                 Layout Templates
//               </h2>
//               <div className="pixel-box max-w-2xl mx-auto p-6">
//                 <p className="text-base font-body text-muted-foreground">
//                   Select from blocky Minecraft-style layouts!
//                 </p>
//               </div>
//             </div>
//             <PredefinedLayouts onLayoutSelect={handleLayoutSelect} />
//           </div>
//         )}

//         {mode === 'custom' && (
//           <CustomGridBuilder onLayoutGenerate={handleLayoutSelect} />
//         )}

//         {mode === 'preview' && currentLayout && (
//           <div className="space-y-12 animate-slide-in-up">
//             <div className="text-center">
//               <div className="text-6xl mb-4 pixel-glitch">⚒</div>
//               <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
//                 Your Creation
//               </h2>
//               <div className="pixel-box max-w-2xl mx-auto mb-6 p-6">
//                 <p className="text-base font-body text-muted-foreground">
//                   {`Here's your layout with code! ✨`}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setMode('predefined')}
//                 className="btn-minecraft"
//               >
//                 ← Back
//               </button>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <h3 className="text-base press-start-2p-regular text-foreground">Preview</h3>
//                 <FlexboxPreview layout={currentLayout} />
//               </div>

//               <div>
//                 <CodeOutput
//                   html={generateHTML(currentLayout)}
//                   css={generateCSS(currentLayout, codeMode)}
//                   mode={codeMode}
//                   onModeChange={setCodeMode}
//                 />
//               </div>
//             </div>
//           </div>
//         )} */}
//       </main>
//     </div>
//   );
// };

// export default Index;

"use client"
import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from '@/app/context/ThemeContext';
import ThemeToggle from '@/app/components/ThemeToggle';
import PredefinedLayouts from '@/app/components/PredefinedLayouts';
// import CustomGridBuilder from '@/app/components/CustomGridBuilder';
import FlexboxPreview from '@/app/components/FlexboxPreview';
// import CodeOutput from '@/app/components/CodeOutput';

type Mode = 'home' | 'predefined' | 'custom' | 'preview';

const Index = () => {
  useEffect(() => {
    // Dynamically inject Google Fonts link
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const [mode, setMode] = useState<Mode>('home');
  const [currentLayout, setCurrentLayout] = useState<any>(null);
  const [codeMode, setCodeMode] = useState<'tailwind' | 'external'>('tailwind');
  const { isDark } = useTheme();

  const generateHTML = (layout: any) => {
    if (!layout) return '';
    
    if (codeMode === 'tailwind') {
      // For CSS Grid layouts from custom builder
      if (layout.gridSettings) {
        const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
                        layout.gridSettings.gap <= 8 ? 'gap-2' : 
                        layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
        return `<div class="grid ${gapClass} w-full h-80" style="grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr); grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);">
${layout.items.map(item => `  <div class="flex items-center justify-center rounded-lg text-white font-bold" style="grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd}; grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd}; background-color: ${item.backgroundColor};">${item.content}</div>`).join('\n')}
</div>`;
      }
      
      // For predefined layouts
      return `<div class="${layout.container}">
${layout.items.map(item => `  <div class="${item.className}">${item.content}</div>`).join('\n')}
</div>`;
    } else {
      // External CSS mode
      if (layout.gridSettings) {
        return `<div class="grid-container">
${layout.items.map((item, index) => `  <div class="grid-item-${index + 1}">${item.content}</div>`).join('\n')}
</div>`;
      }
      
      return `<div class="container">
${layout.items.map((item, index) => `  <div class="item-${index + 1}">${item.content}</div>`).join('\n')}
</div>`;
    }
  };

  const generateCSS = (layout: any, mode: 'tailwind' | 'external') => {
    if (!layout) return '';
    
    if (mode === 'tailwind') {
      // For CSS Grid layouts, show proper Tailwind approach
      if (layout.gridSettings) {
        const gapClass = layout.gridSettings.gap <= 4 ? 'gap-1' : 
                        layout.gridSettings.gap <= 8 ? 'gap-2' : 
                        layout.gridSettings.gap <= 16 ? 'gap-4' : 'gap-6';
        
        return `/* Tailwind CSS Classes Used:
Container: grid ${gapClass} w-full h-80
Items: flex items-center justify-center rounded-lg text-white font-bold

Grid template defined via inline styles:
grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr)
grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr)

${layout.items.map((item, index) => 
`Box ${index + 1}: 
  grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd}
  grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd}
  background-color: ${item.backgroundColor}`
).join('\n\n')} */`;
      }
      
      // For predefined layouts
      return `/* Use the Tailwind classes directly in your HTML as shown above */`;
    } else {
      // External CSS mode
      if (layout.gridSettings) {
        return `.grid-container {
  display: grid;
  grid-template-columns: repeat(${layout.gridSettings.columns}, 1fr);
  grid-template-rows: repeat(${layout.gridSettings.rows}, 1fr);
  gap: ${layout.gridSettings.gap}px;
  width: 100%;
  height: 320px;
}

${layout.items.map((item, index) => 
`.grid-item-${index + 1} {
  grid-column: ${item.gridArea.columnStart} / ${item.gridArea.columnEnd};
  grid-row: ${item.gridArea.rowStart} / ${item.gridArea.rowEnd};
  background-color: ${item.backgroundColor};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}`).join('\n\n')}`;
      }

      // Convert Tailwind classes to CSS for predefined layouts
      const containerCSS = convertTailwindToCSS(layout.container);
      return `.container {${containerCSS}
}

${layout.items.map((item, index) => {
  const itemCSS = convertTailwindToCSS(item.className);
  return `.item-${index + 1} {${itemCSS}
  background-color: ${item.backgroundColor || '#6B73FF'};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  min-height: 50px;
}`;
}).join('\n\n')}`;
    }
  };

  const convertTailwindToCSS = (tailwindClasses: string) => {
    const classes = tailwindClasses.split(' ');
    let css = '\n';
    
    classes.forEach(cls => {
      switch (cls) {
        case 'flex': css += '  display: flex;\n'; break;
        case 'flex-col': css += '  flex-direction: column;\n'; break;
        case 'flex-1': css += '  flex: 1;\n'; break;
        case 'flex-2': css += '  flex: 2;\n'; break;
        case 'gap-4': css += '  gap: 1rem;\n'; break;
        case 'gap-6': css += '  gap: 1.5rem;\n'; break;
        case 'gap-8': css += '  gap: 2rem;\n'; break;
        case 'min-h-screen': css += '  min-height: 100vh;\n'; break;
        case 'h-16': css += '  height: 4rem;\n'; break;
        case 'h-96': css += '  height: 24rem;\n'; break;
        case 'w-64': css += '  width: 16rem;\n'; break;
        case 'grid': css += '  display: grid;\n'; break;
        case 'grid-cols-1': css += '  grid-template-columns: repeat(1, minmax(0, 1fr));\n'; break;
        case 'grid-cols-2': css += '  grid-template-columns: repeat(2, minmax(0, 1fr));\n'; break;
        case 'grid-cols-3': css += '  grid-template-columns: repeat(3, minmax(0, 1fr));\n'; break;
        case 'grid-cols-4': css += '  grid-template-columns: repeat(4, minmax(0, 1fr));\n'; break;
        case 'md:grid-cols-2': css += '  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n'; break;
        case 'lg:grid-cols-3': css += '  @media (min-width: 1024px) {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n'; break;
        case 'col-span-2': css += '  grid-column: span 2 / span 2;\n'; break;
        case 'row-span-2': css += '  grid-row: span 2 / span 2;\n'; break;
        case 'flex-wrap': css += '  flex-wrap: wrap;\n'; break;
        case 'items-stretch': css += '  align-items: stretch;\n'; break;
        case 'justify-between': css += '  justify-content: space-between;\n'; break;
      }
    });
    
    return css;
  };

  const handleLayoutSelect = (layout: any) => {
    setCurrentLayout(layout);
    setMode('preview');
  };

  return (
    <div className="min-h-screen bg-background press-start-2p-regular transition-all duration-500 relative overflow-hidden">
      {/* Pixel grid background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(0deg, hsl(var(--pixel-border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--pixel-border)) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Floating pixel blocks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/30 pixel-float" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary/20 pixel-float" style={{ animationDelay: '2s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/15 pixel-float" style={{ animationDelay: '4s', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
      </div>

      {/* Header */}
      <header 
        className="relative bg-card border-b-4" 
        style={{ 
          borderColor: isDark ? '#22c55e' : '#000000' 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setMode('home')}
                className="text-2xl press-start-2p-regular font-bold text-primary hover:scale-105 transition-all duration-200 pixel-glitch"
              >
                ⛏ FlexGrid Pro
              </button>
              {mode !== 'home' && (
                <button
                  onClick={() => setMode('home')}
                  className="btn-minecraft text-xs"
                >
                  ← Back
                </button>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {mode === 'home' && (
          <div className="text-center space-y-16 animate-slide-in-up">
            {/* Hero Section */}
            <div className="space-y-8 relative">
              <div className="text-8xl pixel-float">⛏</div>
              <h1 className="text-4xl md:text-5xl press-start-2p-regular font-bold text-primary leading-tight">
                Minecraft Grid Builder
              </h1>
              <div className="pixel-box max-w-4xl mx-auto p-6">
                <p className="text-base md:text-sm press-start-2p-regular font-body text-foreground leading-relaxed ">
                  Craft epic, responsive layouts with blocky Minecraft-style grids! 
                  Generate clean code instantly! ⚡
                </p>
              </div>
            </div>

            {/* Mode Selection */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div
                onClick={() => setMode('predefined')}
                className="card-minecraft group cursor-pointer p-10"
              >
                <div className="text-6xl mb-6 pixel-glitch">📦</div>
                <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
                  Templates
                </h3>
                <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                  Choose from pre-built layouts! Quick start for pro designs.
                </p>
              </div>

              <div
                onClick={() => setMode('custom')}
                className="card-minecraft group cursor-pointer p-10"
              >
                <div className="text-6xl mb-6 pixel-glitch" style={{ animationDelay: '1s' }}>🔨</div>
                <h3 className="text-xl md:text-2xl press-start-2p-regular font-bold text-foreground mb-6">
                  Custom Build
                </h3>
                <p className="text-sm md:text-base font-body text-muted-foreground leading-relaxed">
                  Build unique layouts! Interactive grid system awaits.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-minecraft p-8">
                <div className="text-4xl mb-4 pixel-float">⚡</div>
                <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Fast</h4>
                <p className="font-body text-sm text-muted-foreground">Real-time layouts!</p>
              </div>
              <div className="card-minecraft p-8">
                <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '1s' }}>🎮</div>
                <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Blocky</h4>
                <p className="font-body text-sm text-muted-foreground">Pixel perfect!</p>
              </div>
              <div className="card-minecraft p-8">
                <div className="text-4xl mb-4 pixel-float" style={{ animationDelay: '2s' }}>📋</div>
                <h4 className="press-start-2p-regular text-sm text-foreground mb-3">Export</h4>
                <p className="font-body text-sm text-muted-foreground">Copy code fast!</p>
              </div>
            </div>
          </div>
        )}

        {mode === 'predefined' && (
          <div className="space-y-12 animate-slide-in-up">
            <div className="text-center">
              <div className="text-6xl mb-4 pixel-glitch">📦</div>
              <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
                Layout Templates
              </h2>
              <div className="pixel-box max-w-2xl mx-auto p-6">
                <p className="text-base font-body text-muted-foreground">
                  Select from blocky Minecraft-style layouts!
                </p>
              </div>
            </div>
            <PredefinedLayouts onLayoutSelect={handleLayoutSelect} />
          </div>
        )}

        {mode === 'custom' && (
          <CustomGridBuilder onLayoutGenerate={handleLayoutSelect} />
        )}

        {mode === 'preview' && currentLayout && (
          <div className="space-y-12 animate-slide-in-up">
            <div className="text-center">
              <div className="text-6xl mb-4 pixel-glitch">⚒</div>
              <h2 className="text-3xl md:text-4xl press-start-2p-regular font-bold text-foreground mb-6">
                Your Creation
              </h2>
              <div className="pixel-box max-w-2xl mx-auto mb-6 p-6">
                <p className="text-base font-body text-muted-foreground">
                  Here's your layout with code! ✨
                </p>
              </div>
              <button
                onClick={() => setMode('predefined')}
                className="btn-minecraft"
              >
                ← Back
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-base press-start-2p-regular text-foreground">Preview</h3>
                <FlexboxPreview layout={currentLayout} />
              </div>

              <div>
                <CodeOutput
                  html={generateHTML(currentLayout)}
                  css={generateCSS(currentLayout, codeMode)}
                  mode={codeMode}
                  onModeChange={setCodeMode}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;