import "./home.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TranstitionTable from "../../components/table/TranstitionTable";

const Home = () => {
  return (
    <>
    <div className="home">
     <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
<Widget type="user"/>
<Widget type="order"/>
<Widget type="earning"/>
<Widget type="balance"/>

        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transition</div>
          <TranstitionTable/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
