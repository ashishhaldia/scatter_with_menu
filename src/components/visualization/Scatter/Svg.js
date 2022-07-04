import React, { useState } from "react";
import { scaleLinear, extent, scaleOrdinal } from "d3";
import useData from "./useData";
import Marks from "./Marks";
import AxisLeft from "./AxisLeft";
import AxisBottom from "./AxisBottom";
import DropDown from "../../helpers/DropDown";
import ColorLegend from "./ColorLegend";

//import AxisBottom from "./visualizationHelpers/Bar/AxisBottom";
//import AxisLeft from "./visualizationHelpers/Bar/AxisLeft";
//import Marks from "./visualizationHelpers/Bar/Marks";

const width = 960;
const height = 480;
const margin = { top: 20, bottom: 80, left: 100, right: 200 };
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 60;
const Svg = () => {
  const initialXAttribute = "SepalLengthCm";
  const initialYAttribute = "SepalWidthCm";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const data = useData();
  if (!data) {
    return <pre> Loading...</pre>;
  } else {
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = (d) => d[xAttribute];
    const xAxisLabel = xAttribute;

    const options = data.columns
      .slice(1, 5)
      .map((d) => ({ value: d.slice(0, -2), label: d }));
    const yValue = (d) => d[yAttribute];
    const yAxisLabel = yAttribute;
    const xScale = scaleLinear()
      .domain(extent(data, xValue))
      .range([0, innerWidth])
      .nice();
    const yScale = scaleLinear()
      .domain(extent(data, yValue))
      .range([0, innerHeight]);

    ///---Color Value needs to be here
    const colorLegendLabel = "Species";
    const colorValue = (d) => d.Species;
    const colorScale = scaleOrdinal()
      .domain(data.map(colorValue))
      .range(["#137B80", "#8E6C8A", "#E6842A"]);

    //console.log(data);
    return (
      <>
        <DropDown
          options={options}
          id="x-select"
          SelectedXValue={xAttribute}
          onSelectedXValueChange={setXAttribute}
        />
        <DropDown
          options={options}
          id="y-select"
          SelectedXValue={yAttribute}
          onSelectedXValueChange={setYAttribute}
        />
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisBottom
              xScale={xScale}
              innerHeight={innerHeight}
              tickOffset={5}
            />
            <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />

            <text
              className="axis-label"
              textAnchor="middle"
              transform={`translate(${-yAxisLabelOffset},${
                innerHeight / 2
              }) rotate(-90)`}
            >
              {yAxisLabel}
            </text>
            <text
              className="axis-label"
              x={innerWidth / 2}
              textAnchor="middle"
              y={innerHeight + xAxisLabelOffset}
            >
              {xAxisLabel}
            </text>
            <g transform={`translate(${innerWidth + 70},60)`}>
              <text y={-30} x={40} className="axis-label" textAnchor="middle">
                {colorLegendLabel}
              </text>
              <ColorLegend colorScale={colorScale} />
            </g>
            <Marks
              data={data}
              xScale={xScale}
              xValue={xValue}
              yScale={yScale}
              yValue={yValue}
              colorScale={colorScale}
              colorValue={colorValue}
            />
          </g>
        </svg>
      </>
    );
  }
};
export default Svg;
