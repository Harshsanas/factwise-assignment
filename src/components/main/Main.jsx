import React, { useState } from "react";

//importing data from json file
import data from "../celebrities";

//importing style components
import * as S from "./main.styles";

//omport material ui accordion
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DeleteIcon } from "@mui/icons-material";
import { EditIcon } from "@mui/icons-material";

export default function Main() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const currentDate = new Date().getFullYear();

  const age = (item) => {
    console.log(item);
  };
  return (
    <S.MainContainer>
      <h1>FactWise Assessment</h1>
      <div>
        {data.map((accordion) => {
          const {
            id,
            first,
            last,
            dob,
            gender,
            picture,
            country,
            description,
          } = accordion;

          const ageDate = dob;

          const currentDateYear = currentDate - ageDate.slice(0, 4);

          return (
            <Accordion
              expanded={expanded === id}
              key={id}
              onChange={handleChange(id)}
              className="accordionContainer"
            >
            <div><input placeholder="Search"/></div>
              <AccordionSummary
                aria-controls="panel1bh-content"
                expandIcon={<ExpandMoreIcon />}
                id="panel1bh-header"
              >
                <Typography>
                  <span className="nameTag">
                    <img src={picture} />
                    <h3>
                      {first} {last}
                    </h3>
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span className="subHead">
                    <div>
                      <label>Age</label>
                      <br />
                      <span>{currentDateYear} years</span>
                    </div>
                    <div>
                      <label>Gender</label>
                      <br />
                      <span>{gender}</span>
                    </div>
                    <div>
                      <label>Country</label>
                      <br />
                      <span>{country}</span>
                    </div>
                  </span>
                  <div className="descriptionSec">
                    <label>Description</label>
                    <br />
                    <span>{description}</span>
                  </div>
                </Typography>
              </AccordionDetails>
              <div className="btnSection">
                <DeleteIcon />
                <EditIcon />
              </div>
            </Accordion>
          );
        })}
      </div>
    </S.MainContainer>
  );
}
