import React, { PropTypes as T } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

class HeroBenchmark extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getData() {
    const { benchmark } = this.props;
    const { result } = benchmark;
    const xpPerMin = result.xp_per_min;
    const goldPerMin = result.gold_per_min;
    const data = [];

    for (let i = 0; i < xpPerMin.length; i += 1) {
      const xp = xpPerMin[i];
      const gold = goldPerMin[i];
      data.push({
        percentile: xp.percentile,
        xpPerMin: xp.value,
        goldPerMin: gold.value,
      });
    }
    return data;
  }

  render() {
    const data = this.getData();
    return (
      <div>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="percentile" />
          <YAxis dataKey="xpPerMin" />
          <YAxis dataKey="goldPerMin" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="xpPerMin" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="goldPerMin" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}

HeroBenchmark.propTypes = {
  benchmark: T.object,
};

export default HeroBenchmark;
