import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  IndianRupee, 
  Zap, 
  Download, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export default function RoiCalculator({ onOpenRfq, onShowToast }) {
  const [material, setMaterial] = useState('ss');
  const [monthlyParts, setMonthlyParts] = useState(6000);
  const [legacyCycleTime, setLegacyCycleTime] = useState(6.5); // minutes
  const [shifts, setShifts] = useState(2); // 1, 2, or 3 shifts
  const [hourlyShopRate, setHourlyShopRate] = useState(650); // INR per hour

  // Material speed multipliers
  const materialMultipliers = {
    al: { name: 'Aluminum 6061 / 7075', speedGain: 0.45 },
    ci: { name: 'Cast Iron Grade 25 / SG Iron', speedGain: 0.40 },
    ss: { name: 'Stainless Steel 304 / 316L', speedGain: 0.38 },
    hard: { name: 'Hardened Alloy Steel (45-55 HRC)', speedGain: 0.32 }
  };

  const calculation = useMemo(() => {
    const selectedMat = materialMultipliers[material] || materialMultipliers.ss;
    
    // PMT cycle time with high-torque spindle and fast rapid traverse
    const pmtCycleTime = +(legacyCycleTime * (1 - selectedMat.speedGain)).toFixed(1);
    const minutesSavedPerPart = +(legacyCycleTime - pmtCycleTime).toFixed(1);

    // Monthly hours saved
    const totalMinutesSaved = monthlyParts * minutesSavedPerPart;
    const hoursSavedPerMonth = Math.round(totalMinutesSaved / 60);

    // Monetary savings per month
    const monthlySavingsInr = hoursSavedPerMonth * hourlyShopRate;
    const annualSavingsInr = monthlySavingsInr * 12;

    // Additional parts capacity
    const additionalPartsPossible = Math.round((hoursSavedPerMonth * 60) / pmtCycleTime);

    // Payback period assuming typical CNC investment of ₹25,00,000
    const estimatedMachineCost = 2500000;
    const paybackMonths = +(estimatedMachineCost / (monthlySavingsInr || 1)).toFixed(1);

    return {
      pmtCycleTime,
      minutesSavedPerPart,
      hoursSavedPerMonth,
      monthlySavingsInr,
      annualSavingsInr,
      additionalPartsPossible,
      paybackMonths: paybackMonths > 60 ? '60+' : paybackMonths
    };
  }, [material, monthlyParts, legacyCycleTime, shifts, hourlyShopRate]);

  const handleDownloadReport = () => {
    onShowToast?.(`ROI Analysis Report generated: Estimated annual savings of ₹${(calculation.annualSavingsInr / 100000).toFixed(2)} Lakhs!`);
  };

  return (
    <section id="roi-calc" style={{
      padding: '80px 24px',
      background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="tech-badge cyan" style={{ marginBottom: '12px' }}>
            <Calculator size={14} /> FACTORY INVESTMENT & ROI CALCULATOR
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#ffffff',
            marginBottom: '14px'
          }}>
            Calculate Your Machine <span style={{ color: '#06b6d4' }}>Payback Period</span> & Savings
          </h2>
          <p style={{
            color: '#94a3b8',
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: 1.6
          }}>
            Estimate how transitioning to Premier Machine Tools' high-rigidity CNC machining centers reduces cycle times, cuts power dissipation, and pays for itself within months.
          </p>
        </div>

        {/* Calculator Grid: Inputs Left, Live Results Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Inputs Panel */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <h3 style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Zap size={18} color="#f59e0b" /> Workshop Parameters
            </h3>

            {/* Material Selector */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                Primary Component Material:
              </label>
              <select
                id="calc-material-select"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                <option value="ss">Stainless Steel 304 / 316L (High Work-Hardening)</option>
                <option value="ci">Cast Iron Grade 25 / SG Iron (Pump & Motor Casings)</option>
                <option value="al">Aluminum 6061 / 7075 (High Speed Aerospace)</option>
                <option value="hard">Hardened Alloy Steel 45-55 HRC (Automotive Gears)</option>
              </select>
            </div>

            {/* Monthly Production Parts Slider */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>
                  Monthly Production Volume:
                </label>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
                  {monthlyParts.toLocaleString()} parts/month
                </span>
              </div>
              <input
                id="calc-parts-slider"
                type="range"
                min="1000"
                max="25000"
                step="500"
                value={monthlyParts}
                onChange={(e) => setMonthlyParts(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
              />
            </div>

            {/* Current Cycle Time Slider */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>
                  Current Cycle Time per Part:
                </label>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>
                  {legacyCycleTime} minutes
                </span>
              </div>
              <input
                id="calc-cycletime-slider"
                type="range"
                min="1.5"
                max="15.0"
                step="0.5"
                value={legacyCycleTime}
                onChange={(e) => setLegacyCycleTime(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#06b6d4', cursor: 'pointer' }}
              />
            </div>

            {/* Shifts per Day */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                Factory Daily Shifts:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                {[1, 2, 3].map((s) => (
                  <button
                    key={s}
                    id={`shift-btn-${s}`}
                    type="button"
                    onClick={() => setShifts(s)}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      background: shifts === s ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      color: shifts === s ? '#fbbf24' : '#94a3b8',
                      border: shifts === s ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {s} {s === 1 ? 'Shift (8h)' : s === 2 ? 'Shifts (16h)' : 'Shifts (24h)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Shop Hour Machine Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600 }}>
                  Estimated Shop Hour Cost:
                </label>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                  ₹{hourlyShopRate} / hr
                </span>
              </div>
              <input
                id="calc-rate-slider"
                type="range"
                min="400"
                max="1500"
                step="50"
                value={hourlyShopRate}
                onChange={(e) => setHourlyShopRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Results Panel */}
          <div className="glass-card" style={{
            padding: '28px',
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(9, 14, 26, 0.95) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.4)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.5), 0 0 24px rgba(6, 182, 212, 0.15)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <TrendingUp size={18} color="#06b6d4" /> Projected ROI & Capacity Gains
            </h3>

            {/* Big Highlight: Payback Period & Annual Savings */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginBottom: '24px'
            }}>
              <div style={{
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                  Payback Period
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  fontFamily: 'var(--font-heading)',
                  marginTop: '4px'
                }}>
                  {calculation.paybackMonths} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Mo.</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                  Standard Capital Recovery
                </div>
              </div>

              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                  Annual Cost Savings
                </div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#34d399',
                  fontFamily: 'var(--font-heading)',
                  marginTop: '4px'
                }}>
                  ₹{(calculation.annualSavingsInr / 100000).toFixed(1)} <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Lakhs</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                  Direct Shopfloor Net Savings
                </div>
              </div>
            </div>

            {/* Detailed Metrics Breakdown */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} color="#f59e0b" /> PMT High-Speed Cycle Time:
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  {calculation.pmtCycleTime} min <span style={{ color: '#10b981', fontSize: '0.78rem' }}>(-{calculation.minutesSavedPerPart} min/part)</span>
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Machining Hours Saved Monthly:
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38bdf8' }}>
                  {calculation.hoursSavedPerMonth} Hours / Month
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Extra Production Capacity:
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f59e0b' }}>
                  +{calculation.additionalPartsPossible.toLocaleString()} units / month
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Monthly Savings:
                </span>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>
                  ₹{calculation.monthlySavingsInr.toLocaleString()}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenRfq}
                id="calc-request-quote-btn"
                className="btn-primary"
                style={{ flexGrow: 1, padding: '12px 18px', fontSize: '0.92rem' }}
              >
                <span>Request Custom Machine Proposal</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleDownloadReport}
                id="calc-download-report-btn"
                className="btn-secondary"
                style={{ padding: '12px 16px', fontSize: '0.92rem' }}
              >
                <Download size={16} />
                <span>Save Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
