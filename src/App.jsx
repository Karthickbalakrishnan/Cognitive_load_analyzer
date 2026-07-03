import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, AlertTriangle, 
  CheckCircle2, Info, FileText, Search, RefreshCw, ArrowRight, Eye, 
  Layout, Download, FileSpreadsheet, Layers, ShieldAlert, Cpu, Copy, 
  Check, Sparkles
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

// --- PURPOSE-BUILT ATLASSIAN DESIGN SYSTEM PRIMITIVES ---
const Button = ({ children, appearance = 'default', onClick, disabled, icon: Icon }) => {
  const base = "inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer select-none focus:ring-2 focus:ring-[#4C9AFF] focus:outline-none";
  const styles = {
    default: "bg-[#F4F5F7] text-[#172B4D] hover:bg-[#EBECF0] border border-[#DFE1E6]",
    primary: "bg-[#0052CC] text-white hover:bg-[#0747A6] shadow-xs",
    subtle: "text-[#5E6C84] hover:bg-[#EBECF0] hover:text-[#172B4D]",
    danger: "bg-[#FF5630] text-white hover:bg-[#DE350B]"
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles[appearance]} disabled:opacity-50 disabled:cursor-not-allowed`}>
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
};

const Lozenge = ({ children, appearance = 'default' }) => {
  const styles = {
    default: "bg-[#EBECF0] text-[#42526E]",
    success: "bg-[#E3FCEF] text-[#006644]",
    removed: "bg-[#FFEBE6] text-[#BF2600]",
    moved: "bg-[#FFF0B3] text-[#7A869A]"
  };
  return <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${styles[appearance]}`}>{children}</span>;
};

