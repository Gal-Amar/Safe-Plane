import FirstMenu from "./FirstMenu";
import MainForm from "./MainForm";

const Home = () => {
  return (
   <div className="home-page">
    <FirstMenu />
    <MainForm className='main-form'/>
   </div>
  );
}

export default Home;