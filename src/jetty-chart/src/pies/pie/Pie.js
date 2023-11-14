// import { useState } from "react";
// import PieTestSetting from "./testFile/PieTestSetting";
import PieSvg from "../../components/pie-components/PieSvg";
import {
  setDefaultGeneralSettings,
  setDefaultLabelSettings,
  setDefaultPieSettings,
  setDefaultArcLinkLabelSettings,
  setDefaultAnimationSettings,
} from "../../common/pie-common/utils/setDefaultSettings";
import "./pie.css";
import { useEffect, useRef, useState } from "react";

export const Pie = ({
  data,
  generalSettings,
  pieSettings,
  labelSettings,
  arcLinkLabelSettings,
  animationSettings,
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
  const newAnimationSettings = {
    ...setDefaultAnimationSettings(),
    ...animationSettings,
  };
  const newDebugSettings = debugSettings;

  // const animationPieMakeWay = "all"; // all, oneByOne, none
  // if (animationPieMakeWay === "all") {
  // } else if (animationPieMakeWay === "oneByOne") {
  // }

  // const [newPieSettings, setNewPieSettings] = useState({
  //   ...setDefaultPieSettings(),
  //   ...pieSettings,
  //   useAngle: 0,
  // });

  // useEffect(() => {
  //   let intervalId;

  //   if (newPieSettings.useAngle < 360) {
  //     intervalId = setInterval(() => {
  //       setNewPieSettings((prevSettings) => ({
  //         ...prevSettings,
  //         useAngle: prevSettings.useAngle + 1,
  //       }));
  //     }, 5);
  //   }

  //   console.log("RENDERING");

  //   return () => {
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, [newPieSettings.useAngle]);

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
        newAnimationSettings={newAnimationSettings}
        arcLinkLabelSettings={newArcLinkLabelSettings}
      />
    </>
  );
};
