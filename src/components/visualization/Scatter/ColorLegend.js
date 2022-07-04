const ColorLegend = ({
  colorScale,
  tickSpacing = 25,
  tickSize = 10,
  tickTextOffset = 20,
}) =>
  colorScale.domain().map((domainvalue, i) => {
    return (
      <g key={i} transform={`translate(0,${i * tickSpacing})`}>
        <circle fill={colorScale(domainvalue)} r={tickSize} />
        <text className="tick" x={tickTextOffset} dy=".32em">
          {domainvalue}
        </text>
      </g>
    );
  });
export default ColorLegend;
