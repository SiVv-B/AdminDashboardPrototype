import Chart from "../../componenets/chart/Chart";
import FeaturedInfo from "../../componenets/featuredInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
 import SmallWidget from "../../componenets/smallWidget/SmallWidget";
import LargeWidget from "../../componenets/LargeWidget/LargeWidget"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
         <SmallWidget/>
       <LargeWidget/>
      </div>
    </div>
  );
}