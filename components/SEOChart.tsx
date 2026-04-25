"use client";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "W1", value: 10 },
  { name: "W2", value: 40 },
  { name: "W3", value: 70 },
  { name: "W4", value: 100 },
];

export default function SEOChart() {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Line type="monotone" dataKey="value" stroke="#22d3ee" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}