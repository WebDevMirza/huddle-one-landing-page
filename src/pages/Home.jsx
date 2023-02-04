import { Action } from "../compo/Action";
import { Card } from "../compo/Card";
import { Footer } from "../compo/Footer";
import { Header } from "../compo/Header";
import { Hero } from "../compo/Hero";

import "../assets/styles/home.css";
import Feature from "../assets/data/feature.json";
import { useState } from "react";
import { Stats } from "../compo/Stats";

export default function Home() {
  const [myFeature, setMyFeature] = useState(Feature);

  return (
    <div className="holder">
      <Header />
      <Hero />
      <Stats />
      <div className="card-section">
        {myFeature.map(({ id, title, desc, image }) => {
          return <Card id={id} key={id} title={title} desc={desc} img={image} />;
        })}
      </div>

      <Action />
      <Footer />
    </div>
  );
}