const SeverityBadge = ({ severity }) => {
  const styles = {
    Critical: "bg-[#FFEBE6] text-[#BF2600] border-l-2 border-[#FF5630]",
    High: "bg-[#FFF0B3] text-[#7A869A] border-l-2 border-[#FFAB00]",
    Medium: "bg-[#DEEBFF] text-[#0747A6] border-l-2 border-[#0052CC]",
    Low: "bg-[#E3FCEF] text-[#006644] border-l-2 border-[#36B37E]"
  };
  return <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${styles[severity]}`}>{severity}</span>;
};

export default function App() {
  // --- CORE SYSTEM ROUTERS ---
  const [activeApplication, setActiveApplication] = useState('cogniscan'); 
  const [activeModule, setActiveModule] = useState('cognitive'); 
  
  // --- TELEMETRY EXPERT PARAMETERS ---
  const [fittsTargetDiameter, setFittsTargetDiameter] = useState(32); 
  const [gestaltProximityGap, setGestaltProximityGap] = useState(24);   
  const [simulatedStressLevel, setSimulatedStressLevel] = useState('High Pressure');

  // --- DYNAMIC DATA MANAGEMENT STORES ---
  const [imageSrc, setImageSrc] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanPipelineStage, setScanPipelineStage] = useState('');
  const [activeFrictionRow, setActiveFrictionRow] = useState(null);

  // --- GENERATE TELEMETRY SCORE DIALS MATRIX ACCORDING TO USER VALUES ---
  const calcMillerScore = Math.max(30, 100 - (gestaltProximityGap * 1.3)).toFixed(0);
  const calcHickScore = (simulatedStressLevel === 'High Pressure' ? 58 : 84);
  const calcFittsScore = Math.min(100, fittsTargetDiameter * 2.0).toFixed(0);

  const dynamicRadarChartData = [
    { subject: "Miller's Law", A: Number(calcMillerScore), fullMark: 100 },
    { subject: "Visual Hierarchy", A: Math.min(95, 55 + (gestaltProximityGap * 0.8)), fullMark: 100 },
    { subject: "Accessibility", A: Math.min(100, fittsTargetDiameter * 1.8), fullMark: 100 },
    { subject: "Color Contrast", A: 88, fullMark: 100 },
    { subject: "Fitts's Law", A: Number(calcFittsScore), fullMark: 100 },
    { subject: "Hick's Law", A: calcHickScore, fullMark: 100 }
  ];

  const executeImageScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    const stages = [
      "AI-AVS Ingestion Lock...", 
      "Parsing Spatial Layout Coordinate Matrices...", 
      "Computing Bounding Dial Targets...",
      "Structuring Audit Metrics JSON Report..."
    ];
    
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setScanPipelineStage(stage);
        if (index === stages.length - 1) {
          setIsScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 400);
    });
  };

  const loadDemoMode = () => {
    setImageSrc("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80");
    executeImageScan();
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#172B4D] font-sans antialiased flex flex-col">
      
      {/* ATLASSIAN CONFLUENCE STYLED APPLICATION BAR */}
      <header className="h-12 bg-[#0747A6] text-white px-4 flex items-center justify-between z-20 shrink-0 select-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-black tracking-tight text-sm">
            <Layers className="text-[#4C9AFF]" size={18} />
            <span>CogniScan Suite Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <button onClick={() => { setActiveApplication('cogniscan'); setScanComplete(false); setImageSrc(null); }} className={`px-3 py-1.5 rounded transition-colors ${activeApplication === 'cogniscan' ? 'bg-[#0C1E3C] text-white font-bold' : 'text-[#DEEBFF] hover:bg-[#0052CC]'}`}>
              CogniScan Vision Analyser
            </button>
            <button onClick={() => { setActiveApplication('audit_tool'); }} className={`px-3 py-1.5 rounded transition-colors ${activeApplication === 'audit_tool' ? 'bg-[#0C1E3C] text-white font-bold' : 'text-[#DEEBFF] hover:bg-[#0052CC]'}`}>
              UX Cognitive Audit Engine
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#DEEBFF]">Stress Profile:</span>
          <select 
            value={simulatedStressLevel} 
            onChange={(e) => setSimulatedStressLevel(e.target.value)}
            className="bg-[#0C1E3C] text-white text-xs border border-[#172B4D] rounded px-2 py-0.5"
          >
            <option>High Pressure</option>
            <option>Ambient Environment</option>
          </select>
        </div>
      </header>

      {/* CORE FRAME LAYOUT */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* PARAMENTRIC TELEMETRY PARAMETERS CONTROLS SIDEBAR */}
        <aside className="w-full md:w-64 bg-[#0C1E3C] text-[#DEEBFF] flex flex-col shrink-0 border-r border-[#172B4D] select-none">
          <div className="p-4 bg-[#0747A6]/30 border-b border-[#172B4D]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A869A] block">Architect Telemetry Controls</span>
            <span className="text-xs font-bold text-white mt-0.5 block">Live Parametric Overrides</span>
          </div>

          <div className="p-4 flex-1 space-y-5 text-xs">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#A5B2C6] font-semibold">Fitts's Target Box Diameter</span>
                <span className="font-mono text-white font-bold">{fittsTargetDiameter}px</span>
              </div>
              <input type="range" min="16" max="64" value={fittsTargetDiameter} onChange={(e) => setFittsTargetDiameter(Number(e.target.value))} className="w-full accent-[#0052CC]" />
            </div>

            <div className="space-y-1.5 pt-3 border-t border-[#172B4D]">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[#A5B2C6] font-semibold">Gestalt Proximity Grid Spacing</span>
                <span className="font-mono text-white font-bold">{gestaltProximityGap}px</span>
              </div>
              <input type="range" min="8" max="48" value={gestaltProximityGap} onChange={(e) => setGestaltProximityGap(Number(e.target.value))} className="w-full accent-[#36B37E]" />
            </div>

            {activeApplication === 'audit_tool' && (
              <div className="pt-4 border-t border-[#172B4D] space-y-1.5">
                <span className="block text-[9px] font-bold text-[#7A869A] uppercase tracking-wider">Audit Submodules</span>
                {['cognitive', 'friction', 'recommendations', 'business', 'executive'].map(m => (
                  <button key={m} onClick={() => setActiveModule(m)} className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold capitalize ${activeModule === m ? 'bg-[#0052CC] text-white' : 'text-[#DEEBFF] hover:bg-[#0747A6]/30'}`}>{m.replace('_', ' ')}</button>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* WORKSPACE CONTENT LAYOUT MAIN BOARD AREA */}
        <main className="flex-1 bg-[#F4F5F7] p-4 md:p-6 overflow-y-auto space-y-5">
          
          {activeApplication === 'cogniscan' && (
            <div className="space-y-5">
              
              {/* Dropzone area triggers state change */}
              {!scanComplete ? (
                <div className="bg-white border border-[#DFE1E6] rounded-lg p-8 text-center max-w-2xl mx-auto shadow-xs space-y-4">
                  <div className="border-2 border-dashed border-[#4C9AFF] bg-[#DEEBFF]/10 p-10 rounded-lg relative">
                    <UploadCloud size={36} className="text-[#0052CC] mx-auto mb-2" />
                    <span className="block font-bold text-xs text-[#0052CC]">Ingest Target Interface Viewport Screenshot</span>
                    <Button appearance="primary" onClick={loadDemoMode} className="mt-4">Launch Interactive Enterprise Mock</Button>
                    
                    {isScanning && (
                      <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-4">
                        <div className="w-10 h-10 rounded-full border-4 border-t-[#0052CC] border-r-transparent animate-spin mb-2"></div>
                        <span className="text-xs font-bold text-[#091E42] tracking-wide animate-pulse">{scanPipelineStage}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                
                /* THE SPECIFIED EVALUATION RESULT GRID SYSTEM CANVAS */
                <div className="space-y-5 max-w-6xl mx-auto">
                  
                  {/* CARD 1: EXPLICIT HCI REPORT HEADER ROW IDENTIFIER */}
                  <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="text-[#0052CC]" size={18} />
                      <div>
                        <h2 className="text-sm font-bold text-[#091E42]">AI HCI AUDIT REPORT: Revenue Dashboard</h2>
                        <span className="text-[10px] text-[#7A869A] block font-mono">Timestamped Cycle: July 3, 2026 @ 12:57 PM</span>
                      </div>
                    </div>
                    <Lozenge appearance="success">AI-AVS Pass Verified</Lozenge>
                  </div>

                  {/* CARD 2: EXECUTIVE SUMMARY SUB HEADER ACCORDING TO USER LOG FOOTPRINT */}
                  <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs flex items-start sm:items-center gap-4 border-l-4 border-l-[#36B37E]">
                    <div className="shrink-0">
                      <span className="text-[10px] font-bold uppercase text-[#6B778C] block mb-0.5">Executive Summary</span>
                      <span className="inline-flex items-center bg-[#E3FCEF] text-[#006644] font-bold text-xs px-2 py-0.5 rounded-sm shadow-xs">Good (82%)</span>
                    </div>
                    <p className="text-xs text-[#42526E] font-medium leading-relaxed border-l pl-4 border-[#DFE1E6]">
                      Global executive Summary are good in societs for a sample dashboard UX analysis dashboard detailed, evidence-based data. Layout targets provide high efficiency mappings across active usage parameters.
                    </p>
                  </div>

                  {/* CARD 3: COGNITIVE HEURISTICS SCORES DIALS ROW FRAME WITH 3 GRAPH POINTER DIALS */}
                  <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block border-b pb-1.5">Cognitive Heuristics Scores (Miller's, Hick's)</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Subgraph Indicator 1 */}
                      <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
                        <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Overall Cognitive Load</span>
                        <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-[#E3FCEF] border-l-[#E3FCEF] border-t-[#0052CC] border-r-[#0052CC] rotate-45"></div>
                        </div>
                        <div className="text-base font-bold text-[#091E42]">4.2 / 5.0</div>
                        <span className="text-[9px] text-[#36B37E] font-bold block">Stable Processing Index</span>
                      </div>

                      {/* Subgraph Indicator 2 */}
                      <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
                        <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Information Chunking (Miller's)</span>
                        <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-[#E3FCEF] border-l-[#E3FCEF] border-t-[#36B37E] border-r-[#36B37E] rotate-12"></div>
                        </div>
                        <div className="text-base font-bold text-[#36B37E]">{calcMillerScore} / 100</div>
                        <span className="text-[9px] text-[#7A869A] block font-medium">Derived from {gestaltProximityGap}px gap parameters</span>
                      </div>

                      {/* Subgraph Indicator 3 */}
                      <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
                        <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Decision Speed (Hick's Law)</span>
                        <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                          <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-[#E3FCEF] border-l-[#E3FCEF] border-t-[#FF991F] border-r-[#FF5630] rotate-45"></div>
                        </div>
                        <div className="text-base font-bold text-[#FF5630]">{calcHickScore} / 100</div>
                        <span className="text-[9px] text-[#5E6C84] block font-medium">Active Load Level: {simulatedStressLevel}</span>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ARCHITECTURE GRIDS SPLIT ROW */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    
                    {/* CARD 4: ACCESSIBILITY & COLOR CONTRAST LOG */}
                    <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block border-b pb-1.5">Accessibility & Color Contrast (WCAG 2.1)</span>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-[#172B4D]">
                          <thead>
                            <tr className="bg-[#FAFBFC] border-b text-[#6B778C] font-bold">
                              <th className="p-2 text-[10px] uppercase">Interfacial Element Node</th>
                              <th className="p-2 text-[10px] uppercase">Measured Ratio</th>
                              <th className="p-2 text-[10px] uppercase text-right">Status Compliance</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F4F5F7]">
                            <tr>
                              <td className="p-2 font-bold text-[#091E42]">Main Metric Large Display Text</td>
                              <td className="p-2 font-mono text-[11px]">7.2:1</td>
                              <td className="p-2 text-right"><span className="bg-[#E3FCEF] text-[#006644] text-[9px] px-1.5 py-0.5 rounded font-bold">Pass AAA</span></td>
                            </tr>
                            <tr>
                              <td className="p-2 font-bold text-[#091E42]">Secondary Dynamic Action Anchor Labels</td>
                              <td className="p-2 font-mono text-[11px]">3.1:1</td>
                              <td className="p-2 text-right"><span className="bg-[#FFEBE6] text-[#BF2600] text-[9px] px-1.5 py-0.5 rounded font-bold">Fail AA</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* CARD 5: INTERACTION HEURISTICS VISUAL SANDBOX MAP BOX */}
                    <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block border-b pb-1.5">Interaction Heuristics (Fitts's, Visual Hierarchy)</span>
                      <div className="border bg-[#FAFBFC] rounded p-2 flex items-center justify-center relative min-h-[160px] shadow-inner">
                        <img src={imageSrc} alt="Inspection flat blueprint target segment" className="max-h-[140px] rounded opacity-90 border border-[#DFE1E6]" />
                        
                        {/* Interactive Selection hit box tracking box mapping representation */}
                        <div 
                          style={{ width: `${fittsTargetDiameter}px`, height: `${fittsTargetDiameter}px` }}
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed flex items-center justify-center text-[8px] font-bold ${fittsTargetDiameter >= 44 ? 'border-[#36B37E] bg-[#E3FCEF]/40 text-[#006644]' : 'border-[#FF5630] bg-[#FFEBE6]/50 text-[#BF2600]'}`}
                        >
                          {fittsTargetDiameter}px
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* CARD 6: FIX REPOSITORY SPREADSHEET TASK ACTIONS SCHEMAS LOG CONTAINER */}
                  <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs space-y-3">
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C]">Fix Repository (Sprint Allocation Backlog)</span>
                      <span className="text-[10px] bg-[#EBECF0] text-[#42526E] px-2 py-0.5 rounded font-bold">Dignity-First & Stress-First Grounded fixes</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-[#FAFBFC] border border-[#DFE1E6] rounded border-l-4 border-l-[#FF991F] space-y-1.5">
                        <div className="flex justify-between font-bold">
                          <span className="text-[#091E42]">UX-001: Implement Progressive Disclosure Panel Drawers</span>
                          <span className="text-[10px] bg-[#DEEBFF] text-[#0747A6] px-1.5 rounded">Hick's Law</span>
                        </div>
                        <p className="text-[#42526E] font-normal">Collapse second-tier filter matrices to reduce task calculation time parameters under high operator operational fatigue cycles.</p>
                        <div className="text-[10px] text-[#36B37E] font-bold pt-1">Estimated ROI Gain: Reduces step drop-off parameters by ~22%</div>
                      </div>

                      <div className="p-3 bg-[#FAFBFC] border border-[#DFE1E6] rounded border-l-4 border-l-[#FF5630] space-y-1.5">
                        <div className="flex justify-between font-bold">
                          <span className="text-[#091E42]">UX-002: Upscale Element Target Hit Dimensions</span>
                          <span className="text-[10px] bg-[#DEEBFF] text-[#0747A6] px-1.5 rounded">Fitts's Law</span>
                        </div>
                        <p className="text-[#42526E] font-normal">Expand component layout interaction diameter to meet safe bounds criteria. Current setting measures below 44px rules.</p>
                        <div className="text-[10px] text-[#36B37E] font-bold pt-1">Estimated ROI Gain: Boosts selection targeting speed mechanics by 28%</div>
                      </div>
                    </div>
                  </div>

                  <Button appearance="subtle" onClick={() => { setScanComplete(false); setImageSrc(null); }} icon={RefreshCw} className="mx-auto block">
                    Clear Workspace Environment Ingestion Material
                  </Button>

                </div>
              )}

            </div>
          )}

          {/* APPLICATION TWO DEFAULT ALTERNATE SCREEN SWITCH BACKUP PANEL */}
          {activeApplication === 'audit_tool' && (
            <div className="p-6 text-center bg-white border border-[#DFE1E6] rounded max-w-lg mx-auto text-xs space-y-3 shadow-xs">
              <ShieldAlert size={28} className="text-[#0052CC] mx-auto" />
              <h3 className="font-bold text-[#091E42]">Text-Driven Audit Model Workspace Ready</h3>
              <p className="text-[#5E6C84]">Switch application headers to return back to the interactive screenshot visual parser canvas overlay environment.</p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}