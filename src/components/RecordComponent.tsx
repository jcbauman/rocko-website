import React from "react";
import { recordSleeve } from "../images";
import "../css/recordSleeve.css";
import { ROLE_COLLECTION } from "../config/contentConfig";
import { Roles } from "../types";

interface RecordComponentProps {
  title: Roles;
  id: number;
  setSelectedRecord: any;
  selectedRecord: number;
  hideRecords?: boolean;
  chosenRecord?: boolean;
}

export const RecordComponent: React.FC<RecordComponentProps> = ({
  title,
  id,
  setSelectedRecord,
  selectedRecord,
  hideRecords,
  chosenRecord,
}) => {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  const getHeight = (id: number, hideRecords: boolean | undefined) => {
    if (hideRecords) {
      return id * (0.05 * vh) + 300;
    } else if (chosenRecord) {
      return 20;
    }
    return id * (0.05 * vh) + 20;
  };

  const getZIndex = (type: "image" | "grit", id: number) => {
    if (type === "image") {
      return id === 0 ? 1 : id * 5;
    } else {
      return id === 0 ? 2 : id * 5 + 1;
    }
  };

  const onClickHandler = (id: number) => {
    if (selectedRecord === id) {
      setSelectedRecord(100);
    } else {
      setSelectedRecord(id);
    }
  };

  return (
    <div
      className={`recordContainer ${
        chosenRecord ? "corner-radius-slow" : "centerRecord"
      } ${id > selectedRecord && !hideRecords ? "recordTipped" : ""} ${
        hideRecords ? "fade-out-grit" : ""
      }`}
      style={{
        top: getHeight(id, hideRecords),
        zIndex: getZIndex("image", id),
      }}
      onClick={() => onClickHandler(id)}
    >
      <img
        className={`gritCover ${chosenRecord ? "fade-out-grit-slow" : ""}`}
        style={{ zIndex: getZIndex("grit", id) }}
        src={recordSleeve}
        alt=""
        role="presentation"
      />
      <img
        className={`recordImage  ${chosenRecord ? "border-radius-slow" : ""}`}
        src={ROLE_COLLECTION[title].image}
        alt={title}
      />
    </div>
  );
};
