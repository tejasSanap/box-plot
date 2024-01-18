"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
// import { useEffect } from 'react';
import Plot from "react-plotly.js";
import Home2 from "./page copy";

export default function Home() {
  const y0 = Array.from({ length: 50 }, () => Math.random());
  const y1 = Array.from({ length: 50 }, () => Math.random() + 1);

  const trace1 = {
    y: y0,
    type: "box",
    name: "Box Plot 1",
  };

  const trace2 = {
    y: y1,
    type: "box",
    name: "Box Plot 2",
  };

  const data = [trace1, trace2];

  useEffect(() => {
    console.log("here");
  }, []);

  const boxPlotData = [
    {
      y: [Math.random(), Math.random() + 1],
      type: "box",
      name: "Box Plot",
    },
  ];

  const scatterPlotData = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
      name: "Scatter Plot",
    },
    {
      type: "bar",
      x: [1, 2, 3],
      y: [2, 5, 3],
      name: "Bar Plot",
    },
  ];

  return (
    <main className={styles.main}>
      "box plot"
      {/* <Plot data={data} layout={{ title: "Box Plot" }} /> */}
      <br></br>
      <Home2></Home2>
      {/* Use Plot component for the box plot */}
      {/* <Plot data={boxPlotData} layout={{ title: 'Box Plot' }} /> */}
      {/* Use Plot component for the scatter plot */}
    </main>
  );
}
