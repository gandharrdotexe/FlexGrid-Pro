// src/pages/Preview.tsx
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          FlexGrid Pro
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Preview of layout options and generated code output
        </p>
      </header>

      {/* Mode Cards */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-6 bg-white/20 rounded-xl backdrop-blur border border-white/30 dark:bg-gray-800/20 dark:border-gray-700/30">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">🎯 Predefined Layouts</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Browse common flex/grid templates ready to use.
          </p>
        </div>
        <div className="p-6 bg-white/20 rounded-xl backdrop-blur border border-white/30 dark:bg-gray-800/20 dark:border-gray-700/30">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">🎨 Custom Builder</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manually design responsive layouts using a drag-and-drop interface.
          </p>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="grid lg:grid-cols-2 gap-12">
        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">📐 Layout Preview</h3>
          <div className="grid grid-cols-3 gap-4 h-48">
            <div className="bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
            <div className="bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
            <div className="bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">💻 Generated Code</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm dark:bg-gray-900 dark:text-gray-200">
{`<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500">1</div>
  <div class="bg-purple-500">2</div>
  <div class="bg-indigo-500">3</div>
</div>`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Index;
