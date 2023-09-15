import Cars from "./Cars/Cars";
import Nav from "./Nav/Nav";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <Cars />
    </div>
  );
};

export default Home;
