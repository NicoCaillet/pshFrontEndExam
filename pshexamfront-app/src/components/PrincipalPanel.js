import { Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import pshLogo from "../assets/img/PSh Logo_WHITE.svg"
import imgcontact1 from "../assets/img/avatar-1.png"

const useStyles = makeStyles((theme) => ({
    padre: {
        width: "100%",
        height: "100%",
    }, 
    container : {
        margin: "auto",
        marginTop: "60px",
        height: "850px",
        width: "65%",
        display: "flex"
    },
    contactos: {
        width: "30%",
    },
    chat : {
        width: "70%",
    }, 
    logoDiv: {
        backgroundImage: "linear-gradient(to bottom right, #AF0F0F , #FF622F)",
        display: "flex"
    },
    imgPsh : {
        width: "70px",
        height: "70px",
        marginLeft: "18px",
        padding: "20px"

    },
    reactApp: {
        display: "inline-flex",
        alignItems: "center",
        color: "white",
        fontFamily: "Montserrat",
        fontSize: "28px",
        fontWeight: "bold"
    }, 
    divBlack: {
        backgroundColor: "#31170E",
        height: "700px"
    },
    imgContactChat:{
        borderRadius: "50%",
        width: "90px",
        heoght: "90px",

    }

  }));

function PrincipalPanel() {
const classes = useStyles();



  return (
    <Grid className={classes.padre}>
        <Grid className={classes.container}> 
            <Grid className={classes.contactos}>
                <Grid className={classes.logoDiv}> 
                    <img src={pshLogo} alt="psh react exam" className={classes.imgPsh}/>
                    <Typography className={classes.reactApp}> React Chat</Typography>             
                </Grid> 
                <Grid className={classes.divBlack}>

                </Grid>
             </Grid>
            <Grid className={classes.chat}> 
                <Grid className={classes.contactTitle}> 
                    <img src={imgcontact1} alt="contactImage" className={classes.imgContactChat}/>
                    <Grid> 
                        <Typography></Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.individualChat}> 

                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default PrincipalPanel;
