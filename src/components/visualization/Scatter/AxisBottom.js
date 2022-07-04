const AxisBottom = ({ xScale, innerHeight, tickOffset = 3 }) =>
  xScale.ticks().map((tickvalue) => (
    <g
      className="tick"
      key={tickvalue}
      transform={`translate(${xScale(tickvalue)},0)`}
    >
      <line y2={innerHeight} />
      <text
        style={{ textAnchor: "middle" }}
        dy=".71em"
        y={innerHeight + tickOffset}
      >
        {tickvalue}
      </text>
    </g>
  ));

export default AxisBottom;
