
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Tooltip as PieTooltip } from 'recharts';
import type { BarChartData, PieChartData } from '../types';

const barData: BarChartData[] = [
  { name: 'Auth API', recurring: 32, new: 15 },
  { name: 'Payments', recurring: 25, new: 8 },
  { name: 'Notifications', recurring: 18, new: 22 },
  { name: 'User Profile', recurring: 12, new: 5 },
  { name: 'Search', recurring: 9, new: 18 },
  { name: 'Checkout', recurring: 5, new: 3 },
];

const pieData: PieChartData[] = [
  { name: 'Race Condition', value: 40 },
  { name: 'Memory Leak', value: 25 },
  { name: 'N+1 Query', value: 15 },
  { name: 'Config Error', value: 20 },
];

const PIE_COLORS = ['#0ea5e9', '#06b6d4', '#14b8a6', '#6366f1'];

const DashboardPreview: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 sm:py-24 bg-brand-light-dark/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Uncover Insights, Not Just Data</h2>
          <p className="mt-4 text-lg text-slate-400">
            Our intuitive dashboard centralizes intelligence from all your tools, providing a clear, actionable view of your application's health.
          </p>
        </div>

        <div className="mt-16 bg-brand-light-dark rounded-xl border border-slate-700 shadow-2xl shadow-brand-blue/10 animate-fade-in-up">
          <div className="p-2 border-b border-slate-700 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-4">Recurring Bugs by Service</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#cbd5e1' }} cursor={{fill: 'rgba(14, 165, 233, 0.1)'}}/>
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                    <Bar dataKey="recurring" fill="#0ea5e9" name="Recurring" />
                    <Bar dataKey="new" fill="#64748b" name="New" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Root Cause Analysis</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={110} fill="#8884d8" dataKey="value">
                      {pieData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <PieTooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#cbd5e1' }} />
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
