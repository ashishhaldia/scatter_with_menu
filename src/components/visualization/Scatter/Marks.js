const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  colorScale,
  colorValue,
}) =>
  data.map((d, i) => (
    <circle
      className="mark"
      key={i}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={10}
    >
      <title>{d.Species}</title>
    </circle>
  ));

export default Marks;
