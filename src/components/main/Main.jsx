import React, { useState, useEffect } from "react";

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
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Main() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const currentDate = new Date().getFullYear();

  const [open, setOpen] = useState(false);

  const handleToClose = () => {
    setOpen(false);
  };

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const clearInput = () => {
    setNewSearch("");
  };

  const [closeIcon, setCloseIcon] = useState(false);
  useEffect(() => {
    if (search.length !== 0) {
      setCloseIcon(true);
    } else {
      setCloseIcon(false);
    }
  }, [search]);

  const [getData, setData] = useState(data);

  const filtered = !search
    ? getData
    : getData.filter((element) =>
        element.first.toLowerCase().includes(search.toLowerCase())
      );
  // console.log(filtered);

  // console.log(getData);

  const [getID, setID] = useState("");

  return (
    <S.MainContainer>
      <h1>FactWise Assessment</h1>

      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search Name"
          />

          <div className="searchIcon">
            {closeIcon ? (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            ) : (
              <SearchIcon />
            )}
          </div>
        </div>
      </div>
      <div>
        {filtered &&
          filtered.map((accordion) => {
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

            const handleClickToOpen = () => {
              setOpen(true);
              setID(id);
            };

            const handleDeletUser = () => {
              setData((items) =>
                items.filter((item) => {
                  return item.id !== getID;
                })
              );
              setOpen(false);
            };

            return (
              <Accordion
                expanded={expanded === id}
                key={id}
                onChange={handleChange(id)}
                className="accordionContainer"
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  expandIcon={expanded === id ? <RemoveIcon /> : <AddIcon />}
                  id="panel1bh-header"
                >
                  <Typography>
                    <span className="nameTag">
                      <img src={picture} alt="profile" />
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
                  <i
                    className="material-icons"
                    style={{
                      color: "blue",
                      float: "right",
                      fontSize: "30px",
                      cursor: "pointer",
                      margin: "5px 20px 20px 0",
                    }}
                  >
                    edit
                  </i>
                  <i
                    className="material-icons"
                    style={{
                      color: "red",
                      cursor: "pointer",
                      float: "right",
                      fontWeight: "500",
                      fontSize: "30px",
                      margin: "5px 20px 20px 0",
                    }}
                    onClick={handleClickToOpen}
                  >
                    {" "}
                    delete
                  </i>
                </div>{" "}
                <Dialog
                  open={open}
                  onClose={handleToClose}
                  style={{ background: "lightgray", opacity: "1" }}
                >
                  <DialogTitle>
                    {"Are you sure you want to Delete ?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button
                      onClick={handleToClose}
                      color="primary"
                      style={{
                        border: "1px solid lightgray",
                        margin: "0 10px 0 0",
                        borderRadius: "10px",
                        fontWeight: "500",
                        padding: "5px 15px 5px 15px",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      style={{
                        border: "1px solid lightgray",
                        margin: "0 10px 0 0",
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "10px",
                        fontWeight: "500",
                        padding: "5px 15px 5px 15px",
                      }}
                      onClick={handleDeletUser}
                    >
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </Accordion>
            );
          })}
      </div>
    </S.MainContainer>
  );
}
