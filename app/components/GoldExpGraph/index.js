import React, { PropTypes as T } from 'react';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';

class GoldExpGraph extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = [];
    const { match } = this.props;
    const radiantXpAdv = match.radiant_xp_adv;
    const radiantGoldAdv = match.radiant_gold_adv;
    for (let i = 0; i < radiantXpAdv.length; i += 1) {
      data.push({
        xp: radiantXpAdv[i],
        gold: radiantGoldAdv[i],
      });
    }
    return (
      <div>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="percentile" />
          <YAxis dataKey="gold" />
          <YAxis dataKey="xp" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="xp" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="gold" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}

GoldExpGraph.propTypes = {
  match: T.object,
};

export default GoldExpGraph;
