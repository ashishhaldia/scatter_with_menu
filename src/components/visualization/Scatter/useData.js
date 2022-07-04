import { useEffect, useState } from "react";
import { csv } from "d3";
const csvurl =
  "https://gist.githubusercontent.com/ashishhaldia/d29f2d6ad67d7c1e08ed1935b223617c/raw/d9ecf0cdb87e9297ee6333479189bcfb3ffe7ebb/iris.csv";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.SepalLengthCm = +d.SepalLengthCm;
      d.SepalWidthCm = +d.SepalWidthCm;
      d.PetalLengthCm = +d.PetalLengthCm;
      d.PetalWidthCm = +d.PetalWidthCm;

      return d;
    };
    csv(csvurl, row).then(setData);
  }, []);
  if (data !== null) {
    return data;
  }
};

export default useData;
