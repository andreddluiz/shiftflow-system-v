
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ShiftManager from './components/ShiftManager';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Dashboard />;
      case 'schedule':
        return <ShiftManager />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'staff':
        return (
          <div className="flex items-center justify-center h-[400px] text-slate-400">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-600">Staff Management</h3>
              <p>Module coming soon in the next update.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-10 max-w-[1400px] mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-4">
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Search anything..." 
                 className="bg-white border border-slate-200 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
               />
               <svg className="w-4 h-4 absolute left-3 top-3 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
             <div className="flex items-center space-x-1 text-xs text-slate-400 mono">
               <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-bold text-slate-500 tracking-tighter">CMD</span>
               <span>+</span>
               <span className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-bold text-slate-500 tracking-tighter">K</span>
             </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-700">James Wilson</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Site Manager</p>
              </div>
              <img src="https://picsum.photos/seed/manager/100/100" className="w-10 h-10 rounded-xl border-2 border-white shadow-md" alt="Avatar" />
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
      
      {/* Persistent Assistant Trigger */}
      <button 
        onClick={() => setActiveTab('ai-assistant')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-600/40 hover:scale-110 transition-transform z-50 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
      </button>
    </div>
  );
};

export default App;
