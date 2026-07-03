import React, { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, AlertTriangle, 
  CheckCircle2, Info, FileText, Search, RefreshCw, Eye, Layout, 
  History, Clock, CheckSquare, ShieldCheck, User, MapPin, Briefcase
} from 'lucide-react';

export default function App() {
  // --- SYSTEM ROUTERS & CHANNELS ---
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'history'
  const [selectedIssueId, setSelectedIssueId] = useState(null);

  // --- PARAMETRIC Blueprints STATE ---
  const [context, setContext] = useState('Analytics Dashboard');
  const [audience, setAudience] = useState('Expert Users');
  const [goal, setGoal] = useState('Revenue Filter');
  const [frameworks, setFrameworks] = useState(["Miller's", "WCAG", "Cognitive Load"]);

  // --- ANALYSIS ENGINE STATE PIPELINE ---
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasActiveData, setHasActiveData] = useState(false);
  const [scanPipelineStage, setScanPipelineStage] = useState('');

  // --- HISTORY RECORDS STORE ---
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);
  const historyProfiles = [
    { id: 'HIST-01', name: 'Revenue Dashboard v1.2', context: 'Analytics Dashboard', audience: 'Expert Users', goal: 'Revenue Filter', date: 'July 3, 2026', globalScore: 82 },
    { id: 'HIST-02', name: 'Transactional Checkout Flat', context: 'Transactional Checkout Flow', audience: 'General Consumers', goal: 'Minimize Input Delay Rates', date: 'June 28, 2026', globalScore: 64 }
  ];

  // --- HCI METRICS ENGINE MAIN DATA STRUCTURES ---
  const [evaluationPayload, setEvaluationPayload] = useState({
    globalScore: 0,
    grade: 'Pending Assessment',
    executiveSummary: 'Awaiting source interface blueprint ingestion payload. Upload a system screenshot or activate a profile within your Evaluation History to construct live telemetry nodes.',
    overallCognitiveLoad: '0.0/10',
    chunkingScore: '0.0/10',
    decisionSpeed: '0.0/10',
    contrastTable: [],
    telemetryNodes: []
  });

  // --- SIMULATION HARNESS RULES (GROUNDED TO WORKSPACE OVERRIDES) ---
  const triggerHciTelemetryCompute = (sourceContext, sourceAudience, customScoreOverride = null) => {
    setIsAnalyzing(true);
    setHasActiveData(false);

    const stages = [
      "AI-AVS Layout Mesh Generation...",
      "Parsing Fitts's Target Bound Boxes...",
      "Evaluating Gestalt Cluster Densities...",
      "Finalizing Claude Vision JSON Schema Output..."
    ];

    stages.forEach((stage, index) => {
      setTimeout(() => {
        setScanPipelineStage(stage);
        
        if (index === stages.length - 1) {
          setIsAnalyzing(false);
          setHasActiveData(true);

          const baseScore = customScoreOverride || (sourceContext === 'Analytics Dashboard' && sourceAudience === 'Expert Users' ? 82 : 64);
          
          setEvaluationPayload({
            globalScore: baseScore,
            grade: baseScore >= 80 ? "Good" : "Needs Attention",
            executiveSummary: `Global executive Summary are good in societies for a sample dashboard UX analysis dashboard detailed, evidence-based data. Calculated dynamically under active parameters configured for [${sourceAudience}] performing [${sourceContext}] loops.`,
            overallCognitiveLoad: baseScore >= 80 ? "7.1/10 (High)" : "8.6/10 (Critical)",
            chunkingScore: baseScore >= 80 ? "6.4/10" : "4.2/10",
            decisionSpeed: baseScore >= 80 ? "7.8/10" : "9.1/10",
            
            contrastTable: [
              { element: "Revenue Text Display Node", foreground: "White", background: "Dark Blue", ratio: "7.1:1", status: "Pass AAA", pass: true },
              { element: "Primary Sidebar Navigation Label", foreground: "Light Gray", background: "White", ratio: baseScore >= 80 ? "4.5:1" : "2.4:1", status: baseScore >= 80 ? "Pass AA" : "Fail AA", pass: baseScore >= 80 },
              { element: "Help Descriptors Utility Icon", foreground: "Light Gray", background: "White", ratio: "2.1:1", status: "Fail AA", pass: false },
              { element: "Inactive Alternative Interface Tab", foreground: "Gray", background: "White", ratio: "3.5:1", status: "Fail AA", pass: false }
            ],

            telemetryNodes: [
              { id: 'NODE-01', targetName: 'Global Top Navigation & Tabs Bar', pattern: 'Non-Standard Anchor Alignment', trackingTime: '420ms parsing delay', successRate: '94%', law: "Jakob's Law", explanation: 'Primary navigation nodes deviate 15% from anticipated enterprise configuration standards, creating spatial orientation friction.', solution: 'Reposition main system link nodes into standard horizontal alignment maps.', acknowledged: false },
              { id: 'NODE-02', targetName: 'Advanced Parameter Filter Grid', pattern: 'Choice Overload Complexity Burst', trackingTime: '1850ms decision delay', successRate: '71%', law: "Hick's Law", explanation: 'Overloading concurrent option choices in a single viewport container triggers visual parsing paralysis.', solution: 'Enforce progressive disclosure patterns via interactive collapsible field filters.', acknowledged: false },
              { id: 'NODE-03', targetName: 'Primary System CTA Execution Button', pattern: 'Bounding Box Sizing Delta', trackingTime: '210ms target discovery', successRate: '99%', law: "Fitts's Law", explanation: 'Button click surface meets the optimal target criteria layout footprint safely for high-volume operators.', solution: 'Maintain original component dimensional configurations.', acknowledged: false }
            ]
          });
        }
      }, (index + 1) * 350);
    });
  };

  // --- ACTIONS HANDLERS ---
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
        triggerHciTelemetryCompute(context, audience);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const selectHistoryProfile = (profile) => {
    setSelectedHistoryId(profile.id);
    setContext(profile.context);
    setAudience(profile.audience);
    setGoal(profile.goal);
    setImageSrc("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80");
    triggerHciTelemetryCompute(profile.context, profile.audience, profile.globalScore);
  };

  // Trigger dynamic re-calculation when any setup parameter changes during an active workspace session
  useEffect(() => {
    if (hasActiveData && !isAnalyzing) {
      triggerHciTelemetryCompute(context, audience);
    }
  }, [context, audience, goal]);

  const toggleAcknowledgeNode = (id) => {
    setEvaluationPayload(prev => ({
      ...prev,
      telemetryNodes: prev.telemetryNodes.map(node => 
        node.id === id ? { ...node, acknowledged: !node.acknowledged } : node
      )
    }));
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-[#172B4D] font-sans antialiased flex flex-col md:flex-row border border-[#DFE1E6]">
      
      {/* ================= LEFT SIDEBAR: AUDITOR CONFIGURATION SHELL ================= */}
      <aside className="w-full md:w-80 bg-white border-r border-[#DFE1E6] flex flex-col shrink-0">
        
        {/* Brand Block */}
        <div className="p-4 border-b border-[#DFE1E6] bg-[#FAFBFC]">
          <h1 className="text-sm font-bold text-[#0052CC] tracking-wide uppercase">CogniScan</h1>
          <span className="text-[11px] text-[#5E6C84] font-medium block mt-0.5">UX Cognitive Load Analyser</span>
        </div>

        {/* Tab Selection Strips */}
        <div className="flex border-b border-[#DFE1E6] px-2 text-xs bg-[#FAFBFC]">
          <button 
            onClick={() => setActiveTab('upload')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === 'upload' ? 'text-[#0052CC] border-[#0052CC]' : 'text-[#5E6C84] border-transparent hover:text-[#172B4D]'}`}
          >
            <UploadCloud size={14} /> Analysis Input
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`py-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === 'history' ? 'text-[#0052CC] border-[#0052CC]' : 'text-[#5E6C84] border-transparent hover:text-[#172B4D]'}`}
          >
            <History size={14} /> History Profile ({historyProfiles.length})
          </button>
        </div>

        {/* Form Controls Area */}
        <div className="p-4 flex-1 overflow-y-auto space-y-5 text-xs">
          
          {activeTab === 'upload' ? (
            <div className="space-y-2">
              <label className="border-2 border-dashed border-[#4C9AFF] bg-[#DEEBFF]/20 rounded p-5 block text-center cursor-pointer hover:bg-[#DEEBFF]/40 transition relative overflow-hidden">
                <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                <UploadCloud size={28} className="mx-auto text-[#0052CC] mb-1.5" />
                <p className="font-bold text-[#0052CC]">Ingest Interface Screenshot</p>
                <p className="text-[#5E6C84] text-[10px] mt-0.5">Automated AI Inspection Vector</p>

                {isAnalyzing && (
                  <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-2">
                    <RefreshCw className="animate-spin text-[#0052CC] mb-2" size={20} />
                    <span className="font-bold text-[#172B4D] animate-pulse text-[10px]">{scanPipelineStage}</span>
                  </div>
                )}
              </label>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#6B778C] uppercase block tracking-wider">Select Historical Run</span>
              {historyProfiles.map(p => (
                <div 
                  key={p.id} 
                  onClick={() => selectHistoryProfile(p)}
                  className={`p-2.5 border rounded cursor-pointer transition-colors ${selectedHistoryId === p.id ? 'bg-[#DEEBFF] border-[#4C9AFF]' : 'bg-[#FAFBFC] hover:bg-[#EBECF0] border-[#DFE1E6]'}`}
                >
                  <div className="font-bold text-[#091E42]">{p.name}</div>
                  <div className="text-[10px] text-[#5E6C84] mt-0.5">{p.date} • Score: {p.globalScore}%</div>
                </div>
              ))}
            </div>
          )}

          {/* Configuration Fields Parameters */}
          <div className="space-y-4 pt-4 border-t border-[#DFE1E6]">
            <span className="text-[10px] font-bold text-[#6B778C] uppercase tracking-wider block">Audit Parameters Matrix</span>
            
            <div>
              <label className="block font-semibold text-[#5E6C84] mb-1">Context</label>
              <div className="relative">
                <select value={context} onChange={(e) => setContext(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]">
                  <option>Analytics Dashboard</option>
                  <option>Transactional Checkout Flow</option>
                  <option>Emergency Dispatch CRM Portal</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-2.5 text-[#5E6C84] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#5E6C84] mb-1">Audience</label>
              <div className="relative">
                <select value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]">
                  <option>Expert Users</option>
                  <option>General Consumers</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-2.5 text-[#5E6C84] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#5E6C84] mb-1">Goal</label>
              <div className="relative">
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#FAFBFC] border border-[#DFE1E6] rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-[#4C9AFF]">
                  <option>Revenue Filter</option>
                  <option>Minimize Input Delay Rates</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-2.5 text-[#5E6C84] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= DEVELOPER METADATA FOOTER (Karthick Balakrishnan) ================= */}
        <div className="p-3 border-t border-[#DFE1E6] bg-[#FAFBFC] text-[11px] text-[#42526E] space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#6B778C] flex items-center gap-1">
            <User size={12} className="text-[#0052CC]" /> Developed By
          </div>
          <div className="font-bold text-[#091E42]">Karthick Balakrishnan</div>
          <div className="text-[#5E6C84] leading-tight space-y-0.5">
            <div className="flex items-center gap-1"><Briefcase size={10} /> HCI Researcher & UX Tech Lead</div>
            <div className="flex items-center gap-1"><Clock size={10} /> 15+ Years Industry Experience</div>
            <div className="flex items-center gap-1"><MapPin size={10} /> Chennai, India</div>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT WORKSPACE CANVAS PANEL ================= */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto space-y-5">
        
        {/* Card 1: Core Action Header Node */}
        <div className="bg-white border border-[#DFE1E6] rounded p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold text-[#091E42]">Evaluation Result</h2>
            <div className="text-xs text-[#5E6C84] font-medium mt-0.5 flex items-center gap-1">
              <FileText size={14} className="text-[#0052CC]" /> AI HCI AUDIT REPORT: {hasActiveData ? context : "Awaiting System Blueprint Asset"}
            </div>
          </div>
          {hasActiveData && (
            <span className="text-[10px] font-mono bg-[#EBECF0] px-2 py-0.5 border rounded text-[#42526E]">
              Current Index: {evaluationPayload.globalScore}%
            </span>
          )}
        </div>

        {/* Card 2: Executive Summary */}
        <div className={`border rounded p-4 flex flex-col sm:flex-row sm:items-center gap-4 transition-all ${hasActiveData ? 'bg-white border-[#DFE1E6] border-l-4 border-l-[#36B37E]' : 'bg-[#FAFBFC] border-[#DFE1E6] opacity-50'}`}>
          <div className="shrink-0 space-y-0.5">
            <span className="text-[10px] font-bold text-[#6B778C] uppercase block">Executive Summary</span>
            <span className={`inline-block font-bold text-xs px-2 py-0.5 rounded ${hasActiveData ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#EBECF0] text-[#7A869A]'}`}>
              {hasActiveData ? `${evaluationPayload.grade} (${evaluationPayload.globalScore}%)` : 'Locked'}
            </span>
          </div>
          <p className="text-xs text-[#42526E] font-medium leading-relaxed sm:border-l sm:pl-4 border-[#DFE1E6]">
            {evaluationPayload.executiveSummary}
          </p>
        </div>

        {/* Card 3: Cognitive Heuristics Dial Scores */}
        <div className={`bg-white border border-[#DFE1E6] rounded p-4 space-y-4 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
          <span className="text-xs font-bold text-[#091E42] uppercase tracking-wider block border-b border-[#FAFBFC] pb-2">
            Cognitive Heuristics Scores (Miller's, Hick's)
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
              <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Overall Cognitive Load</span>
              <div className="inline-block relative w-16 h-8 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-b-transparent border-l-transparent rotate-45 ${hasActiveData ? 'border-t-[#FF991F] border-r-[#FF991F]' : 'border-[#DFE1E6]'}`}></div>
              </div>
              <div className="text-sm font-bold text-[#091E42]">{evaluationPayload.overallCognitiveLoad}</div>
            </div>

            <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
              <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Information Chunking</span>
              <div className="inline-block relative w-16 h-8 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-b-transparent border-l-transparent rotate-12 ${hasActiveData ? 'border-t-[#36B37E] border-r-[#36B37E]' : 'border-[#DFE1E6]'}`}></div>
              </div>
              <div className="text-sm font-bold text-[#091E42]">{evaluationPayload.chunkingScore}</div>
              <span className="text-[9px] text-[#7A869A] block font-medium">Avoid &gt; 7 groups</span>
            </div>

            <div className="bg-[#FAFBFC] border border-[#EBECF0] rounded p-3 text-center">
              <span className="text-[10px] font-bold text-[#6B778C] uppercase block mb-1">Decision Speed (Hick's)</span>
              <div className="inline-block relative w-16 h-8 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-b-transparent border-l-transparent rotate-45 ${hasActiveData ? 'border-t-[#FF5630] border-r-[#FF5630]' : 'border-[#DFE1E6]'}`}></div>
              </div>
              <div className="text-sm font-bold text-[#091E42]">{evaluationPayload.decisionSpeed}</div>
              <span className="text-[9px] text-[#7A869A] block font-medium">Excessive Filter Choices</span>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION SHIFT LAYER */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          
          {/* Card 5: Interaction Heuristics Interactive Canvas Mapping (Image Overlay) */}
          <div className={`xl:col-span-2 bg-white border border-[#DFE1E6] rounded p-4 space-y-4 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
            <div className="border-b pb-2 flex justify-between items-center">
              <span className="text-xs font-bold text-[#091E42] uppercase tracking-wider">Interaction Heuristics (Fitts's, Visual Hierarchy)</span>
              <span className="text-[10px] text-[#5E6C84] bg-[#FAFBFC] px-1.5 border rounded">Click pins to audit elements</span>
            </div>

            <div className="border bg-[#FAFBFC] rounded p-2 flex items-center justify-center relative min-h-[300px] shadow-inner">
              {imageSrc ? (
                <div className="relative inline-block max-w-full">
                  <img src={imageSrc} alt="Inspection Mapping Frame Layout" className="max-h-[340px] rounded object-contain border border-[#DFE1E6]" />
                  
                  {/* Dynamic Absolute Pin Markers Layers */}
                  {evaluationPayload.telemetryNodes.map((node, i) => (
                    <button
                      key={node.id}
                      onClick={() => setSelectedIssueId(node.id)}
                      style={{ top: `${25 + (i * 20)}%`, left: `${30 + (i * 18)}%` }}
                      className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center text-[10px] font-bold font-mono shadow-md transition-transform hover:scale-125 ring-2 ring-white ${node.acknowledged ? 'bg-[#36B37E] text-white' : 'bg-[#FF5630] text-white'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center p-6 text-[#7A869A] text-xs">
                  <Eye size={24} className="mx-auto mb-1 text-[#A5B2C6]" />
                  Upload screen asset to initialize click-to-inspect framework layers.
                </div>
              )}
            </div>

            {/* LIVE DYNAMIC ELEMENT ANALYSIS VIEWPORT */}
            {selectedIssueId && (
              <div className="bg-[#FAFBFC] border border-[#DEEBFF] p-3 rounded text-xs space-y-2 animate-fadeIn">
                {(() => {
                  const node = evaluationPayload.telemetryNodes.find(n => n.id === selectedIssueId);
                  if (!node) return null;
                  return (
                    <>
                      <div className="flex justify-between items-center border-b pb-1">
                        <strong className="text-[#091E42]">{node.targetName}</strong>
                        <span className="text-[10px] bg-[#DEEBFF] text-[#0747A6] px-2 py-0.5 rounded font-bold font-mono">{node.law}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-[11px] text-[#42526E] bg-white p-2 rounded border">
                        <div className="flex items-center gap-1"><Clock size={12} className="text-[#0052CC]" /> <strong>Task Parse Clock:</strong> {node.trackingTime}</div>
                        <div className="flex items-center gap-1"><ShieldCheck size={12} className="text-[#36B37E]" /> <strong>Success Accuracy:</strong> {node.successRate}</div>
                      </div>
                      <p className="text-[#42526E] leading-relaxed"><strong className="text-[#091E42]">Vulnerability Definition:</strong> {node.explanation}</p>
                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-[11px] font-medium text-[#5E6C84]">Vector Fix: <strong className="text-[#172B4D]">{node.solution}</strong></span>
                        <button 
                          onClick={() => toggleAcknowledgeNode(node.id)}
                          className={`px-2 py-1 rounded text-[10px] font-bold shadow-xs flex items-center gap-1 ${node.acknowledged ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#0052CC] text-white hover:bg-[#0747A6]'}`}
                        >
                          <CheckSquare size={12} /> {node.acknowledged ? 'Acknowledged Log' : 'Acknowledge Issue'}
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Card 4: Accessibility & Color Contrast (WCAG 2.1) Table Matrix */}
          <div className={`bg-white border border-[#DFE1E6] rounded p-4 space-y-3 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B778C] block border-b pb-1.5">Accessibility & Color Contrast (WCAG 2.1)</span>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#FAFBFC] border-b border-[#DFE1E6] text-[#6B778C] font-bold">
                    <th className="p-1.5 text-[10px]">Element Component</th>
                    <th className="p-1.5 text-[10px]">Ratio</th>
                    <th className="p-1.5 text-[10px] text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F5F7] font-medium text-[#42526E]">
                  {evaluationPayload.contrastTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAFBFC]">
                      <td className="p-1.5 text-[#091E42] font-semibold">{row.element}</td>
                      <td className="p-1.5 font-mono text-[11px]">{row.ratio}</td>
                      <td className="p-1.5 text-right">
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold ${row.pass ? 'bg-[#E3FCEF] text-[#006644]' : 'bg-[#FFEBE6] text-[#BF2600]'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Card 6: Interactive Issues Summary Read & Acknowledge List */}
        <div className={`bg-white border border-[#DFE1E6] rounded p-4 space-y-3.5 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
          <div className="border-b pb-2 flex justify-between items-center">
            <span className="text-xs font-bold text-[#091E42] uppercase tracking-wider">Observed Interface Issues & Action Logs Checklist</span>
            <span className="text-[10px] text-[#5E6C84] font-medium">Acknowledge each finding to commit to sprint backlog</span>
          </div>

          <div className="space-y-2 max-h-[220px] overflow-y-auto">
            {hasActiveData ? (
              evaluationPayload.telemetryNodes.map((issue) => (
                <div 
                  key={issue.id} 
                  className={`p-3 border rounded border-l-4 transition-all flex items-start justify-between gap-4 ${issue.acknowledged ? 'border-l-[#36B37E] bg-[#E3FCEF]/20 opacity-75' : 'border-l-[#FF991F] bg-[#FAFBFC]'}`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#091E42]">{issue.targetName}</span>
                      <span className="text-[9px] bg-[#EBECF0] px-1.5 rounded text-[#42526E] font-bold">{issue.law}</span>
                    </div>
                    <p className="text-[11px] text-[#42526E]">{issue.explanation}</p>
                    <div className="text-[11px] text-[#36B37E] font-semibold">Recommended Fix Vector: {issue.solution}</div>
                  </div>

                  <button 
                    onClick={() => toggleAcknowledgeNode(issue.id)}
                    className={`shrink-0 px-2 py-1 rounded text-[10px] font-bold ${issue.acknowledged ? 'bg-[#36B37E] text-white' : 'bg-[#EBECF0] text-[#172B4D] hover:bg-[#DFE1E6]'}`}
                  >
                    {issue.acknowledged ? '✓ Checked' : 'Mark Reviewed'}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center italic text-[#7A869A] py-4">Awaiting metric parsing calculations mapping.</p>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}