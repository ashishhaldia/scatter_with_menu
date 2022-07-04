const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickvalue) => (
    <g
      className="tick"
      transform={`translate(0,${yScale(tickvalue)})`}
      key={tickvalue}
    >
      <line x2={innerWidth} />
      <text style={{ textAnchor: "end" }} x={-tickOffset} dy=".32em">
        {tickvalue}
      </text>
    </g>
  ));

export default AxisLeft;
