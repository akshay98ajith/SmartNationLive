import React from "react";
import Content from "./ConstructionContent/Content";
import "./DetailPage.scss";
import FacilityManagementContent from "./FacilityManagementContent/FacilityManagementContent";
import Landing from "./Landing/Landing";
import ManufacturingContent from "./ManufacturingContent/ManufacturingContent";
import MiningContent from "./MiningContent/MiningContent";

const DetailPage = (props) => {
  return (
    <div className="pages">
      <div className="DetailPage">
        <Landing title={props.title} description={props.description} />
        {props.construction ? <Content /> : ""}
        {props.mining ? <MiningContent /> : ""}
        {props.manufacturing ? <ManufacturingContent /> : ""}
        {props.facilitymanagement ? <FacilityManagementContent /> : ""}
      </div>
    </div>
  );
};

export default DetailPage;
