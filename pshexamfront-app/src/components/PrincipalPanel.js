import { Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState, useEffect} from "react";
import pshLogo from "../assets/img/psh_brand.png"
import {contacts} from '../data/contacts'
import "./index.css"
import 'react-chat-elements/dist/main.css';
import AddIcon from '@material-ui/icons/Add';
import ChatBoxComponent from './chatBox'
import ChatContact from './chatContact'

const useStyles = makeStyles((theme) => ({
    padre: {
        width: "100%",
        height: "100%",
    }, 
    body: {
        backgroundColor: "ligth-gray"
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
        width: "90px",
        height: "80px",
        marginLeft: "18px",
        padding: "20px",
        borderRadius: '33px'

    },
    reactApp: {
        display: "inline-flex",
        alignItems: "center",
        color: "white",
        fontFamily: "Montserrat",
        fontSize: "28px",
        fontWeight: "bold",
        textAlign: "left"
    }, 
    divBlack: {
        backgroundColor: "#31170E",
        height: "700px"
    },
    imgContactChat:{
        borderRadius: "50%",
        width: "90px",
        heoght: "90px",
        display: "inline-flex",
        justifyContent: "flex-start",
        marginLeft: "25px",
        padding: "25px"

    },
    contactTitle : {
        width: "100%",
        backgroundColor: "white"
    },
    chatInputs : {
        width: "100%",
        backgroundColor: "#E9E9E9",
        height: "670px",
        overflowY: "auto"
    },
    infoIndividualchat: {
        display: "flex",

    },
    messageBoxStyles: {
    },
    containerMessage : {
        height: "112px",
        marginBottom: "25px"

    },
    divnombreChat : {
        marginTop: "35px"
    },
    nombreChat: {
        fontSize: "30px",
        fontFamily: "Courier New",
        fontWeight: "bold",
        textAlign: "left",

    },
    puesto: {
        textAlign: "left",
        fontSize: "16px",
        fontWeight: "bold",
        color: "gray",
        marginTop: "-8px"
    }, 
    hora: {
        color: "gray",
        fontSize: "11px",
        marginBottom: "-20px",
        marginLeft: "19px"

    },
    createMessage : {
        display: "flex", 
        width: "100%",
        marginTop: "9px"
    },
    divInput: {
        position: "fixed",
        marginTop: "-69px",
        width: "45.5%",
        backgroundColor: "white",
        height: "70px"

    },
    inputAlone: {
        width: "77%",
        borderRadius: "10px",
        outline: "none",
        marginLeft: "10px",
        border: "2px solid #EEEEEE",
        backgroundColor: "#F2F1F1"
    },
    buttonStyles : {
        borderRadius: "10px",
        marginLeft: "10px",
        width: "16%",
        color: "gray",
        fontWeight: "bold",
        height: "40px"
    },
    contactDetail: {
        height: "110px",
        display: "flex",
        borderBottom: "1px solid white",
        cursor: "pointer",
        justifyContent: 'space-between'

    },
    nameContact: {
        color: "white",
        textAlign: "left"

    },
    imgContact : {
        width: "55px",
        height: "56px",
        borderRadius: "50%",
        marginTop: "13px"
    },
    lastmessage : {
        color: "lightgray",
        fontFamily: "Montserrat",
        textAlign: "left",
        fontSize: "13px",        
    },
    lastmessageHour: {
        color: "lightgray",
        fontFamily: "Montserrat",
        textAlign: "left",
        fontSize: "13px",
        whiteSpace: "nowrap"
    },
    divContactImg: {
        marginLeft: "10px"
    },
    divContactName: {
        marginTop: "10px",
        marginLeft: "5px"
    },
    divContactHour: {
        display: "inline-flex",
        marginRight: "10px",
        marginTop: "10px"
    },
    line: {
        alignItems: "center",
        borderBottom: "1px solid #dadde1",
        display: "flex",
        margin: "5px -4px",
        textAlign: "center"
    },
    createNew: {
        height: "80px",
        display: "flex",
        justifyContent: "center",
        marginRight: "15px"
    },
    createNewText: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Lucida Console",

    },
    addIcon: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        marginTop: "22px",
        marginRight: "10px"
    }

  }));

function PrincipalPanel() {

const [contact1, setContact1] = useState(true)
const [contact2, setContact2] = useState(false)
const [contact3, setContact3] = useState(false)
const classes = useStyles();

const renderIndividualChat = (object) => {
    return (
    <Grid className={classes.chat}> 
        <ChatBoxComponent object={object}/>       
    </Grid>
)
}

const getItemLastMessage = (index) => {
    console.log(JSON.parse(localStorage.getItem(`${contacts[0].name}`)))
    const localStorageState = JSON.parse(localStorage.getItem(`${contacts[0].name}`)) 
    const lastPosition = localStorageState.length-1
    return localStorageState[lastPosition].message
}

console.log("funcion de nico", getItemLastMessage())

const renderChatFunction = (item) => {
    switch (item.name) {
        case "Luciana Gutierrez":
            setContact1(true)
            setContact2(false)
            setContact3(false)
            break;

        case "Micaela Alvarez":
            setContact1(false)
            setContact2(true)
            setContact3(false)
            break;

        case "Manuel Hoffmann":
            setContact1(false)
            setContact2(false)
            setContact3(true)
            break;
        default:
            break;
    }
}

  return (
    <Grid className={classes.padre}>
        <Grid className={classes.container}> 
            <Grid className={classes.contactos}>
                <Grid className={classes.logoDiv}> 
                    <img src={pshLogo} alt="psh react exam" className={classes.imgPsh}/>
                    <Typography className={classes.reactApp}> React Chat</Typography>             
                </Grid> 
                <Grid className={classes.divBlack}>
                    {contacts.map((item, index) => {
                        if(item.isActive){
                            return (
                            <Grid className={classes.contactDetail} onClick={() => renderChatFunction(item)}>
                                <Grid className={classes.divContactImg}> 
                                    <img src={item.img} alt={item.name} className={classes.imgContact}/>
                                </Grid>
                                <Grid  className={classes.divContactName}> 
                                    <Typography className={classes.nameContact}> {item.name}</Typography>
                                    <Typography className={classes.lastmessage}> {JSON.parse(localStorage.getItem(`${contacts[index].name}`)).pop().message}  </Typography>
 
                                </Grid>
                                <Grid  className={classes.divContactHour}> 
                                    <Typography className={classes.lastmessageHour}> {item.lastMessageHour} </Typography>
                                </Grid> 
                            </Grid>
                            )
                        } else {
                            return (
                                <Grid> 
                                </Grid>
                            )
                        }
                        
                    })}
                    <Grid className={classes.createNew}>
                        <AddIcon fontSize="large" color="disabled" className={classes.addIcon}/>
                        <Typography className={classes.createNewText}> Create New</Typography>
                    </Grid>
                </Grid>
                
             </Grid>
            {contact1 && renderIndividualChat(contacts[0])}
            {contact2 && renderIndividualChat(contacts[1])}
            {contact3 && renderIndividualChat(contacts[2])}
        </Grid> 
    </Grid>
  );
}

export default PrincipalPanel;
