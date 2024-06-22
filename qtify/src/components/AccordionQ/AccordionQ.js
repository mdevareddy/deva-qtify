import React from "react";
import styles from "./AccordionQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";

function AccordionQ({ data }) {
  const CustomizedAccordion = styled(Accordion)(() => ({
    "& .MuiPaper-root": {
      backgroundColor: "red",
      borderRadius: "10px",
      boxShadow: "none",
    },
  }));

  return (
    <div>
      <CustomizedAccordion className={styles.accordionMain}>
        <AccordionSummary
          className={styles.accordionHeading}
          expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className={`${styles.typoMui} ${styles.accorTypoHeading}`}
          >
            {data.heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionContent}>
          <Typography
            className={`${styles.typoMui} ${styles.accorTypoContent}`}
          >
            {data.content}
          </Typography>
        </AccordionDetails>
      </CustomizedAccordion>
    </div>
  );
}

export default AccordionQ;
