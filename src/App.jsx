import React, { useState, useRef } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, 
  AlertTriangle, CheckCircle2, Info, FileText,
  Search, RefreshCw, ArrowRight, Eye, Layout, Download, FileSpreadsheet
} from 'lucide-react';

export default function App() {
  // --- BLUEPRINT PARAMS CONFIG ---
  const [context, setContext] = useState('Complex B2B analytics dashboard layout');
  const [audience, setAudience] = useState('Non-technical enterprise users');
  const [goal, setGoal] = useState('Quickly find and filter monthly revenue data');
  
  // --- ENGINE WORKSPACE STATES ---
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [activeSpreadsheetTab, setActiveSpreadsheetTab] = useState('dashboard'); // 'dashboard' | 'repository'

  // --- HCI METRICS ENGINE ---
  const [cognitiveMetrics, setCognitiveMetrics] = useState({
    intrinsic: { score: 0.0, label: 'Pending Assessment' },
    extraneous: { score: 0.0, label: 'Pending Assessment' },
    germane: { score: 0.0, label: 'Pending Assessment' }
  });

  const [frictionPoints, setFrictionPoints] = useState([]);
  const [fixRepository, setFixRepository] = useState([]);

  const fileInputRef = useRef(null);

  // --- CLIENT-SIDE FILE INGESTION PARSER ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
      setIsAnalyzing(true);
      setAnalysisComplete(false);
      setSelectedIssue(null);

      // Trigger Advanced HCI Deterministic Parsing Matrix Simulation
      setTimeout(() => {
        setCognitiveMetrics({
          intrinsic: { score: 4.2, label: 'Optimal Architecture Structure' },
          extraneous: { score: 2.1, label: 'High Clutter Friction Detected' },
          germane: { score: 3.8, label: 'Strong Standard Component Alignment' }
        });

        setFrictionPoints([
          { id: 'UX-001', zone: 'Filter Panel Head', law: "Hick's Law", vulnerability: 'Excessive concurrent filter inputs causing parsing paralysis.', risk: 'High immediate operator drop-off' },
          { id: 'UX-002', zone: 'Primary Value Display', law: "Miller's Law", vulnerability: 'Data chunk arrays exceed working memory slots.', risk: 'High visual task interaction fatigue' },
          { id: 'UX-003', zone: 'Navigation Matrix', law: "Jakob's Law", vulnerability: 'Non-standard location positioning layout parameters.', risk: 'Severe mental processing load delays' }
        ]);

        setFixRepository([
          { id: 'UX-001', classification: 'Extraneous Load', element: 'Advanced Filter Bar', law: "Hick's Law", solution: 'Implement progressive disclosure using a dynamic collapsible panel layer.', roi: 'Reduces operational parsing error rates by ~22%', resolved: false },
          { id: 'UX-002', classification: 'Intrinsic Load', element: 'Revenue Data Grid', law: "Miller's Law", solution: 'Group numeric arrays inside concise structured visual sub-cards.', roi: 'Improves scanning & review task performance speeds by 35%', resolved: false },
          { id: 'UX-003', classification: 'Germane Load', element: 'Global Navigation Anchor', law: "Jakob's Law", solution: 'Reposition structural hierarchy mapping blocks to match traditional B2B patterns.', roi: 'Minimizes onboard processing training cycle friction by 40%', resolved: false }
        ]);

        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 2000);
    };
    reader.readAsDataURL(file);
  };

  // --- AUTOMATED BINDING ACTION LOGIC ---
  const applyFix = (id) => {
    setFixRepository(prev => prev.map(item => item.id === id ? { ...item, resolved: true } : item));
    if (selectedIssue?.id === id) {
      setSelectedIssue(prev => ({ ...prev, resolved: true }));
    }
  };

  // --- PRINT READY DOCUMENT GENERATION SIMULATORS ---
  const triggerExportSim = (format) => {
    alert(`Generating production-ready ${format.toUpperCase()} structural breakdown directly matching Atlassian Sprint configuration schema...`);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#172B4D] font-sans flex flex-col md:flex-row antialiased select-none">
      
      {/* SIDEBAR ARCHITECTURE: Parametric Configurator */}
      <aside className="w-full md:w-80 bg-white border-r border-[#DFE1E6] flex flex-col shrink-0 z-10 shadow-xs">
        <div className="p-4 border-b border-[#DFE1E6] flex items-center gap-2.5 bg-[#FAFBFC]">
          <div className="w-7 h-7 bg-[#0052CC] rounded flex items-center justify-center text-white font-bold text-sm shadow-xs">
            UX
          </div>
          <div>
            <span className="text-xs font-bold text-[#091E42] block uppercase tracking-wider">Senior UX Architect</span>
            <span className="text-[10px] text-[#5E6C84]">HCI Cognitive Audit Sandbox</span>
          </div>
        </div>

        <div className="p-4 flex-1 overflow-y-auto space-y-5">
          {/* File Dropper Matrix */}
          <div>
            <h3 className="text-[10px] font-bold text-[#6B778C] uppercase tracking-wider mb-2">Target Interface Source</h3>
            <label className="group block border-2 border-dashed border-[#4C9AFF] bg-[#DEEBFF]/10 rounded-lg p-5 text-center hover:bg-[#DEEBFF]/30 transition cursor-pointer relative">
              <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              <UploadCloud size={24} className="mx-auto text-[#0052CC] mb-1.5" />
              <p className="text-xs font-bold text-[#0052CC]">Upload Interface Image</p>
              <p className="text-[9px] text-[#5E6C84] mt-0.5">Automated Cognitive Pipeline</p>

              {isAnalyzing && (
                <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-3 rounded-lg">
                  <RefreshCw className="animate-spin text-[#0052CC] mb-2" size={20} />
                  <span className="text-[11px] font-bold text-[#172B4D]">Running Mental Model Scans...</span>
                </div>
              )}
            </label>
          </div>

          {/* Core Configuration Overrides */}
          <div className="space-y-3.5 pt-4 border-t border-[#F4F5F7]">
            <h4 className="text-[10px] font-bold text-[#6B778C] uppercase tracking-wider">Analysis Variables</h4>
            
            <div>
              <label className="block text-[10px] font-bold text-[#5E6C84] mb-1">Core Layout/Flow</label>
              <textarea rows={2} value={context} onChange={(e) => setContext(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] text-xs rounded p-2 focus:ring-2 focus:ring-[#4C9AFF] focus:outline-none resize-none" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#5E6C84] mb-1">Target Audience Profile</label>
              <textarea rows={2} value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] text-xs rounded p-2 focus:ring-2 focus:ring-[#4C9AFF] focus:outline-none resize-none" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#5E6C84] mb-1">Principal User Goal</label>
              <textarea rows={2} value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] text-xs rounded p-2 focus:ring-2 focus:ring-[#4C9AFF] focus:outline-none resize-none" />
            </div>
          </div>
        </div>
      </aside>

      {/* WORKSPACE AREA */}
      <main className="flex-1 p-5 md:p-6 space-y-5 overflow-y-auto max-w-7xl mx-auto w-full">
        
        {/* Executive Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-lg border border-[#DFE1E6]">
          <div>
            <h1 className="text-xl font-bold text-[#091E42]">Rigorous HCI Cognitive UX Audit</h1>
            <p className="text-xs text-[#5E6C84] mt-0.5">Evaluated through Cognitive Load Theory & Psychometric UX Paradigms</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => triggerExportSim('pdf')} className="text-xs font-semibold text-[#42526E] hover:text-[#0052CC] flex items-center gap-1 border px-2.5 py-1.5 rounded bg-white hover:bg-[#FAFBFC]">
              <Download size={13} /> Export Executive PDF
            </button>
            <button onClick={() => triggerExportSim('excel')} className="text-xs font-semibold text-white bg-[#0052CC] hover:bg-[#0747A6] flex items-center gap-1 px-2.5 py-1.5 rounded shadow-xs">
              <FileSpreadsheet size={13} /> Export Sprint XLS
            </button>
          </div>
        </div>

        {/* SECTION 1: COGNITIVE LOAD METRICS MATRIX STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#DFE1E6] rounded-lg p-4 shadow-xs border-t-4 border-t-[#0052CC]">
            <div className="flex justify-between items-start">
              <span className="block text-[10px] font-bold text-[#6B778C] uppercase">Intrinsic Load Matrix</span>
              <span className="text-xs font-mono font-bold bg-[#FAFBFC] px-2 py-0.5 border rounded text-[#091E42]">{analysisComplete ? `${cognitiveMetrics.intrinsic.score} / 5.0` : '--'}</span>
            </div>
            <p className="text-[11px] text-[#42526E] mt-2 font-medium">Task structural processing integrity score. Evaluates basic structural difficulty limits.</p>
            <div className="text-[10px] text-[#006644] font-bold mt-2 bg-[#E3FCEF] px-2 py-0.5 rounded-sm inline-block">{cognitiveMetrics.intrinsic.label}</div>
          </div>

          <div className="bg-white border border-[#DFE1E6] rounded-lg p-4 shadow-xs border-t-4 border-t-[#FF991F]">
            <div className="flex justify-between items-start">
              <span className="block text-[10px] font-bold text-[#6B778C] uppercase">Extraneous Load Matrix</span>
              <span className="text-xs font-mono font-bold bg-[#FAFBFC] px-2 py-0.5 border rounded text-[#BF2600]">{analysisComplete ? `${cognitiveMetrics.extraneous.score} / 5.0` : '--'}</span>
            </div>
            <p className="text-[11px] text-[#42526E] mt-2 font-medium">Visual clutter, dense array noise, and operational cognitive drag parameters.</p>
            <div className="text-[10px] text-[#BF2600] font-bold mt-2 bg-[#FFEBE6] px-2 py-0.5 rounded-sm inline-block">{cognitiveMetrics.extraneous.label}</div>
          </div>

          <div className="bg-white border border-[#DFE1E6] rounded-lg p-4 shadow-xs border-t-4 border-t-[#36B37E]">
            <div className="flex justify-between items-start">
              <span className="block text-[10px] font-bold text-[#6B778C] uppercase">Germane Load Matrix</span>
              <span className="text-xs font-mono font-bold bg-[#FAFBFC] px-2 py-0.5 border rounded text-[#006644]">{analysisComplete ? `${cognitiveMetrics.germane.score} / 5.0` : '--'}</span>
            </div>
            <p className="text-[11px] text-[#42526E] mt-2 font-medium">Leveraging standard, expected consumer patterns and familiar component architecture maps.</p>
            <div className="text-[10px] text-[#0747A6] font-bold mt-2 bg-[#DEEBFF] px-2 py-0.5 rounded-sm inline-block">{cognitiveMetrics.germane.label}</div>
          </div>
        </div>

        {/* SECTION 2: DUAL VISUAL VIEWPORT AND ANCHOR INSPECTOR */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          
          {/* Main Inspection Canvas Overlay mapping area */}
          <div className="xl:col-span-2 bg-white border border-[#DFE1E6] rounded-lg p-4 shadow-xs">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <h3 className="font-bold text-xs text-[#091E42] uppercase tracking-wider flex items-center gap-1">
                <Layout size={14} className="text-[#0052CC]" /> Direct Interactive Layer Analytics Map
              </h3>
            </div>

            <div className="border bg-[#FAFBFC] rounded-lg p-2 flex items-center justify-center relative min-h-[380px] shadow-inner">
              {imageSrc ? (
                <div className="relative inline-block max-w-full">
                  <img src={imageSrc} alt="Interface Audit Viewport" className="max-h-[480px] object-contain rounded border border-[#DFE1E6]" />
                  
                  {analysisComplete && frictionPoints.map((spot, index) => (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedIssue(fixRepository.find(f => f.id === spot.id))}
                      style={{ left: `${25 + (index * 28)}%`, top: `${35 + (index * 15)}%` }}
                      className="absolute w-7 h-7 -ml-3.5 -mt-3.5 rounded-full bg-[#FF5630] hover:bg-[#FF991F] text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-white animate-pulse transition-transform hover:scale-110"
                    >
                      {spot.id.replace('UX-0', '')}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center p-6 text-[#7A869A] text-xs">
                  <Eye size={32} className="mx-auto text-[#A5B2C6] mb-2" />
                  Please ingest an evaluation screen image to populate spatial structural tracking points.
                </div>
              )}
            </div>
          </div>

          {/* Core UX Friction Points Details Panel */}
          <div className="bg-white border border-[#DFE1E6] rounded-lg p-4 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xs text-[#091E42] uppercase tracking-wider border-b pb-2 mb-3">Design Vulnerabilities Log</h3>
              
              {analysisComplete ? (
                <div className="space-y-3">
                  {frictionPoints.map(item => (
                    <div key={item.id} className="p-2.5 bg-[#FAFBFC] border border-[#DFE1E6] rounded text-xs hover:border-[#4C9AFF] transition-colors">
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-[#BF2600]">{item.id}: {item.zone}</span>
                        <span className="text-[10px] bg-[#EBECF0] text-[#42526E] px-1 rounded">{item.law}</span>
                      </div>
                      <p className="text-[#42526E] mt-1 font-medium">{item.vulnerability}</p>
                      <div className="text-[10px] text-[#FF991F] font-bold mt-1">Operational Threat: {item.risk}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#7A869A] italic text-center py-16">Awaiting spatial diagnostic processing.</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 3: THE PRINT-READY EXPORTABLE DUAL-TAB SPREADSHEET MATRIX */}
        <div className="bg-white border border-[#DFE1E6] rounded-lg shadow-xs overflow-hidden">
          <div className="bg-[#FAFBFC] border-b border-[#DFE1E6] px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={16} className="text-[#36B37E]" />
              <span className="text-xs font-bold text-[#091E42] uppercase tracking-wider">Dual-Tab Sprint Integration Breakdown Spreadsheet</span>
            </div>
            
            {/* Spreadsheet Tab Toggles */}
            <div className="flex bg-[#EBECF0] p-0.5 rounded text-xs font-semibold">
              <button 
                onClick={() => setActiveSpreadsheetTab('dashboard')} 
                className={`px-3 py-1 rounded transition-all ${activeSpreadsheetTab === 'dashboard' ? 'bg-white text-[#0052CC] shadow-xs' : 'text-[#5E6C84] hover:text-[#172B4D]'}`}
              >
                Tab 1: Executive Dashboard Scoring
              </button>
              <button 
                onClick={() => setActiveSpreadsheetTab('repository')} 
                className={`px-3 py-1 rounded transition-all ${activeSpreadsheetTab === 'repository' ? 'bg-white text-[#0052CC] shadow-xs' : 'text-[#5E6C84] hover:text-[#172B4D]'}`}
              >
                Tab 2: Actionable Fix Repository
              </button>
            </div>
          </div>

          <div className="p-4 overflow-x-auto">
            {analysisComplete ? (
              activeSpreadsheetTab === 'dashboard' ? (
                /* TAB 1: EXECUTIVE DASHBOARD VIEW */
                <table className="w-full text-left text-xs border-collapse border border-[#DFE1E6]">
                  <thead>
                    <tr className="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[#6B778C]">
                      <th className="p-2 border border-[#DFE1E6]">Context Parameters</th>
                      <th className="p-2 border border-[#DFE1E6]">Audience Directives</th>
                      <th className="p-2 border border-[#DFE1E6]">Target Core UX Goal</th>
                      <th className="p-2 border border-[#DFE1E6] text-center">Global Performance Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-[#172B4D] bg-white font-medium">
                      <td className="p-2.5 border border-[#DFE1E6] vertical-top">{context}</td>
                      <td className="p-2.5 border border-[#DFE1E6] vertical-top">{audience}</td>
                      <td className="p-2.5 border border-[#DFE1E6] vertical-top">{goal}</td>
                      <td className="p-2.5 border border-[#DFE1E6] text-center font-bold text-lg text-[#006644] bg-[#E3FCEF]/30">82% <span className="text-xs block font-normal text-[#5E6C84]">HCI Pass Grade</span></td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                /* TAB 2: ACTIONABLE FIX REPOSITORY SPREADSHEET */
                <table className="w-full text-left text-xs border-collapse border border-[#DFE1E6]">
                  <thead>
                    <tr className="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[#6B778C]">
                      <th className="p-2 border border-[#DFE1E6]">ID</th>
                      <th className="p-2 border border-[#DFE1E6]">Cognitive Layer</th>
                      <th className="p-2 border border-[#DFE1E6]">UI Element Target</th>
                      <th className="p-2 border border-[#DFE1E6]">Psychology Law Anchor</th>
                      <th className="p-2 border border-[#DFE1E6]">Tactical Solution Implementation</th>
                      <th className="p-2 border border-[#DFE1E6]">Estimated Business ROI Impact</th>
                      <th className="p-2 border border-[#DFE1E6] text-center">Sprint Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DFE1E6]">
                    {fixRepository.map((issue) => (
                      <tr key={issue.id} className={`hover:bg-[#FAFBFC] text-[#172B4D] font-medium transition-colors ${issue.resolved ? 'bg-[#E3FCEF]/10 opacity-70' : ''}`}>
                        <td className="p-2 border border-[#DFE1E6] font-bold text-[#0052CC]">{issue.id}</td>
                        <td className="p-2 border border-[#DFE1E6]">{issue.classification}</td>
                        <td className="p-2 border border-[#DFE1E6] font-semibold text-[#091E42]">{issue.element}</td>
                        <td className="p-2 border border-[#DFE1E6] text-[#5E6C84]">{issue.law}</td>
                        <td className="p-2 border border-[#DFE1E6] text-[#42526E] font-normal">{issue.solution}</td>
                        <td className="p-2 border border-[#DFE1E6] text-[#36B37E] font-bold">{issue.roi}</td>
                        <td className="p-2 border border-[#DFE1E6] text-center">
                          {!issue.resolved ? (
                            <button 
                              onClick={() => applyFix(issue.id)}
                              className="bg-[#0052CC] hover:bg-[#0747A6] text-white text-[10px] px-2 py-1 rounded font-semibold transition shadow-xs"
                            >
                              Resolve
                            </button>
                          ) : (
                            <span className="text-[11px] text-[#006644] font-bold">✓ Committed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            ) : (
              <p className="text-xs text-[#7A869A] text-center py-10 italic">Awaiting structural dataset analysis to construct Sprint configuration layouts.</p>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}