import React from 'react';
import Plot from 'react-plotly.js';

function getrandom(num, mul) {
  const value = [];
  for (let i = 0; i <= num; i++) {
    const rand = Math.random() * mul;
    value.push(rand);
  }
  return value;
}

const xData = [
  'Carmelo<br>Anthony',
  'Dwyane<br>Wade',
  'Deron<br>Williams',
  'Brook<br>Lopez',
  'Damian<br>Lillard',
  'David<br>West',
  'Blake<br>Griffin',
  'David<br>Lee',
  'Demar<br>Derozan',
];

const yData = [
  getrandom(30, 10),
  getrandom(30, 20),
  getrandom(30, 25),
  getrandom(30, 40),
  getrandom(30, 45),
  getrandom(30, 30),
  getrandom(30, 20),
  getrandom(30, 15),
  getrandom(30, 43),
];

const colors = [
  'rgba(93, 164, 214, 0.5)',
  'rgba(255, 144, 14, 0.5)',
  'rgba(44, 160, 101, 0.5)',
  'rgba(255, 65, 54, 0.5)',
  'rgba(207, 114, 255, 0.5)',
  'rgba(127, 96, 0, 0.5)',
  'rgba(255, 140, 184, 0.5)',
  'rgba(79, 90, 117, 0.5)',
  'rgba(222, 223, 0, 0.5)',
];

const data = xData.map((label, i) => ({
  type: 'box',
  y: yData[i],
  name: label,
  boxpoints: 'all',
  jitter: 0.5,
  whiskerwidth: 0.2,
  fillcolor: colors[i],
  marker: {
    size: 2,
  },
  line: {
    width: 1,
  },
}));

const layout = {
  title: 'Points Scored by the Top 9 Scoring NBA Players in 2012',
  yaxis: {
    autorange: true,
    showgrid: true,
    zeroline: true,
    dtick: 5,
    gridcolor: 'rgb(255, 255, 255)',
    gridwidth: 1,
    zerolinecolor: 'rgb(255, 255, 255)',
    zerolinewidth: 2,
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100,
  },
  paper_bgcolor: 'rgb(243, 243, 243)',
  plot_bgcolor: 'rgb(243, 243, 243)',
  showlegend: false,
};

const Home2 = () => <Plot data={data} layout={layout} style={{width:'90%',height:'90%'}} />;

export default Home2;
