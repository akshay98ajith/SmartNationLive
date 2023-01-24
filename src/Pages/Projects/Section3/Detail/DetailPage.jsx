import React from "react";
import Content from "./ConstructionContent/Content";
import "./DetailPage.scss";
import Landing from "./Landing/Landing";
import MiningContent from "./MiningContent/MiningContent";

const DetailPage = (props) => {
  return (
    <div className="pages">
      <div className="DetailPage">
        <Landing title={props.title} />
        {props.construction ? <Content /> : ""}
        {props.mining ? <MiningContent /> : ""}
      </div>
    </div>
  );
};

export default DetailPage;
