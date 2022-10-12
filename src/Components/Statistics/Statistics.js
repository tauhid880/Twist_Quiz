import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
} from "recharts";
import axios from "axios";

const Statistics = () => {
  // const values = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const values = data.data.data;
      const singleValue = values.map((value) => {
        const singleData = { name: value.name, total: value.total };
        return singleData;
      });
      setData(singleValue);
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <ResponsiveContainer width="50%" height="80%">
        <BarChart width="80%" height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="black" />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
