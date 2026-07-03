import React, { useState } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, AlertTriangle, 
  CheckCircle2, Info, FileText, Search, RefreshCw, ArrowRight, Eye, 
  Layout, Download, FileSpreadsheet, Layers, ShieldAlert, History
} from 'lucide-react';

export default function App() {
  // Left Sidebar State Config
  const [context, setContext] = useState('Analytics Dashboard');
  const [audience, setAudience] = useState('Expert Users');
  const [goal, setGoal] = useState('Revenue Filter');
  const [frameworks, setFrameworks] = useState(["Miller's", "WCAG", "Cognitive Load"]);

  // Application engine status
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');

  const removeFramework = (fw) => {
    setFrameworks(frameworks.filter(f => f !== fw));
  };

  const simulateAiAudit = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 1500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
        simulateAiAudit();
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans antialiased flex flex-col md:flex-row select-none">
      
      {/* ================= LEFT SIDEBAR: AUDITOR SETUP ================= */}
      <aside className="w-full md:w-80 bg-[#1E293B] border-r border-[#334155] flex flex-col shrink-0">
        
        {/* Sidebar Header Brand */}
        <div className="p-4 border-b border-[#334155] flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2563EB] rounded flex items-center justify-center text-white font-bold text-lg shadow-sm">
            ▲
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Auditor Setup</span>
        </div>

        {/* Tab Toggle Strip */}
        <div className="flex border-b border-[#334155] px-2 text-xs">
          <button 
            onClick={() => setActiveTab('upload')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${activeTab === 'upload' ? 'text-[#38BDF8] border-[#38BDF8]' : 'text-[#94A3B8] border-transparent hover:text-white'}`}
          >
            Upload New Screenshot
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors ${activeTab === 'history' ? 'text-[#38BDF8] border-[#38BDF8]' : 'text-[#94A3B8] border-transparent hover:text-white'}`}
          >
            Evaluation History
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto space-y-6 text-xs">
          
          {/* Analysis & Controls Dropzone Container */}
          <div className="space-y-2">
            <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Analysis & Controls</h3>
            <label className="border-2 border-dashed border-[#38BDF8] bg-[#0284C7]/10 rounded-lg p-6 block text-center cursor-pointer hover:bg-[#0284C7]/20 transition relative">
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              <UploadCloud size={32} className="mx-auto text-[#38BDF8] mb-2" />
              <p className="font-bold text-[#38BDF8]">Drop screenshot for HCI Audit</p>
              <p className="text-[#64748B] mt-0.5">Or click to parse spatial directory</p>

              {isAnalyzing && (
                <div className="absolute inset-0 bg-[#1E293B]/95 flex flex-col items-center justify-center p-2 rounded-lg">
                  <RefreshCw className="animate-spin text-[#38BDF8] mb-2" size={20} />
                  <span className="font-bold text-white">Parsing Vision Matrix...</span>
                </div>
              )}
            </label>
            <button onClick={simulateAiAudit} className="w-full py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded transition shadow-sm">
              Start AI Audit
            </button>
          </div>

          {/* Configuration Forms Parameter Mapping */}
          <div className="space-y-4 pt-4 border-t border-[#334155]">
            <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Audit Parameters</h3>
            
            <div>
              <label className="block font-semibold text-[#94A3B8] mb-1">Context</label>
              <div className="relative">
                <select value={context} onChange={(e) => setContext(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Analytics Dashboard</option>
                  <option>Transaction Portal</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#94A3B8] mb-1">Audience</label>
              <div className="relative">
                <select value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Expert Users</option>
                  <option>General Audience</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#94A3B8] mb-1">Goal</label>
              <div className="relative">
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Revenue Filter</option>
                  <option>Friction Minimization</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            {/* Framework Pills Section */}
            <div>
              <label className="block font-semibold text-[#94A3B8] mb-1">Frameworks (active)</label>
              <div className="flex flex-wrap gap-1.5 p-2 bg-[#0F172A] border border-[#334155] rounded min-h-[42px]">
                {frameworks.map(fw => (
                  <span key={fw} className="inline-flex items-center gap-1 bg-[#334155] text-white px-2 py-0.5 rounded text-[11px] font-medium">
                    {fw}
                    <button onClick={() => removeFramework(fw)} className="hover:bg-[#475569] rounded-full p-0.5">
                      <X size={10} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT MAIN AREA: EVALUATION RESULT CANVAS ================= */}
      <main className="flex-1 p-5 md:p-6 overflow-y-auto space-y-5">
        
        {/* Global Inspection Header Card */}
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-white">Evaluation Result</h1>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
            <span className="font-bold text-white uppercase tracking-wider bg-[#1E293B] px-2 py-0.5 rounded border border-[#334155]">
              AI HCI AUDIT REPORT: Revenue Dashboard v1.2
            </span>
            <span>• Verified Timestamp: July 3, 2026 @ 12:33 AM</span>
          </div>
        </div>

        {/* Executive Summary Dynamic Stripe Banner */}
        <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3.5">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">Executive Summary:</span>
            <span className="bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-bold text-xs px-2 py-0.5 rounded">
              Good (82%)
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] font-medium leading-relaxed sm:border-l sm:border-[#334155] sm:pl-4">
            Global executive Summary are good in societs for a sample dashboard UX analysis dashboard detailed, evidence-based data points mapped safely across production frameworks.
          </p>
        </div>

        {/* TOP LAYOUT SPLIT GRID ROW: DIALS CARD & COLOR CONTRAST CARD */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          
          {/* CARD 3: Cognitive Heuristics Dial Gauge Scores Row */}
          <div className="xl:col-span-2 bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#334155] pb-2">
              Cognitive Heuristics Scores (Miller's, Hick's)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Dial 1 */}
              <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
                <span className="text-[10px] font-bold text-[#94A3B8] uppercase block mb-2">Overall Cognitive Load</span>
                <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent border-t-[#F59E0B] border-r-[#F59E0B] rotate-45"></div>
                </div>
                <div className="text-sm font-bold text-[#F59E0B]">7.1/10 <span className="text-[10px] font-normal text-[#64748B]">(High)</span></div>
              </div>

              {/* Dial 2 */}
              <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
                <span className="text-[10px] font-bold text-[#94A3B8] uppercase block mb-2">Information Chunking (Miller's)</span>
                <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent border-t-[#10B981] border-r-[#10B981] rotate-12"></div>
                </div>
                <div className="text-sm font-bold text-[#10B981]">6.4/10</div>
                <span className="text-[9px] text-[#64748B] block mt-0.5">Avoid &gt; 7 groups</span>
              </div>

              {/* Dial 3 */}
              <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
                <span className="text-[10px] font-bold text-[#94A3B8] uppercase block mb-2">Decision Speed (Hick's)</span>
                <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                  <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent border-t-[#EF4444] border-r-[#EF4444] rotate-45"></div>
                </div>
                <div className="text-sm font-bold text-[#EF4444]">7.8/10</div>
                <span className="text-[9px] text-[#64748B] block mt-0.5">Excessive Filter Choices</span>
              </div>
            </div>
          </div>

          {/* CARD 4: Accessibility & Color Contrast Table Matrix */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#334155] pb-2">
              Accessibility & Color Contrast (WCAG 2.1)
            </h3>
            <span className="text-[10px] text-[#64748B] block font-medium -mt-1">Color Contrast Violations (WCAG)</span>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#94A3B8]">
                <thead>
                  <tr className="border-b border-[#334155] text-[#64748B] bg-[#0F172A]">
                    <th className="p-1.5 font-bold">Element</th>
                    <th className="p-1.5 font-bold">Ratio</th>
                    <th className="p-1.5 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#334155]">
                  <tr>
                    <td className="p-1.5 font-semibold text-white">Revenue Text</td>
                    <td className="p-1.5 font-mono">7.1:1</td>
                    <td className="p-1.5 text-right"><span className="bg-[#10B981]/20 text-[#10B981] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Pass AAA</span></td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold text-white">Help Icon</td>
                    <td className="p-1.5 font-mono">2.1:1</td>
                    <td className="p-1.5 text-right"><span className="bg-[#EF4444]/20 text-[#EF4444] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Fail AA</span></td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-semibold text-white">Inactive Tab</td>
                    <td className="p-1.5 font-mono">3.5:1</td>
                    <td className="p-1.5 text-right"><span className="bg-[#EF4444]/20 text-[#EF4444] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Fail AA</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* BOTTOM LAYOUT GRID ROW: VISUAL HEATMAP AND SPRINT REPOSITORY LOGS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          
          {/* CARD 5: Interaction Heuristics Visual Heatmap Bounding Boxes Container */}
          <div className="xl:col-span-2 bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#334155] pb-2">
              Interaction Heuristics (Fitts's, Visual Hierarchy)
            </h3>

            {/* Simulated Workspace Inspection Frame Box */}
            <div className="border border-[#334155] rounded-lg bg-[#0F172A] p-4 relative overflow-hidden min-h-[340px] flex items-center justify-center">
              {imageSrc ? (
                <div className="relative inline-block max-w-full">
                  <img src={imageSrc} alt="Audit Flat Target View" className="max-h-[300px] rounded border border-[#334155] object-contain" />
                  
                  {/* Absolute Mock Heatmap Badges layered exactly from reference layout visual */}
                  <div className="absolute top-4 right-4 bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                    ✓ Primary CTA: Good Size & Position (Fitts's)
                  </div>
                  <div className="absolute bottom-6 left-12 bg-[#2563EB] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    ℹ Large Sizes Heat
                  </div>
                  <div className="absolute bottom-4 right-12 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                    ⚠ Clear Visual Hierarchy
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 text-[#64748B]">
                  <Eye size={32} className="mx-auto text-[#475569] mb-1.5" />
                  <p className="text-xs font-medium">No layout uploaded. Ingest design flat snapshot on the left panel to map inspection points.</p>
                </div>
              )}
            </div>
          </div>

          {/* CARD 6: Actionable Sprint Fix Repository Backlog */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#334155] pb-2">
                Fix Repository
              </h3>
              <span className="text-[10px] text-[#64748B] block font-medium -mt-2">Prioritized Issues in lozenes, grounded in frameworks</span>

              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {/* Repos card entry 1 */}
                <div className="p-2.5 bg-[#0F172A] border-l-4 border-l-[#F59E0B] border border-[#334155] rounded-r text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span className="text-[#F59E0B]">UX-002: Hidden Filters</span>
                    <span className="text-[9px] bg-[#334155] px-1 rounded text-[#94A3B8]">Jakob's Law</span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px]"><strong className="text-white">Solution:</strong> Move to horizontal bar structure config.</p>
                  <div className="text-[10px] text-[#10B981] font-bold">ROI: Reduce task execution time bounds by 20%</div>
                </div>

                {/* Repos card entry 2 */}
                <div className="p-2.5 bg-[#0F172A] border-l-4 border-l-[#EF4444] border border-[#334155] rounded-r text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span className="text-[#EF4444]">UX-003: Filter Complexities</span>
                    <span className="text-[9px] bg-[#334155] px-1 rounded text-[#94A3B8]">Hick's Law</span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px]"><strong className="text-white">Solution:</strong> Group layout inputs beneath dynamic accordion layers.</p>
                  <div className="text-[10px] text-[#10B981] font-bold">ROI: Boost operator sorting speed performance by 35%</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#334155] text-right text-[10px] text-[#64748B] font-mono">
              ENGINE INDEX READY • COMPILED SECURELY
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}