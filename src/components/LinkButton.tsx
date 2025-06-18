import React from "react";
import "../css/linkButton.css";
import { Button } from "@mui/material";

interface LinkButtonProps {
  link: string | undefined;
  className: string;
  label: string;
  icon: JSX.Element;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  className,
  label,
  icon,
}) => {
  return (
    <Button
      sx={{
        color: "white",
        fontFamily: "Futura, sans-serif",
        height: "40px",
        borderRadius: "20px",
        cursor: "pointer",
        backgroundColor: "darkred",
        margin: "20px 5px",
      }}
      startIcon={icon}
      className={className}
      onClick={() => window.open(link)}
    >
      {label}
    </Button>
  );
};
