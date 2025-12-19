
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'schedule', icon: '📅', label: 'Schedule' },
    { id: 'staff', icon: '👥', label: 'Staff' },
    { id: 'ai-assistant', icon: '✨', label: 'AI Optimizer' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
          S
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">ShiftFlow</h1>
          <p className="text-[10px] text-indigo-300 font-mono tracking-widest uppercase">System V</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto">
        <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Workspace Utilization</p>
          <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[78%]"></div>
          </div>
          <p className="text-xs text-emerald-400 mt-2 font-medium">78% Efficiency High</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
