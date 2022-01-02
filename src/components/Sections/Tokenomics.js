import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background: whitesmoke;
    height: 780px;
    overflow: hidden;
    padding-left: 200px;
    
`;

const data = [
    { name: 'Sale', value: 400000000000 },
    { name: 'Liquidity', value: 200000000000 },
    { name: 'Advisors', value: 30000000000 },
    { name: 'CEX Reserve', value: 100000000000 },
    { name: 'Team', value: 100000000000 },
    { name: 'Giveaways', value: 30000000000 },
    { name: 'Play to Earn', value: 100000000000 },
    { name: 'Marketing', value: 40000000000 },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 2;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={4} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  




const Tokenomics = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
        setActiveIndex(index);
        },
        [setActiveIndex]
    );

    return (
        <Section>
            <PieChart width={500} height={500}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#00308f"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
            </PieChart>
        </Section>
       
    )
}

export default Tokenomics
