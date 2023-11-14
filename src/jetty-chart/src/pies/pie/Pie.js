// import { useState } from "react";
// import PieTestSetting from "./testFile/PieTestSetting";
import PieSvg from "../../components/pie-components/PieSvg";
import {
  setDefaultGeneralSettings,
  setDefaultLabelSettings,
  setDefaultPieSettings,
  setDefaultArcLinkLabelSettings,
} from "../../common/pie-common/utils/setDefaultSettings";
import "./pie.css";

export const Pie = ({
  data,
  generalSettings,
  pieSettings,
  labelSettings,
  arcLinkLabelSettings,
  debugSettings = false,
}) => {
  const newGeneralSettings = {
    ...setDefaultGeneralSettings(),
    ...generalSettings,
  };
  const newPieSettings = {
    ...setDefaultPieSettings(),
    ...pieSettings,
  };
  const newLabelSettings = {
    ...setDefaultLabelSettings(),
    ...labelSettings,
  };
  const newArcLinkLabelSettings = {
    ...setDefaultArcLinkLabelSettings(),
    ...arcLinkLabelSettings,
  };
  const newDebugSettings = debugSettings;

  // const [newGeneralSettings, setNewGeneralSettings] = useState({
  //   ...setDefaultGeneralSettings(),
  //   ...generalSettings,
  // });
  // const [newPieSettings, setNewPieSettings] = useState({
  //   ...setDefaultPieSettings(),
  //   ...pieSettings,
  // });
  // const [newLabelSettings, setNewLabelSettings] = useState({
  //   ...setDefaultLabelSettings(),
  //   ...labelSettings,
  // });
  // const [newDebugSettings, setNewDebugSettings] = useState(debugSettings);
  return (
    <>
      {/* <PieTestSetting
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugSettings={newDebugSettings}
        changeNewGeneralSettings={setNewGeneralSettings}
        changeNewPieSettings={setNewPieSettings}
        changeNewLabelSettings={setNewLabelSettings}
        changeDebugSettings={setNewDebugSettings}
      /> */}
      <PieSvg
        data={data}
        generalSettings={newGeneralSettings}
        pieSettings={newPieSettings}
        labelSettings={newLabelSettings}
        debugSettings={newDebugSettings}
        arcLinkLabelSettings={newArcLinkLabelSettings}
      />
    </>
  );
};
