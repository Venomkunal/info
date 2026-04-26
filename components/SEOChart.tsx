"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Area,
} from "recharts";

const data = [
  { name: "Week 1", value: 10 },
  { name: "Week 2", value: 40 },
  { name: "Week 3", value: 70 },
  { name: "Week 4", value: 100 },
];

export default function SEOChart() {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          
          {/* Gradient */}
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Axis */}
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          {/* Area (background fill) */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#color)"
          />

          {/* Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}