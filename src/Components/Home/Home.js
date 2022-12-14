import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TopicCard from "../TopicCard/TopicCard";

const Home = () => {
  const topics = useLoaderData();
  console.log(topics.data);
  return (
    <div>
      <Header></Header>
      <div className="mt-20 lg:grid lg:grid-cols-4 lg:gap-x-6">
        {topics.data.map((topic) => (
          <TopicCard key={topic.id} topic={topic}></TopicCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
