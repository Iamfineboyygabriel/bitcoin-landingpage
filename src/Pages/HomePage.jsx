import React from "react";
import FeatureOne from "../components/FeatureOne";
import DailyStarts from "../components/DailyStarts";
import w2 from "../assets/w2.png";
import ins2 from "./../assets/ins2.png";
import Card from "../components/Card";
import SocialPromotion from "../components/SocialPromotion";
import DevSection from "../components/DevSection";
import BlogSection from "../components/BlogSection";

export default function HomePage() {
  const features = [
    {
      src: w2,
      title: "Value",
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
    },
    {
      src: ins2,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: ins2,
      title: "Insurance",
      description: "Get Impermanent Loss Protection on your Liquidity Pools",
    },
    {
      src: w2,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];

  return (
    <>
      <div className="home">
        <DailyStarts />
        <FeatureOne />
        <div className="features-list-container">
          {features.map((feature, index) => {
            return (
              <Card key={index} title={feature.title} imageUrl={feature.src}>
                {<p>{feature.description}</p>}
              </Card>
            );
          })}
        </div>
        <SocialPromotion />
        <DevSection />
        <BlogSection />
      </div>
    </>
  );
}
