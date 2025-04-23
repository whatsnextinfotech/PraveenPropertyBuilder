import { Fragment } from "react";
import MetaData from "./layouts/MetaData";
import Pop from "./layouts/pop";
import Hero from "./layouts/Hero";
import Locations from "./layouts/Location";
import Projects from "./layouts/PropertyCard";
import CallToAction from "./layouts/CallToAction";

export default function Home() {
  return (
    <Fragment>
      <MetaData title={'Home'} />
      <Pop />
      <Hero />
      <Locations />
      <Projects />
      <CallToAction />
    </Fragment>
  );
}