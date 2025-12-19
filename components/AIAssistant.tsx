
import React, { useState, useRef, useEffect } from 'react';
import { getShiftInsights, chatWithShiftFlow } from '../services/geminiService';
import { AIInsight } from '../types';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleFetchInsights = async () => {
    setLoadingInsights(true);
    // Passing mock context
    const res = await getShiftInsights("Week 43: Engineering overhead is 120%, while Security is at 45% capacity.");
    setInsights(res.insights);
    setLoadingInsights(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMsg = query;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);

    try {
      const response = await chatWithShiftFlow(userMsg, []);
      setChatHistory(prev => [...prev, { role: 'ai', text: response || 'No response' }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-140px)] animate-in slide-in-from-bottom duration-500">
      <div className="lg:col-span-2 flex flex-col bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl">✨</div>
            <div>
              <h3 className="font-bold text-slate-800">ShiftFlow Assistant</h3>
              <p className="text-xs text-emerald-600 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Gemini 3 Flash Online
              </p>
            </div>
          </div>
          <button onClick={() => setChatHistory([])} className="text-xs text-slate-400 hover:text-rose-500 transition-colors">Clear History</button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
          {chatHistory.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <div className="text-6xl">🤖</div>
              <p className="max-w-xs text-slate-500 italic">"I can help you optimize next week's schedule or explain local labor compliance rules. How can I assist you today?"</p>
            </div>
          )}
          {chatHistory.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none' 
                  : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 p-4 rounded-2xl flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-slate-100 bg-white">
          <div className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about shift optimizations, labor laws, or staff trends..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all pr-16"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-3 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-lg shadow-indigo-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Operational Insights</h3>
            <button 
              onClick={handleFetchInsights}
              disabled={loadingInsights}
              className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
              title="Refresh Insights"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={loadingInsights ? 'animate-spin' : ''}><path d="M23 4v6h-6"></path><path d="M1 20v-6h6"></path><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
            </button>
          </div>

          <div className="space-y-4">
            {insights.length === 0 && !loadingInsights && (
              <p className="text-sm text-slate-400 text-center py-8">Click refresh to generate AI insights based on current data.</p>
            )}
            
            {loadingInsights && (
              <div className="space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="h-20 bg-slate-50 animate-pulse rounded-xl"></div>
                ))}
              </div>
            )}

            {insights.map((insight, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors cursor-default group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{insight.title}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    insight.impact === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'
                  }`}>{insight.impact}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{insight.description}</p>
                <div className="text-xs bg-white p-2 rounded-lg border border-slate-100 text-slate-700">
                  <span className="font-bold text-indigo-600 uppercase text-[9px]">Recommendation: </span>
                  {insight.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-3xl shadow-xl text-white overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-2">Predictive Staffing</h4>
            <p className="text-indigo-100 text-sm mb-4">AI predicts a 15% increase in logistics load for the next 48 hours.</p>
            <button className="w-full bg-white/20 backdrop-blur-md py-2 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors">Apply Auto-Schedule</button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4 4 4-4 4Z"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
