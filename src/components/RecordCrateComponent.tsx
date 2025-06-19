import React from "react";
import "../css/recordSleeve.css";
import { RecordComponent } from "./RecordComponent";
import { Roles } from "../types";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface RecordCrateProps {
  records: Roles[];
  selectedItem: number;
  closeRecord: () => void;
  setSelectedItem: any;
  showDetails: any;
  openRecord: (selection: Roles) => void;
  lastSelectedItem: any;
  isCrateMode: boolean;
}

export const RecordCrateComponent: React.FC<RecordCrateProps> = ({
  records,
  selectedItem,
  setSelectedItem,
  showDetails,
  openRecord,
  lastSelectedItem,
  closeRecord,
  isCrateMode,
}) => {
  const getYPos = (id: number) => {
    return id * 40 + vh / 4;
  };
  const handleClickArrow = () => {
    openRecord(records[selectedItem]);
  };
  const handleCloseArrow = () => {
    closeRecord();
    setTimeout(() => {
      setSelectedItem(100);
    }, 500);
  };

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  return (
    <div className="recordBin">
      {records.map((title: Roles, index) => (
        <RecordComponent
          key={`${title}-record`}
          title={title}
          id={index}
          selectedRecord={selectedItem}
          setSelectedRecord={setSelectedItem}
          chosenRecord={!isCrateMode && showDetails === title}
          hideRecords={!isCrateMode && showDetails !== title}
        />
      ))}
      <IconButton
        sx={{
          opacity: selectedItem === 100 || !isCrateMode ? 0 : 1,
          cursor: "pointer",
          position: "fixed",
          right: "calc(43vw - 25vh)",
          transition: "opacity 1s ease-in-out, transform 0.5s",
          boxShadow: "darkslategray",
          zIndex: 10,
          color: "red",
          border: "1px solid red",
          transform:
            selectedItem === 100 || !isCrateMode ? "scale(0)" : "scale(1)",
        }}
        size="medium"
        style={{
          top: getYPos(selectedItem === 100 ? lastSelectedItem : selectedItem),
        }}
        aria-label="Explore selection"
        onClick={handleClickArrow}
      >
        <ArrowForwardIcon />
      </IconButton>
      {!isCrateMode && (
        <IconButton
          sx={{
            opacity: isCrateMode ? 0 : 1,
            cursor: "pointer",
            position: "absolute",
            left: "55vh",
            top: "5vh",
            boxShadow: "darkslategray",
            transition: "opacity 1s ease-in-out, transform 0.5s",
            transitionDelay: "1s",
            color: "red",
            border: "1px solid red",
          }}
          size="medium"
          aria-label="Close selection"
          onClick={handleCloseArrow}
        >
          <ArrowForwardIcon sx={{ transform: "rotate(180deg)" }} />
        </IconButton>
      )}
    </div>
  );
};
