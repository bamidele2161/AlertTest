import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import "./style.css";
import { AnalyticsChartProps } from "../../interfaces/Global";
import { options, statusTab } from "../../utils";

const CustomBar = (props: any) => {
  const { fill, x, y, width, height } = props;
  const borderTopHeight = 3;
  const borderRadius = 10;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={borderRadius}
        ry={borderRadius}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={borderTopHeight}
        fill="#5540EB"
        rx={borderRadius}
      />
    </g>
  );
};

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  const [filterBy, setFilter] = useState<"week" | "month">("week");
  const [activeSubTab, setActiveSubTab] = useState(1);

  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="tab-container">
          {statusTab.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${
                activeSubTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveSubTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <select
          name="time"
          onChange={(event) =>
            setFilter(event.target.value as "week" | "month")
          }
          value={filterBy}
          className="chart-select"
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <Bar
            dataKey="uv"
            fill="#FAFAFF"
            stroke="#000000"
            strokeWidth={2}
            shape={<CustomBar />}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tickLine={{ stroke: "white" }}
            axisLine={{ stroke: "white" }}
            dy={10}
            dx={15}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={[0, 3000]}
            tickLine={{ stroke: "white" }}
            axisLine={{ stroke: "white" }}
            dx={0}
            tickFormatter={(amt: number) => `N${amt}`}
          >
            <Label position="left" />
          </YAxis>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
