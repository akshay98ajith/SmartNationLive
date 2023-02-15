import React from "react";
import Content from "./ConstructionContent/Content";
import "./DetailPage.scss";
import FacilityManagementContent from "./FacilityManagementContent/FacilityManagementContent";
import HealthcareContent from "./HealthcareContent/HealthcareContent";
import Landing from "./Landing/Landing";
import ManufacturingContent from "./ManufacturingContent/ManufacturingContent";
import MiningContent from "./MiningContent/MiningContent";
import OilandGasContent from "./Oil&GasContent/OilandGasContent";
import TransportationContent from "./TransportationContent/TransportationContent";

const DetailPage = (props) => {
  return (
    <div className="pages">
      <div className="DetailPage">
        <Landing title={props.title} description={props.description} />
        {props.construction ? <Content /> : ""}
        {props.mining ? <MiningContent /> : ""}
        {props.manufacturing ? <ManufacturingContent /> : ""}
        {props.facilitymanagement ? <FacilityManagementContent /> : ""}
        {props.oilandgas ? <OilandGasContent /> : ""}
        {props.transportation ? <TransportationContent /> : ""}
        {props.healthcare ? <HealthcareContent /> : ""}
      </div>
    </div>
  );
};

export default DetailPage;
