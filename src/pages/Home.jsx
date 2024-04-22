
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Cars from "../components/Cars";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const Home = ({ cars }) => {
  return (
    <div>
      <Navbar />
      <Search />
      <Cars cars={cars} />
      <Footer />
    </div>
  );
};

export default Home;
