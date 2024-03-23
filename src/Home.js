import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FirstMenu from "./FirstMenu";
import MainForm from "./MainForm";
import SuggestionsGrid from "./SuggestionsGrid";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home-page">
      <FirstMenu />
      <MainForm className="main-form" />
      <SuggestionsGrid />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
