'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SageCard, OperateButton, PillTag } from '@/components/ui/OperateUI';

export function ScenarioSimulator() {
  const [tempIncrease, setTempIncrease] = useState(0);
  const [droughtSeverity, setDroughtSeverity] = useState(0);
  const [deforestationRate, setDeforestationRate] = useState(0);
  const [reforestationRate, setReforestationRate] = useState(0);
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [isSimulating, setIsSimulating] = useState(false);
  const [results, setResults] = useState<{ change: number; status: string; recommendations: string[] } | null>(null);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const base = 100;
      const projected =
        base *
        Math.pow(1 + reforestationRate / 100 - deforestationRate / 100, timeHorizon) *
        (1 - tempIncrease * 0.05) *
        (1 - droughtSeverity / 500);

      const change = ((projected - base) / base) * 100;
      let status = 'Stable';
      if (change < -20) status = 'Critical';
      else if (change < 0) status = 'Declining';
      else status = 'Stable';

      const recommendations = [
        tempIncrease > 2 ? 'Increase heat-resistant species planting.' : 'Maintain current temperature resilience measures.',
        droughtSeverity > 50 ? 'Implement emergency water conservation systems.' : 'Monitor soil moisture levels regularly.',
        deforestationRate > reforestationRate ? 'Deforestation exceeds reforestation. Immediate halt required.' : 'Reforestation pace is adequate. Continue current programs.',
      ];

      setResults({ change, status, recommendations });
      setIsSimulating(false);
    }, 800);
  };

  interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    unit: string;
    onChange: (value: number) => void;
  }

  const Slider = ({ label, value, min, max, step, unit, onChange }: SliderProps) => (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <label className="font-muoto text-[12px] font-medium text-forest-ink/70">[{label}]</label>
        <span className="font-denim text-[14px] text-forest-ink font-medium">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-lichen rounded-none appearance-none cursor-pointer accent-forest-ink"
        aria-label={label}
      />
    </div>
  );

  return (
    <SageCard padding="md" className="flex flex-col h-full" role="region" aria-label="Scenario Simulator">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-lichen">
        <h2 className="font-denim text-[16px] font-medium text-forest-ink">Simulation Engine</h2>
      </div>

      <div className="space-y-1 flex-1 overflow-y-auto pr-2">
        <Slider label="Temp Delta" value={tempIncrease} min={0} max={5} step={0.1} unit="°C" onChange={setTempIncrease} />
        <Slider label="Drought Idx" value={droughtSeverity} min={0} max={100} step={1} unit="%" onChange={setDroughtSeverity} />
        <Slider label="Loss Rate" value={deforestationRate} min={0} max={10} step={0.1} unit="%" onChange={setDeforestationRate} />
        <Slider label="Recovery Rate" value={reforestationRate} min={0} max={10} step={0.1} unit="%" onChange={setReforestationRate} />
        <Slider label="Horizon" value={timeHorizon} min={5} max={50} step={5} unit="y" onChange={setTimeHorizon} />
      </div>

      <OperateButton
        onClick={handleSimulate}
        disabled={isSimulating}
        className="w-full mt-4 flex justify-center items-center h-10"
      >
        {isSimulating ? (
          <span className="font-cinetype text-[12px] tracking-cinetype uppercase animate-pulse">Computing...</span>
        ) : (
          'Execute Scenario'
        )}
      </OperateButton>

      <AnimatePresence>
        {results && !isSimulating && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 pt-4 border-t border-lichen overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase mb-1">Yield Delta</p>
                <p className="font-denim text-[20px] font-bold text-forest-ink">
                  {results.change > 0 ? '+' : ''}{results.change.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase mb-1">Status</p>
                <PillTag variant={results.status === 'Stable' ? 'outline' : 'filled'} className={results.status !== 'Stable' ? 'bg-forest-ink text-bone-white' : ''}>
                  {results.status}
                </PillTag>
              </div>
            </div>

            <div>
              <p className="font-cinetype text-[11px] text-slate-smoke tracking-cinetype uppercase mb-1">Directives</p>
              <ul className="space-y-1">
                {results.recommendations.map((rec, i) => (
                  <li key={i} className="flex gap-2 font-denim text-[12px] leading-tight text-forest-ink/80">
                    <span className="text-forest-ink">-</span> {rec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SageCard>
  );
}
