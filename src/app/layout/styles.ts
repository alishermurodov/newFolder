import { makeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const usePageLayoutStyles = makeStyles({
  controlsContainer: {
    "--highlight-width": "auto",
    "--highlight-x-pos": 0,
    display: "block",
    margin: "0",
    
  },
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '23px',
    minHeight: '93vh'
  }
  
});
