import React, { useState, useEffect } from 'react';
import { 
  UploadCloud, Sliders, ChevronDown, X, HelpCircle, AlertTriangle, 
  CheckCircle2, Info, FileText, Search, RefreshCw, Eye, Layout
} from 'lucide-react';

export default function App() {
  // --- BLUEPRINT STATE PARAMETERS ---
  const [context, setContext] = useState('Analytics Dashboard');
  const [audience, setAudience] = useState('Expert Users');
  const [goal, setGoal] = useState('Revenue Filter');
  const [frameworks, setFrameworks] = useState(["Miller's", "WCAG", "Cognitive Load"]);

  // --- CORE ENGINE PIPELINE STATES ---
  const [imageSrc, setImageSrc] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasActiveData, setHasActiveData] = useState(false); // Controls active state validation
  const [scanPipelineStage, setScanPipelineStage] = useState('');

  // --- DYNAMIC AI EXPERT RESULTS METRIC MATRIX ---
  const [evaluationPayload, setEvaluationPayload] = useState({
    grade: "Pending Assessment",
    percentage: 0,
    executiveSummary: "Awaiting source layout processing payload. Upload a production interface wireframe blueprint or active screenshot flat to run multi-dimensional cognitive computing diagnostics.",
    cognitiveLoad: { score: "0.0", status: "N/A" },
    chunking: { score: "0.0", status: "N/A" },
    decisionSpeed: { score: "0.0", status: "N/A" },
    contrastTable: [],
    fixRepository: []
  });

  // --- DYNAMIC PIPELINE MODIFIER TRIGGER ENGINE ---
  const runAiHciAssessment = (uploadedImage) => {
    setIsAnalyzing(true);
    setHasActiveData(false);
    
    const processingStages = [
      "AI-AVS Layout Grid Extraction...",
      "Analyzing Chunking via Miller's Law Parameters...",
      "Calculating Color Contrast Bounds Matrix...",
      "Generating Stress-First Cognitive Target Weights..."
    ];

    processingStages.forEach((stage, index) => {
      setTimeout(() => {
        setScanPipelineStage(stage);
        
        if (index === processingStages.length - 1) {
          setIsAnalyzing(false);
          setHasActiveData(true);

          // Deep UX Expert Rule-Base: Compute specific detailed outputs grounded to specific configuration fields
          const isB2BAnalytics = context === 'Analytics Dashboard';
          const isExpert = audience === 'Expert Users';

          setEvaluationPayload({
            grade: isB2BAnalytics ? "Good" : "Needs Review",
            percentage: isB2BAnalytics && isExpert ? 82 : 64,
            executiveSummary: `Global executive Summary are good in societs for a sample dashboard UX analysis dashboard detailed, evidence-based data. Optimized carefully for targeting criteria matching an objective configuration profile built around [${audience}] attempting [${goal}] workflows.`,
            cognitiveLoad: { 
              score: isB2BAnalytics ? "7.1/10" : "8.4/10", 
              status: isB2BAnalytics ? "High Cognitive Burden" : "Critical Load Drop" 
            },
            chunking: { 
              score: isExpert ? "6.4/10" : "4.8/10", 
              status: "Avoid > 7 groups" 
            },
            decisionSpeed: { 
              score: "7.8/10", 
              status: "Excessive Filter Choices" 
            },
            contrastTable: [
              { element: "Primary Focus Title Text", ratio: "7.1:1", status: "Pass AAA", pass: true },
              { element: "Sub-Header Context Label", ratio: isB2BAnalytics ? "4.8:1" : "3.2:1", status: isB2BAnalytics ? "Pass AA" : "Fail AA", pass: isB2BAnalytics },
              { element: "Help Dynamic Anchor Icon", ratio: "2.1:1", status: "Fail AA", pass: false },
              { element: "Inactive Workspace Tab Link", ratio: "3.5:1", status: "Fail AA", pass: false }
            ],
            fixRepository: [
              { id: "UX-001", law: "Jakob's Law", name: "Hidden Filters", solution: "Move secondary inputs to horizontal structural toolbar configuration.", roi: "Reduce task navigation overhead by ~20%" },
              { id: "UX-002", law: "Hick's Law", name: "Filter Complexities Array", solution: "Enforce progressive disclosure parameters under collapsible card systems.", roi: "Boost interactive decision speed calculations by 35%" },
              { id: "UX-003", law: "Miller's Law", name: "Metric Group Volume Exceeded", solution: "Segment structural layout boundaries into clusters of max 5 active items.", roi: "Minimizes item identification errors under high processing pressure" }
            ]
          });
        }
      }, (index + 1) * 500);
    });
  };

  const handleDropzoneUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
        runAiHciAssessment(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const clearAnalysisSession = () => {
    setImageSrc(null);
    setHasActiveData(false);
    setEvaluationPayload({
      grade: "Pending Assessment",
      percentage: 0,
      executiveSummary: "Awaiting source layout processing payload. Upload a production interface wireframe blueprint or active screenshot flat to run multi-dimensional cognitive computing diagnostics.",
      cognitiveLoad: { score: "0.0", status: "N/A" },
      chunking: { score: "0.0", status: "N/A" },
      decisionSpeed: { score: "0.0", status: "N/A" },
      contrastTable: [],
      fixRepository: []
    });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans antialiased flex flex-col md:flex-row select-none">
      
      {/* ================= SIDEBAR: AUDITOR SETUP CONTROLS ================= */}
      <aside className="w-full md:w-80 bg-[#1E293B] border-r border-[#334155] flex flex-col shrink-0">
        <div className="p-4 border-b border-[#334155] flex items-center gap-3">
          <div className="w-8 h-8 bg-[#2563EB] rounded flex items-center justify-center text-white font-bold text-base shadow-sm">
            ▲
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-white">Auditor Setup</span>
        </div>

        <div className="flex border-b border-[#334155] px-2 text-xs">
          <button className="py-3 px-3 font-bold border-b-2 text-[#38BDF8] border-[#38BDF8]">
            Upload New Screenshot
          </button>
          <button className="py-3 px-3 font-semibold text-[#94A3B8] hover:text-white transition-colors">
            Evaluation History (14)
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto space-y-6 text-xs">
          
          {/* Workspace File Dropzone */}
          <div className="space-y-2.5">
            <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Analysis Input Workspace</h3>
            <label className="border-2 border-dashed border-[#38BDF8] bg-[#0284C7]/5 rounded-lg p-6 block text-center cursor-pointer hover:bg-[#0284C7]/15 transition relative overflow-hidden">
              <input type="file" className="hidden" accept="image/*" onChange={handleDropzoneUpload} />
              <UploadCloud size={32} className="mx-auto text-[#38BDF8] mb-1.5" />
              <p className="font-bold text-[#38BDF8]">Drop screenshot for HCI Audit</p>
              <p className="text-[#64748B] mt-0.5">Scans dimensions automatically</p>

              {isAnalyzing && (
                <div className="absolute inset-0 bg-[#1E293B] flex flex-col items-center justify-center p-3 text-center">
                  <RefreshCw className="animate-spin text-[#38BDF8] mb-2" size={24} />
                  <span className="font-bold text-white tracking-wide animate-pulse text-[11px]">{scanPipelineStage}</span>
                </div>
              )}
            </label>
          </div>

          {/* Audit parameters panel inputs */}
          <div className="space-y-4 pt-4 border-t border-[#334155]">
            <h3 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Audit Parameters</h3>
            
            <div>
              <label className="block font-bold text-[#94A3B8] mb-1">Context Blueprint</label>
              <div className="relative">
                <select value={context} onChange={(e) => setContext(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Analytics Dashboard</option>
                  <option>E-commerce Checkout Flow</option>
                  <option>Emergency Dispatch Center CRM</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#94A3B8] mb-1">Target Audience Profile</label>
              <div className="relative">
                <select value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Expert Users</option>
                  <option>General Consumer Pool</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#94A3B8] mb-1">Objective Goal Direction</label>
              <div className="relative">
                <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-[#0F172A] border border-[#334155] text-white rounded p-2 pr-8 appearance-none focus:outline-none focus:ring-1 focus:ring-[#38BDF8]">
                  <option>Revenue Filter</option>
                  <option>Minimize Input Delay Rates</option>
                </select>
                <ChevronDown size={14} className="absolute right-2.5 top-3 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#94A3B8] mb-1">Framework Guidelines (Active)</label>
              <div className="flex flex-wrap gap-1 bg-[#0F172A] border border-[#334155] p-2 rounded min-h-[40px]">
                {frameworks.map(fw => (
                  <span key={fw} className="inline-flex items-center gap-1 bg-[#334155] text-white px-2 py-0.5 rounded text-[11px] font-semibold">
                    {fw}
                    <button onClick={() => removeFramework(fw)} className="hover:bg-[#475569] rounded-full p-0.5"><X size={10} /></button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN DASHBOARD CONTENT AREA ================= */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto space-y-5">
        
        {/* Title Node Row */}
        <div className="flex justify-between items-center bg-[#1E293B] border border-[#334155] p-4 rounded-lg">
          <div className="space-y-0.5">
            <h1 className="text-lg font-bold tracking-tight text-white">Evaluation Result</h1>
            <p className="text-xs text-[#94A3B8] font-medium">
              AI HCI AUDIT REPORT: {hasActiveData ? `${context} Analysis Model` : "Waiting for Input Snapshot..."}
            </p>
          </div>
          {hasActiveData && (
            <button onClick={clearAnalysisSession} className="text-xs font-semibold text-[#94A3B8] hover:text-[#EF4444] border border-[#334155] px-2.5 py-1.5 rounded bg-[#0F172A] transition-colors">
              Reset Audit Workspace
            </button>
          )}
        </div>

        {/* EXECUTIVE SUMMARY DISCLOSURE CARD */}
        <div className={`border rounded-lg p-4 transition-all flex flex-col sm:flex-row sm:items-center gap-4 ${hasActiveData ? 'bg-[#1E293B] border-[#334155] border-l-4 border-l-[#10B981]' : 'bg-[#1E293B]/40 border-[#334155]/60 opacity-60'}`}>
          <div className="shrink-0 space-y-0.5">
            <span className="text-[10px] font-bold text-[#64748B] uppercase block">Executive Summary</span>
            <span className={`inline-block font-bold text-xs px-2 py-0.5 rounded ${hasActiveData ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30' : 'bg-[#334155] text-[#64748B]'}`}>
              {hasActiveData ? `${evaluationPayload.grade} (${evaluationPayload.percentage}%)` : "Locked"}
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] font-medium leading-relaxed sm:border-l sm:border-[#334155] sm:pl-4">
            {evaluationPayload.executiveSummary}
          </p>
        </div>

        {/* COGNITIVE HEURISTICS THREE METRIC DIAL BOX CARD */}
        <div className={`bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-4 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
          <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-[#334155] pb-2">
            Cognitive Heuristics Scores (Miller's, Hick's)
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Dial Slot 1 */}
            <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
              <span className="text-[10px] font-bold text-[#64748B] uppercase block mb-2">Overall Cognitive Load</span>
              <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent rotate-45 transition-colors ${hasActiveData ? 'border-t-[#F59E0B] border-r-[#F59E0B]' : 'border-t-[#334155] border-r-[#334155]'}`}></div>
              </div>
              <div className="text-sm font-bold text-white">{evaluationPayload.cognitiveLoad.score}</div>
              <span className="text-[9px] text-[#94A3B8] block mt-0.5 font-medium">{evaluationPayload.cognitiveLoad.status}</span>
            </div>

            {/* Dial Slot 2 */}
            <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
              <span className="text-[10px] font-bold text-[#64748B] uppercase block mb-2">Information Chunking (Miller's)</span>
              <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent rotate-12 transition-colors ${hasActiveData ? 'border-t-[#10B981] border-r-[#10B981]' : 'border-t-[#334155] border-r-[#334155]'}`}></div>
              </div>
              <div className="text-sm font-bold text-white">{evaluationPayload.chunking.score}</div>
              <span className="text-[9px] text-[#64748B] block mt-0.5 font-bold uppercase tracking-wider">{evaluationPayload.chunking.status}</span>
            </div>

            {/* Dial Slot 3 */}
            <div className="bg-[#0F172A] border border-[#334155] rounded-lg p-4 text-center">
              <span className="text-[10px] font-bold text-[#64748B] uppercase block mb-2">Decision Speed (Hick's Law)</span>
              <div className="inline-block relative w-20 h-10 overflow-hidden mb-1">
                <div className={`absolute top-0 left-0 w-20 h-20 rounded-full border-8 border-b-transparent border-l-transparent rotate-45 transition-colors ${hasActiveData ? 'border-t-[#EF4444] border-r-[#EF4444]' : 'border-t-[#334155] border-r-[#334155]'}`}></div>
              </div>
              <div className="text-sm font-bold text-white">{evaluationPayload.decisionSpeed.score}</div>
              <span className="text-[9px] text-[#94A3B8] block mt-0.5 font-medium">{evaluationPayload.decisionSpeed.status}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM METRIC MATRIX CONFIGURATION ROWS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          {/* ACCESSIBILITY & COLOR CONTRAST (WCAG 2.1) MATRIX CARD */}
          <div className={`bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-3 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-white block border-b border-[#334155] pb-1.5">
              Accessibility & Color Contrast (WCAG 2.1)
            </span>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#94A3B8]">
                <thead>
                  <tr className="bg-[#0F172A] border-b border-[#334155] text-[#64748B] font-bold">
                    <th className="p-2">Target Node Element</th>
                    <th className="p-2">Measured Ratio</th>
                    <th className="p-2 text-right">Compliance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#334155]">
                  {hasActiveData ? (
                    evaluationPayload.contrastTable.map((issue, idx) => (
                      <tr key={idx} className="hover:bg-[#0F172A]/40 transition-colors">
                        <td className="p-2 font-bold text-white">{issue.element}</td>
                        <td className="p-2 font-mono text-[11px] text-[#38BDF8]">{issue.ratio}</td>
                        <td className="p-2 text-right">
                          <span className={`inline-block text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${issue.pass ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#EF4444]/20 text-[#EF4444]'}`}>
                            {issue.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-4 text-center italic text-[#64748B]">Awaiting visual matrix ingestion payload.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* INTERACTION HEURISTICS (FITTS'S, VISUAL HIERARCHY OVERLAY CARD) */}
          <div className={`bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-3 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-white block border-b border-[#334155] pb-1.5">
              Interaction Heuristics (Fitts's, Visual Hierarchy)
            </span>
            <div className="border border-[#334155] rounded-lg bg-[#0F172A] p-2 min-h-[160px] flex items-center justify-center relative shadow-inner">
              {imageSrc ? (
                <div className="relative inline-block max-w-full">
                  <img src={imageSrc} alt="Audit Targeting Ingestion Frame" className="max-h-[140px] rounded object-contain border border-[#334155]" />
                  <div className="absolute top-2 right-2 bg-[#10B981] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md animate-pulse">✓ Primary CTA Configured</div>
                  <div className="absolute bottom-2 left-4 bg-[#2563EB] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md">ℹ Visual Heatmap Active</div>
                </div>
              ) : (
                <div className="text-center text-[#64748B] p-4">
                  <Eye size={28} className="mx-auto mb-1 text-[#475569]" />
                  <p className="text-[11px] font-medium mt-1">Telemetry mapping elements require an active source flat image upload script.</p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* SPRINT ACTION REPOSITORY MATRIX ASSIGNMENTS BACKLOG */}
        <div className={`bg-[#1E293B] border border-[#334155] rounded-lg p-4 space-y-3.5 transition-all ${hasActiveData ? '' : 'opacity-40 pointer-events-none'}`}>
          <div className="flex justify-between items-center border-b border-[#334155] pb-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Fix Repository Backlog Matrix</span>
            <span className="text-[10px] text-[#64748B] font-bold uppercase">Engineering Targets</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {hasActiveData ? (
              evaluationPayload.fixRepository.map((item) => (
                <div key={item.id} className="p-3 bg-[#0F172A] border border-[#334155] rounded-lg border-l-4 border-l-[#FF991F] space-y-1.5 hover:border-[#4C9AFF] transition-all">
                  <div className="flex justify-between font-bold items-center">
                    <span className="text-[#FF991F] font-mono text-[11px]">{item.id} • {item.name}</span>
                    <span className="text-[9px] bg-[#334155] px-1.5 rounded text-[#94A3B8] font-medium">{item.law}</span>
                  </div>
                  <p className="text-[#94A3B8] font-normal text-[11px] leading-relaxed"><strong className="text-white">Vector:</strong> {item.solution}</p>
                  <div className="text-[10px] text-[#10B981] font-bold pt-1">{item.roi}</div>
                </div>
              ))
            ) : (
              <p className="text-center italic text-[#64748B] col-span-3 py-6">Awaiting spatial coordinate calculation dataset structures.</p>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}