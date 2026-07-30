'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    }, 1000);
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
      <div className="flex justify-between mb-1">
        <label className="text-sm text-gray-300">{label}</label>
        <span className="text-sm text-emerald-400 font-mono">
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
        className="w-full h-2 bg-green-900/40 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        aria-label={label}
      />
    </div>
  );

  return (
    <div className="p-6 rounded-xl bg-[#102a1c99] border border-[#22543d4d] backdrop-blur-md shadow-lg" role="region" aria-label="Scenario Simulator">
      <div className="flex items-center gap-2 mb-6 border-b border-green-900/30 pb-4">
        <span className="text-xl">🧪</span>
        <h2 className="text-lg font-semibold text-emerald-50">Scenario Simulator</h2>
      </div>

      <div className="space-y-2">
        <Slider label="Temperature Increase" value={tempIncrease} min={0} max={5} step={0.1} unit="°C" onChange={setTempIncrease} />
        <Slider label="Drought Severity" value={droughtSeverity} min={0} max={100} step={1} unit="%" onChange={setDroughtSeverity} />
        <Slider label="Deforestation Rate" value={deforestationRate} min={0} max={10} step={0.1} unit="%" onChange={setDeforestationRate} />
        <Slider label="Reforestation Rate" value={reforestationRate} min={0} max={10} step={0.1} unit="%" onChange={setReforestationRate} />
        <Slider label="Time Horizon" value={timeHorizon} min={5} max={50} step={5} unit=" yrs" onChange={setTimeHorizon} />
      </div>

      <button
        onClick={handleSimulate}
        disabled={isSimulating}
        className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-lg font-medium transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
      >
        {isSimulating ? (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
        ) : (
          'Run Simulation'
        )}
      </button>

      <AnimatePresence>
        {results && !isSimulating && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-6 pt-6 border-t border-green-900/30 overflow-hidden"
          >
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Simulation Results</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Projected Carbon Change</p>
                <p className={`text-2xl font-bold ${results.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {results.change > 0 ? '+' : ''}{results.change.toFixed(1)}%
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <p className="text-xs text-gray-400 mb-1">Risk Assessment</p>
                <p className={`text-xl font-bold ${
                  results.status === 'Stable' ? 'text-green-400' : 
                  results.status === 'Declining' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {results.status}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2">Recommendations:</p>
              <ul className="space-y-2">
                {results.recommendations.map((rec, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-emerald-500">•</span> {rec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
