'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCarbonLedger } from '@/hooks/useCarbonLedger';
import type { CarbonCredit } from '@/lib/types/forest-data';

type SortKey = keyof CarbonCredit;
type SortConfig = {
  key: SortKey;
  direction: 'asc' | 'desc';
} | null;

export default function LedgerPage() {
  const { data, loading } = useCarbonLedger();
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);

  if (loading || !data) {
    return (
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-24 bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
          ))}
        </div>
        <div className="h-[600px] bg-[#102a1c]/60 rounded-xl animate-pulse border border-green-800/20" />
      </div>
    );
  }

  const { credits, summary } = data;

  const handleSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCredits = [...credits].sort((a, b) => {
    if (!sortConfig) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusBadge = (status: CarbonCredit['status']) => {
    const styles: Record<CarbonCredit['status'], string> = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      retired: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      expired: 'bg-red-500/20 text-red-400 border-red-500/30',
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const columns: { header: string; key: SortKey; render: (c: CarbonCredit) => React.ReactNode }[] = [
    { header: 'Serial Number', key: 'serialNumber', render: (c) => <span className="font-medium text-white">{c.serialNumber}</span> },
    { header: 'Parcel', key: 'parcelName', render: (c) => <span className="text-gray-300">{c.parcelName}</span> },
    { header: 'Tonnes', key: 'tonnes', render: (c) => <span className="text-gray-300">{c.tonnes.toLocaleString()}</span> },
    { header: 'Price/Tonne', key: 'pricePerTonne', render: (c) => <span className="text-gray-300">${c.pricePerTonne.toFixed(2)}</span> },
    { header: 'Total Value', key: 'tonnes', render: (c) => <span className="text-gray-200 font-medium">${(c.tonnes * c.pricePerTonne).toLocaleString()}</span> },
    { header: 'Standard', key: 'verificationStandard', render: (c) => <span className="bg-gray-800/50 px-2 py-1 rounded text-xs border border-gray-700/50">{c.verificationStandard}</span> },
    { header: 'Status', key: 'status', render: (c) => getStatusBadge(c.status) },
    { header: 'Buyer', key: 'buyer', render: (c) => <span className="text-gray-400">{c.buyer}</span> },
    { header: 'Issue Date', key: 'issueDate', render: (c) => <span className="text-gray-400">{new Date(c.issueDate).toLocaleDateString()}</span> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Carbon Ledger</h1>
          <p className="text-[#86efac] text-sm">Manage and track your verified carbon assets</p>
        </div>
        <button className="px-4 py-2 bg-[#4ade80] hover:bg-[#34d399] text-[#0a1a12] font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4ade80] focus-visible:ring-offset-[#0d1f15] shadow-lg shadow-green-900/20">
          Export CSV
        </button>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Credits', value: summary.totalCredits },
          { label: 'Active Assets', value: summary.activeCredits },
          { label: 'Total Volume', value: `${summary.totalTonnes.toLocaleString()} tCO₂e` },
          { label: 'Portfolio Value', value: `$${Math.round(summary.totalValue).toLocaleString()}` },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-5">
            <p className="text-sm text-[#86efac] mb-1 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Credits Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="text-xs uppercase bg-[#0a1a12]/80 text-[#86efac] border-b border-[rgba(34,84,61,0.3)]">
              <tr>
                {columns.map((col) => (
                  <th 
                    key={col.header} 
                    className="px-6 py-4 font-semibold cursor-pointer hover:text-white hover:bg-green-900/20 transition-colors select-none group"
                    onClick={() => handleSort(col.key)}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{col.header}</span>
                      <span className={`text-[#4ade80] opacity-0 group-hover:opacity-50 transition-opacity ${sortConfig?.key === col.key ? '!opacity-100' : ''}`}>
                        {sortConfig?.key === col.key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(34,84,61,0.1)]">
              {sortedCredits.map((credit, i) => (
                <tr 
                  key={credit.id} 
                  className={`hover:bg-[#102a1c]/80 transition-colors ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#0a1a12]/30'}`}
                >
                  {columns.map((col) => (
                    <td key={col.header} className="px-6 py-4">{col.render(credit)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {sortedCredits.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No carbon credits found.
          </div>
        )}
      </div>
    </motion.div>
  );
}
