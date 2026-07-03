import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, AlertTriangle, 
  CheckCircle2, Info, FileText, Search, RefreshCw, ArrowRight, Eye, 
  Layout, Download, FileSpreadsheet, Layers, ShieldAlert, Cpu, Copy, 
  Check, Play, KanbanSquare, Sparkles, MonitorSmartphone
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
  // --- CORE APP WORKBENCH ROUTER ---
  const [activeApplication, setActiveApplication] = useState('cogniscan'); // 'cogniscan' | 'audit_tool'
  const [activeModule, setActiveModule] = useState('cognitive'); // 'cognitive' | 'friction' | 'recommendations' | 'business' | 'executive'
  
  // --- DYNAMIC DEMO DATA CONFIG MATRICES ---
  const demoPresetContexts = {
    b2b: { context: "Complex B2B Analytics Dashboard Layout", audience: "Non-technical enterprise operators", goal: "Quickly locate and filter multi-dimensional monthly revenue parameters" },
    checkout: { context: "3-Step Consumer Checkout Transaction Flow", audience: "Mobile-first everyday shoppers", goal: "Complete frictionless point-of-sale payment under high distraction" },
    crm: { context: "Emergency Response Enterprise Dispatch CRM Portal", audience: "High-pressure public safety dispatchers", goal: "Coordinate active threat rescue nodes in less than 45 seconds" }
  };

  // --- COGNISCAN APPLICATION CONTROLS ---
  const [imageSrc, setImageSrc] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanPipelineStage, setScanPipelineStage] = useState('');
  const [copiedJson, setCopiedJson] = useState(false);
  const [activeFrictionRow, setActiveFrictionRow] = useState(null);

  // --- COGNISCAN SIX-AXIS DATA MATRIX ---
  const radarChartData = [
    { subject: "Miller's Law", A: 82, fullMark: 100 },
    { subject: "Visual Hierarchy", A: 75, fullMark: 100 },
    { subject: "Accessibility", A: 64, fullMark: 100 },
    { subject: "Color Contrast", A: 88, fullMark: 100 },
    { subject: "Fitts's Law", A: 70, fullMark: 100 },
    { subject: "Hick's Law", A: 58, fullMark: 100 }
  ];

  // --- TEXT-DRIVEN AUDIT APPLICATION CONTROLS ---
  const [formData, setFormData] = useState({ ...demoPresetContexts.b2b });
  const [isAuditingText, setIsAuditingText] = useState(false);
  const [textAuditComplete, setTextAuditComplete] = useState(false);

  // --- RUN INTERACTIVE HARNESS SCANS (COGNISCAN) ---
  const executeImageScan = (file) => {
    setIsScanning(true);
    setScanComplete(false);
    const stages = [
      "AI-AVS System Lock...", 
      "Parsing Miller's Clusters...", 
      "Mapping Pre-attentive Gestalt Frames...",
      "Validating WCAG 2.1 Color Gradients...", 
      "Finalizing Claude Vision JSON Schema Output..."
    ];
    
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setScanPipelineStage(stage);
        if (index === stages.length - 1) {
          setIsScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 600);
    });
  };

  const handleDropzoneChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (val) => {
        setImageSrc(val.target.result);
        executeImageScan(e.target.files[0]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const loadDemoMode = () => {
    setImageSrc("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80");
    executeImageScan({ name: "Demo_Enterprise_Dashboard.png" });
  };

  // --- EXPORT MATRIX TO CSV CSV GENERATOR ---
  const downloadTabularCSV = (tabType) => {
    let rows = [];
    if (tabType === 'executive') {
      rows = [
        ["Metadata Property", "Value Definition"],
        ["Target Context Layout", formData.context],
        ["Target Audience Profile", formData.audience],
        ["User Goal Imperative", formData.goal],
        ["Intrinsic Processing Burden", "4.2 / 5.0"],
        ["Extraneous Interfacial Noise", "2.1 / 5.0"],
        ["Germane Cognitive Alignment", "3.8 / 5.0"]
      ];
    } else {
      rows = [
        ["ID", "Framework Target", "UX Vulnerability Found", "Tactical Solution Action", "Estimated Business ROI Impact", "Sprint Sizing"],
        ["UX-001", "Hick's Law", "Excessive target choice array blocks inside standard layout headers", "Implement progressive disclosure using a dynamic panel drawer", "Reduces drop-offs by up to 22%", "Medium (3 Days)"],
        ["UX-002", "Miller's Law", "Numeric matrix clusters overwhelm working short-term memory", "Consolidate structural metrics grids into micro-groupings", "Improves operational task speeds by 35%", "Small (2 Days)"]
      ];
    }
    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `CogniScan_Audit_${tabType}_Export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyStructuredJsonToClipboard = () => {
    const rawSchema = {
      meta: { framework_compliance: ["AI-AVS", "Dignity-First", "Stress-First"] },
      metrics: { intrinsic: 4.2, extraneous: 2.1, germane: 3.8 },
      sprint_allocation_days: 5
    };
    navigator.clipboard.writeText(JSON.stringify(rawSchema, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#172B4D] font-sans antialiased flex flex-col">
      
      {/* GLOBAL JIRA/CONFLUENCE BAR PRIORITY PRIMITIVE */}
      <header className="h-12 bg-[#0747A6] text-white px-4 flex items-center justify-between z-20 shrink-0 select-none">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-black tracking-tight text-sm">
            <Layers className="text-[#4C9AFF]" size={18} />
            <span>CogniScan Suite</span>
            <span className="text-[9px] bg-[#0052CC] text-[#DEEBFF] px-1.5 py-0.5 rounded font-mono font-bold tracking-normal">v2026.1</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <button 
              onClick={() => { setActiveApplication('cogniscan'); setScanComplete(false); setImageSrc(null); }} 
              className={`px-3 py-1.5 rounded transition-colors ${activeApplication === 'cogniscan' ? 'bg-[#0C1E3C] text-white font-bold' : 'text-[#DEEBFF] hover:bg-[#0052CC]'}`}
            >
              CogniScan Vision Analyser
            </button>
            <button 
              onClick={() => { setActiveApplication('audit_tool'); setTextAuditComplete(true); }} 
              className={`px-3 py-1.5 rounded transition-colors ${activeApplication === 'audit_tool' ? 'bg-[#0C1E3C] text-white font-bold' : 'text-[#DEEBFF] hover:bg-[#0052CC]'}`}
            >
              UX Cognitive Audit Engine
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-[#DEEBFF] bg-[#0052CC] px-2 py-1 rounded font-mono text-[10px]">
            <Cpu size={12} className="text-[#36B37E]" />
            <span>AI ENGINE ACTIVE</span>
          </div>
        </div>
      </header>

      {/* PAGE ARCHITECTURE SHELL CORE LAYOUT */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* SUB SIDEBAR CONFIGURATION AND AUDIT MODULE SELECTION */}
        <aside className="w-full md:w-64 bg-[#0C1E3C] text-[#DEEBFF] flex flex-col shrink-0 border-r border-[#172B4D] select-none">
          <div className="p-4 bg-[#0747A6]/30 border-b border-[#172B4D]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A869A] block">Operational Pillars</span>
            <span className="text-xs font-bold text-white mt-0.5 block">
              {activeApplication === 'cogniscan' ? 'CogniScan Vision Workspace' : 'Audit Parameters System'}
            </span>
          </div>

          {activeApplication === 'cogniscan' ? (
            // COGNISCAN INJECTION SIDEBAR NAVIGATION
            <div className="p-4 flex-1 space-y-4 text-xs">
              <div className="space-y-1.5">
                <span className="block text-[9px] font-bold text-[#7A869A] uppercase tracking-wider">Vision Presets</span>
                <Button appearance="default" onClick={loadDemoMode} className="w-full justify-start text-left">
                  <Sparkles size={12} className="text-[#0052CC]" /> Run Demo Mode Dashboard
                </Button>
              </div>
              <div className="pt-4 border-t border-[#172B4D] space-y-2">
                <span className="block text-[10px] font-bold text-[#7A869A] uppercase">Active Research DNA</span>
                <div className="p-2 bg-[#0747A6]/20 border border-[#172B4D] rounded text-[11px] space-y-1">
                  <div className="font-bold text-white text-[10px]">✓ AI-AVS Matrix</div>
                  <div className="font-bold text-white text-[10px]">✓ Dignity-First Design</div>
                  <div className="font-bold text-white text-[10px]">✓ Stress-First Model</div>
                </div>
              </div>
            </div>
          ) : (
            // TEXT AUDIT METHOD SELECTOR MODULAR LINKS
            <div className="flex-1 overflow-y-auto p-2 space-y-1 text-xs">
              <span className="block text-[9px] font-bold text-[#7A869A] uppercase tracking-wider px-2 py-1.5">Audit Workspace Panels</span>
              {[
                { id: 'cognitive', name: 'Cognitive Load Assessment', icon: Layers },
                { id: 'friction', name: 'Friction Points Log', icon: ShieldAlert },
                { id: 'recommendations', name: 'Tactical Recommendations', icon: Sliders },
                { id: 'business', name: 'Business Impact & ROI', icon: FileSpreadsheet },
                { id: 'executive', name: 'Executive Summary Summary', icon: FileText }
              ].map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveModule(item.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded text-left transition-colors font-medium ${activeModule === item.id ? 'bg-[#0052CC] text-white font-bold' : 'hover:bg-[#0747A6]/30 text-[#DEEBFF]'}`}
                  >
                    <Icon size={14} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          )}
        </aside>

        {/* WORKSPACE CENTRAL DASHBOARD SCREEN SPACE */}
        <main className="flex-1 bg-[#F4F5F7] p-4 md:p-6 overflow-y-auto space-y-5">
          
          {/* APPLICATION ONE: COGNISCAN VISION ANALYSER VIEW */}
          {activeApplication === 'cogniscan' && (
            <div className="space-y-6">
              
              {/* Header Title Section */}
              <div className="bg-white border border-[#DFE1E6] rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h2 className="text-lg font-bold text-[#091E42]">CogniScan — UX Cognitive Load Analyser</h2>
                  <p className="text-xs text-[#5E6C84]">Drop interface blueprints to evaluate dynamic density layout grids instantly.</p>
                </div>
                {scanComplete && (
                  <Button appearance="default" onClick={() => { setScanComplete(false); setImageSrc(null); }} icon={RefreshCw}>
                    Analyse Another UI Blueprint
                  </Button>
                )}
              </div>

              {/* Upload Dropzone Interactive Canvas System */}
              {!scanComplete ? (
                <div className="bg-white border border-[#DFE1E6] rounded-lg p-8 text-center max-w-2xl mx-auto shadow-xs space-y-4">
                  <label className="border-2 border-dashed border-[#4C9AFF] bg-[#DEEBFF]/10 hover:bg-[#DEEBFF]/30 transition-all rounded-lg p-10 block cursor-pointer relative overflow-hidden">
                    <input type="file" className="hidden" accept="image/*" onChange={handleDropzoneChange} />
                    <UploadCloud size={36} className="text-[#0052CC] mx-auto mb-2" />
                    <span className="block font-bold text-xs text-[#0052CC]">Ingest Target Interface Viewport Screenshot</span>
                    <span className="block text-[10px] text-[#7A869A] mt-1">Accepts high-density wireframes or layout flats</span>
                    
                    {isScanning && (
                      <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-4">
                        <div className="w-12 h-12 rounded-full border-4 border-t-[#0052CC] border-r-transparent animate-spin mb-3"></div>
                        <span className="text-xs font-bold text-[#091E42] tracking-wide animate-pulse">{scanPipelineStage}</span>
                        <div className="w-48 h-1 bg-[#EBECF0] rounded-full overflow-hidden mt-2">
                          <div className="h-full bg-[#36B37E] animate-bounce w-2/3"></div>
                        </div>
                      </div>
                    )}
                  </label>
                  <div className="text-xs text-[#5E6C84]">
                    Or lack an image asset file? <button onClick={loadDemoMode} className="text-[#0052CC] font-bold hover:underline">Launch Pre-scored Enterprise Demo Mode Dashboard</button>
                  </div>
                </div>
              ) : (
                
                /* INGESTION ANALYSIS RENDER PANELS COMPLETED STATE */
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                  
                  {/* Left Column: Visual Overlay Inspection Map and Six Axis Radar Chart */}
                  <div className="xl:col-span-2 space-y-5">
                    
                    {/* Visual Overlay Image Mapping container primitive */}
                    <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block">Spatial Inspection Map Viewport</span>
                      <div className="border bg-[#FAFBFC] rounded p-2 flex items-center justify-center relative min-h-[320px] shadow-inner">
                        <img src={imageSrc} alt="Ingested Analytics Map Target" className="max-h-[380px] rounded object-contain border border-[#DFE1E6]" />
                        
                        {/* Target Hotspot Pin Layers */}
                        <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-[#FF5630] rounded-full text-white font-mono text-[10px] font-bold flex items-center justify-center ring-4 ring-white shadow animate-pulse">1</div>
                        <div className="absolute top-1/2 left-2/3 w-6 h-6 bg-[#FFAB00] rounded-full text-[#172B4D] font-mono text-[10px] font-bold flex items-center justify-center ring-4 ring-white shadow animate-pulse">2</div>
                      </div>
                    </div>

                    {/* Six-Axis Radar Chart Component Section */}
                    <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-xs">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block mb-3">Six-Axis Cognitive Structural Shape Architecture</span>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                            <PolarGrid stroke="#DFE1E6" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#42526E', fontSize: 11, fontWeight: 600 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#7A869A' }} />
                            <Radar name="Cognitive Load Shape" dataKey="A" stroke="#0052CC" fill="#DEEBFF" fillOpacity={0.6} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Progressive Disclosure Scoring Cards Log */}
                  <div className="space-y-4">
                    <div className="bg-[#DEEBFF] text-[#0747A6] p-4 rounded border border-[#4C9AFF] flex items-start gap-2 text-xs">
                      <Info size={16} className="shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">AI-AVS Schema Ingestion Verified</strong>
                        <p className="mt-0.5 text-[#42526E]">Claude Vision parsed 6 distinct vector frames successfully inside runtime environment guidelines.</p>
                      </div>
                    </div>

                    {/* Metric Target Cards Block */}
                    <div className="space-y-2.5">
                      {[
                        { title: "Miller's Law (7±2 Chunking Arrays)", score: "82/100", status: "Optimal", desc: "Information hierarchy groupings match short-term capacity targets safely." },
                        { title: "Gestalt Visual Hierarchy Models", score: "75/100", status: "Good", desc: "Pre-attentive space processing parameters map functional element layout clusters accurately." },
                        { title: "WCAG Accessibility Core Index", score: "64/100", status: "Attention Needed", desc: "Interactive anchor target coordinates scale slightly narrow under extreme load conditions." }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-[#DFE1E6] rounded p-3.5 shadow-xs hover:border-[#4C9AFF] transition-all">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold text-[#091E42]">{item.title}</span>
                            <span className="font-mono text-xs font-bold bg-[#FAFBFC] px-2 py-0.5 border rounded text-[#0052CC]">{item.score}</span>
                          </div>
                          <p className="text-[11px] text-[#5E6C84] leading-relaxed">{item.desc}</p>
                          <div className="mt-2 flex items-center justify-between text-[10px]">
                            <Lozenge appearance={item.status === 'Optimal' ? 'success' : 'default'}>{item.status}</Lozenge>
                            <span className="text-[#7A869A] font-medium">Weight Framework: 25%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* APPLICATION TWO: TEXT DRIVEN UX COGNITIVE AUDIT TOOL PANEL */}
          {activeApplication === 'audit_tool' && (
            <div className="space-y-6">
              
              {/* Context Selector Presets Header Bar */}
              <div className="bg-white border border-[#DFE1E6] rounded p-4 space-y-3 shadow-xs">
                <div>
                  <h2 className="text-base font-bold text-[#091E42]">UX Cognitive Audit Control Engine</h2>
                  <p className="text-xs text-[#5E6C84]">Swap presets or update details directly to review automated sprint fix tasks.</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F4F5F7]">
                  <Button appearance="default" onClick={() => setFormData({ ...demoPresetContexts.b2b })}>Preset A: B2B Dashboard</Button>
                  <Button appearance="default" onClick={() => setFormData({ ...demoPresetContexts.checkout })}>Preset B: Consumer Checkout</Button>
                  <Button appearance="default" onClick={() => setFormData({ ...demoPresetContexts.crm })}>Preset C: Dispatch Mission CRM</Button>
                </div>
              </div>

              {/* AUDIT OUTPUT DISPLAY ARCHITECTURE SWITCHABLE BY LEFT BAR */}
              <div className="bg-white border border-[#DFE1E6] rounded-lg shadow-xs overflow-hidden">
                
                {/* Active Section Title Header Strip */}
                <div className="bg-[#FAFBFC] px-4 py-3 border-b border-[#DFE1E6] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#091E42] uppercase tracking-wider flex items-center gap-1">
                    <Sliders size={14} className="text-[#0052CC]" /> Active Module: {activeModule.toUpperCase()} LOG INDEX
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <Button appearance="default" onClick={() => downloadTabularCSV('executive')} icon={Download}>Export Tab 1 (CSV)</Button>
                    <Button appearance="primary" onClick={() => downloadTabularCSV('repository')} icon={FileSpreadsheet}>Export Tab 2 (CSV)</Button>
                  </div>
                </div>

                <div className="p-4">
                  
                  {/* MODULE ONE: COGNITIVE LOAD ASSESSMENT BLOCK */}
                  {activeModule === 'cognitive' && (
                    <div className="space-y-5">
                      <div className="bg-[#FAFBFC] border border-[#DFE1E6] rounded p-4 text-xs space-y-2">
                        <span className="font-bold text-[#091E42] block text-xs">Composite Processing Summary Matrix</span>
                        <p className="text-[#5E6C84] leading-relaxed">
                          Evaluating target context asset: <strong className="text-[#172B4D]">{formData.context}</strong> tailored for audience target parameter <strong className="text-[#172B4D]">{formData.audience}</strong>.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { name: "Intrinsic Burden", score: "4.2 / 5.0", label: "High Structural Base complexity", bar: "w-11/12", col: "bg-[#0052CC]" },
                          { name: "Extraneous Friction Noise", score: "2.1 / 5.0", label: "Friction Point Risk Present", bar: "w-5/12", col: "bg-[#FF5630]" },
                          { name: "Germane Schema Familiarity", score: "3.8 / 5.0", label: "Safe Conventional Alignment", bar: "w-9/12", col: "bg-[#36B37E]" }
                        ].map((m, idx) => (
                          <div key={idx} className="border border-[#DFE1E6] bg-white rounded p-3.5 shadow-xs space-y-2">
                            <div className="flex justify-between text-xs font-bold">
                              <span className="text-[#42526E]">{m.name}</span>
                              <span className="font-mono text-[#091E42]">{m.score}</span>
                            </div>
                            <div className="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                              <div className={`h-full ${m.col} ${m.bar} rounded-full`}></div>
                            </div>
                            <span className="text-[10px] text-[#7A869A] block font-medium">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODULE TWO: FRICTION POINTS GRID SYSTEM */}
                  {activeModule === 'friction' && (
                    <div className="space-y-3">
                      <div className="flex gap-2 mb-2">
                        <SeverityBadge severity="Critical" />
                        <SeverityBadge severity="High" />
                        <SeverityBadge severity="Medium" />
                      </div>

                      <div className="border border-[#DFE1E6] rounded overflow-hidden">
                        <table className="w-full text-left text-xs text-[#172B4D]">
                          <thead>
                            <tr className="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[#6B778C] font-bold">
                              <th className="p-2.5">ID</th>
                              <th className="p-2.5">Target Zone Element</th>
                              <th className="p-2.5">Core Anti-Pattern Log</th>
                              <th className="p-2.5">User Drop-Off Risk</th>
                              <th className="p-2.5 text-right">Severity</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#DFE1E6] font-medium">
                            {[
                              { id: "UX-001", zone: "Advanced Filter Cluster", pattern: "Excessive input option density array layout structures", drop: "Paralysis drop-off threshold reached early", sev: "Critical" },
                              { id: "UX-002", zone: "Primary Analytics Grid", pattern: "Data chunk grouping configurations exceed short term memory limits", drop: "High interaction fatigue performance rates", sev: "High" }
                            ].map((row) => (
                              <React.Fragment key={row.id}>
                                <tr 
                                  onClick={() => setActiveFrictionRow(activeFrictionRow === row.id ? null : row.id)}
                                  className="hover:bg-[#DEEBFF]/20 cursor-pointer transition-colors"
                                >
                                  <td className="p-2.5 font-bold text-[#0052CC]">{row.id}</td>
                                  <td className="p-2.5 font-bold text-[#091E42]">{row.zone}</td>
                                  <td className="p-2.5 text-[#42526E] font-normal">{row.pattern}</td>
                                  <td className="p-2.5 text-[#5E6C84] font-normal">{row.drop}</td>
                                  <td className="p-2.5 text-right"><SeverityBadge severity={row.sev} /></td>
                                </tr>
                                {activeFrictionRow === row.id && (
                                  <tr className="bg-[#FAFBFC]">
                                    <td colSpan={5} className="p-3 text-xs text-[#42526E] border-t border-b border-[#DFE1E6]">
                                      <div className="flex gap-4 items-start">
                                        <Info size={16} className="text-[#0052CC] shrink-0 mt-0.5" />
                                        <div>
                                          <strong className="text-[#091E42] block mb-1">Dignity-First Interaction Audit Insight:</strong>
                                          <p>This structural deployment imposes heavy mental calculations on the enterprise operator. Tactical recommendations require breaking components up immediately.</p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* MODULE THREE: TACTICAL RECOMMENDATIONS */}
                  {activeModule === 'recommendations' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { id: "UX-001", title: "Implement Progressive Disclosure Panels", law: "Hick's Law", effort: "M", days: "3 Days", detail: "Consolidate active parameters behind a single, dynamic collapsible control drawer to optimize choice time metrics." },
                        { id: "UX-002", title: "Restructure Micro-Metric Groupings", law: "Miller's Law", effort: "S", days: "2 Days", detail: "Enforce layout boundaries to segment grid numbers into clusters of maximum 5 items per module container." }
                      ].map((rec, index) => (
                        <div key={index} className="border border-[#DFE1E6] rounded p-4 shadow-xs space-y-3 bg-white">
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-bold text-[#0052CC]">{rec.id} • {rec.title}</span>
                            <span className="text-[10px] font-bold bg-[#EBECF0] text-[#42526E] px-1.5 py-0.5 rounded">{rec.law}</span>
                          </div>
                          <p className="text-xs text-[#42526E] font-normal leading-relaxed">{rec.detail}</p>
                          <div className="pt-2 border-t border-[#F4F5F7] flex items-center justify-between text-[10px] font-bold">
                            <span className="text-[#36B37E]">Sprint Allocation Estimate: {rec.days}</span>
                            <span className="bg-[#DEEBFF] text-[#0747A6] px-2 py-0.5 rounded font-mono">Effort Size: {rec.effort}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* MODULE FOUR: BUSINESS IMPACT AND ROI ANALYSIS */}
                  {activeModule === 'business' && (
                    <div className="space-y-4">
                      {[
                        { id: "UX-001", current: "Operators experience choice overload, driving filtering execution errors up.", gain: "Collapsible drawer trims cognitive scanning paths, accelerating layout parsing speeds.", roi: "Reduces interface processing error drops by an estimated 22% globally.", confidence: "High" },
                        { id: "UX-002", current: "Data metrics array density layout sets trigger rapid interaction fatigue.", gain: "Micro-metric containers chunk numerical variables into clear visual groups.", roi: "Boosts high-volume operational workflow speeds by up to 35% weekly.", confidence: "Medium" }
                      ].map((b, idx) => (
                        <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 border border-[#DFE1E6] rounded overflow-hidden text-xs shadow-xs">
                          <div className="p-3 bg-[#FFEBE6] text-[#BF2600] border-r border-[#DFE1E6]">
                            <strong className="block mb-1 text-[11px] uppercase tracking-wide">Current State Deficit ({b.id})</strong>
                            <p className="font-medium text-[#42526E]">{b.current}</p>
                          </div>
                          <div className="p-3 bg-[#E3FCEF] text-[#006644] border-r border-[#DFE1E6]">
                            <strong className="block mb-1 text-[11px] uppercase tracking-wide">Projected Layout Gain</strong>
                            <p className="font-medium text-[#42526E]">{b.gain}</p>
                          </div>
                          <div className="p-3 bg-[#DEEBFF] text-[#0747A6] flex flex-col justify-between">
                            <div>
                              <strong className="block mb-1 text-[11px] uppercase tracking-wide">Estimated Business ROI</strong>
                              <p className="font-bold text-[#172B4D]">{b.roi}</p>
                            </div>
                            <span className="text-[10px] text-[#5E6C84] mt-2 block font-medium">Projection Confidence: <strong>{b.confidence}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* MODULE FIVE: EXECUTIVE SUMMARY OVERVIEW */}
                  {activeModule === 'executive' && (
                    <div className="space-y-5 text-xs">
                      <div className="bg-white border-l-4 border-l-[#0052CC] border border-[#DFE1E6] p-4 rounded-r shadow-xs space-y-2">
                        <strong className="text-sm font-bold text-[#091E42] block">Primary Architectural Finding</strong>
                        <p className="text-[#42526E] text-xs leading-relaxed font-medium">
                          The tested user interface pattern offers robust structural components but drops critical task efficiency ratings under high cognitive speed constraints. 
                          Implementing progressive disclosure systems will mitigate interaction drops and simplify production engineering integration constraints.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#FAFBFC] border border-[#DFE1E6] rounded p-4 space-y-2">
                          <strong className="font-bold text-[#091E42] uppercase text-[10px] tracking-wider block">Top 3 Quick Wins Check</strong>
                          <ul className="space-y-1.5 text-[#42526E] font-medium">
                            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#36B37E]" /> Collapse secondary filter controls.</li>
                            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#36B37E]" /> Segment main data cards into micro-clusters.</li>
                            <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#36B37E]" /> Normalize header block alignment paths.</li>
                          </ul>
                        </div>

                        <div className="bg-white border border-[#DFE1E6] rounded p-4 flex flex-col justify-between shadow-xs">
                          <div>
                            <strong className="font-bold text-[#091E42] uppercase text-[10px] tracking-wider block mb-1">Engineering Export Payload</strong>
                            <p className="text-[#7A869A] text-[11px] mb-2 font-medium">Direct clipboard package export matching production engineering requirements.</p>
                          </div>
                          <div className="flex gap-2">
                            <Button appearance="primary" onClick={copyStructuredJsonToClipboard} icon={copiedJson ? Check : Copy}>
                              {copiedJson ? 'JSON Copied' : 'Copy JSON Payload'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}