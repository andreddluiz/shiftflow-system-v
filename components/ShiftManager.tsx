
import React from 'react';
import { MOCK_SHIFTS, MOCK_EMPLOYEES } from '../constants';
import { ShiftStatus } from '../types';

const ShiftManager: React.FC = () => {
  const getEmployeeName = (id: string) => MOCK_EMPLOYEES.find(e => e.id === id)?.name || 'Unknown';
  const getEmployeeAvatar = (id: string) => MOCK_EMPLOYEES.find(e => e.id === id)?.avatar || '';

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Shift Schedule</h2>
          <p className="text-slate-500">Manage and coordinate employee rotations</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
          <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium">Weekly</button>
          <button className="px-4 py-1.5 text-slate-500 rounded-lg text-sm font-medium hover:bg-slate-50">Monthly</button>
          <button className="px-4 py-1.5 text-slate-500 rounded-lg text-sm font-medium hover:bg-slate-50">Timeline</button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Employee</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Department</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Time Window</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_SHIFTS.map((shift) => (
              <tr key={shift.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img src={getEmployeeAvatar(shift.employeeId)} className="w-8 h-8 rounded-full border border-slate-200" alt="" />
                    <span className="font-medium text-slate-700">{getEmployeeName(shift.employeeId)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{shift.department}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <p className="text-slate-700 font-medium">{new Date(shift.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(shift.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className="text-xs text-slate-400">{new Date(shift.startTime).toLocaleDateString()}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                    shift.status === ShiftStatus.ACTIVE ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' :
                    shift.status === ShiftStatus.SCHEDULED ? 'bg-indigo-100 text-indigo-600 border border-indigo-200' :
                    'bg-slate-100 text-slate-400 border border-slate-200'
                  }`}>
                    {shift.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-center">
          <button className="text-sm text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">+ Add New Custom Shift</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl">
          <h4 className="font-bold text-emerald-800 mb-1">On Time Rate</h4>
          <div className="text-3xl font-bold text-emerald-600">98.4%</div>
          <p className="text-xs text-emerald-500 mt-2">Historical peak for this quarter</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl">
          <h4 className="font-bold text-amber-800 mb-1">Overtime Risk</h4>
          <div className="text-3xl font-bold text-amber-600">Low</div>
          <p className="text-xs text-amber-500 mt-2">3 employees nearing limit</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-900/10">
          <h4 className="font-bold text-white mb-4">Quick Assign</h4>
          <div className="flex -space-x-3 mb-4">
             {MOCK_EMPLOYEES.slice(0, 4).map(e => (
               <img key={e.id} src={e.avatar} className="w-10 h-10 rounded-full border-2 border-slate-900" alt={e.name} />
             ))}
             <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">+2</div>
          </div>
          <button className="w-full bg-indigo-600 py-2 rounded-xl text-white font-medium text-sm hover:bg-indigo-700 transition-all">Launch AI Autocomplete</button>
        </div>
      </div>
    </div>
  );
};

export default ShiftManager;
