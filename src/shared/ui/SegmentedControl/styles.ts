import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const useSegmentedControlStyles = makeStyles({
  controlsContainer: {
    "--highlight-width": "auto",
    "--highlight-x-pos": 0,
    display: "block",
    margin: "0",
    
  },
  controls: {
    display: "inline-flex",
    justifyContent: "space-between",
    // background: tokens.colorNeutralBackground3,
    // // boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    // borderRadius: "10px",
    // // maxWidth: "500px",
    // padding: "8px 5px",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    background: '#3a86bf',
    padding: '4px',
    borderRadius: '4px',
  },
  controlsInput: {
    opacity: 0,
    margin: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    cursor: "pointer",
    height: "100%",
    ":disabled": {
      cursor: "not-allowed",
    },
  },
  disabled: {
    color: tokens.colorNeutralBackgroundDisabled,
    opacity: "0.6",
    cursor: "not-allowed",
  },
  segment: {
    minWidth: "120px",
    position: "relative",
    textAlign: "center",
    zIndex: 1,
    "@media screen and (max-width: 600px)": {
      minWidth: "100px",
    },
  },
  segmentLabel: {
    cursor: "pointer",
    display: "block",
    fontWeight: 400,
    color: '#f2f2f2',
    padding: "4px 8px",
    transition: "color 0.5s ease",
    "@media screen and (max-width: 600px)": {
      fontSize: "12px",
    },
  },
  activeSegmentLabel: {
    // color: tokens.colorNeutralForeground1,
    fontWeight: 600,
    color: '#fff',
    background: '#6ba4cf',
    borderRadius: '4px'
  },
  controlsBefore: {
    content: '""',
    background: tokens.colorNeutralBackground1,
    borderRadius: "8px",
    width: "var(--highlight-width)",
    transform: "translateX(var(--highlight-x-pos))",
    position: "absolute",
    top: "4px",
    bottom: "4px",
    left: "0",
    right: "0",
    zIndex: 0,
  },
  controlsReadyBefore: {
    transition: "transform 0.3s ease, width 0.3s ease",
  },
});
