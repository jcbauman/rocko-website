import React, { FC } from "react";
import "../css/detailsComponent.css";
import { LinkButton } from "./LinkButton";
import { RoleDetails, Roles } from "../types";
import { ROLE_COLLECTION } from "../config/contentConfig";
import { Stack, Typography } from "@mui/material";

interface DetailsCardProps {
  title: Roles;
  className: any;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  className,
}) => {
  const config: RoleDetails = ROLE_COLLECTION[title];

  return (
    <Stack
      sx={{
        backgroundColor: "antiquewhite",
        borderRadius: "10px",
        color: "black",
        maxWidth: "calc(100vw - 300px)",
        ml: "15px",
        mt: "calc(50vh + 50px)",
        zIndex: 1,
        textAlign: "left",
      }}
      className={`${className}`}
    >
      <Stack
        direction="row"
        sx={{
          backgroundColor: "whitesmoke",
          border: "1px dotted black",
          p: "5px",
          alignItems: "center",
        }}
      >
        <PromptText>Company:</PromptText>
        <Typography>{config?.company}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          backgroundColor: "whitesmoke",
          border: "1px dotted black",
          p: "5px",
          alignItems: "center",
        }}
      >
        <PromptText>Role:</PromptText>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {config?.title}
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ width: "100%", alignItems: "center" }}>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            backgroundColor: "whitesmoke",
            border: "1px dotted black",
            alignItems: "center",
          }}
        >
          <PromptText>Years:</PromptText>
          <Typography>{config?.yearsActive}</Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            backgroundColor: "whitesmoke",
            border: "1px dotted black",
            alignItems: "center",
          }}
        >
          <PromptText>Time:</PromptText>
          <Typography>{config?.duration}</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          w: "100%",

          backgroundColor: "whitesmoke",
          border: "1px dotted black",
          alignItems: "flex-start",
        }}
      >
        <PromptText>Liner notes:</PromptText>
        <Typography>{config?.notes}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          w: "100%",
          backgroundColor: "whitesmoke",
          border: "1px dotted black",
          alignItems: "center",
        }}
      >
        <PromptText>Album art:</PromptText>
        <Typography>{config?.imageCredits}</Typography>
      </Stack>
      <Stack
        className="buttonContainer"
        direction="row"
        sx={{ justifyContent: "center" }}
      >
        {config?.buttons.map(
          (buttonItem: {
            label: string;
            className?: string;
            link?: string;
            icon: JSX.Element;
          }) => {
            return (
              <LinkButton
                icon={buttonItem.icon}
                className={
                  buttonItem.className +
                  (config.buttons.length > 1 ? " linkDouble" : " linkSingle")
                }
                label={buttonItem.label}
                link={buttonItem.link}
              />
            );
          }
        )}
      </Stack>
    </Stack>
  );
};

const PromptText: FC<{ children: string }> = ({ children }) => {
  return (
    <Typography
      variant="overline"
      sx={{
        fontFamily: "Futura, sans-serif",
        fontSize: "10px",
        float: "left",
        fontWeight: "bold",
        letterSpacing: ".1rem",
        margin: "5px",
        textWrap: "noWrap",
      }}
    >
      {children}
    </Typography>
  );
};
