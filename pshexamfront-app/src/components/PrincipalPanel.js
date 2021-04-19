import { Grid, Typography, makeStyles, Input, FormControl, Button } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import pshLogo from "../assets/img/PSh Logo_WHITE.svg"
import imgcontact1 from "../assets/img/avatar-1.png"
import imgcontact2 from "../assets/img/avatar-2.png"
import imgcontact3 from "../assets/img/avatar-3.png"
import "./index.css"
import { MessageBox } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment'

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
        cursor: "pointer"

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

    const contacts = [
        {
            name: "Luciana Gutierrez",
            img: imgcontact2,
            job: "Marketing Leader",
            lastMessage: "Si tengo alguna otra novedad te comento.Gracias!",
            lastMessageHour: "10:20 AM",
            isActive: true,
            id: 1
        },
        {
            name: "Micaela Alvarez",
            img: imgcontact1,
            job: "Marketing Manager",
            lastMessage: "Dale, agende la meeting para hoy a las 14hs. Abrazo",
            lastMessageHour: "10:15 AM",
            isActive: true,
            id: 2
        },
        {
            name: "Manuel Hoffmann",
            img: imgcontact3,
            job: "CEO",
            lastMessage: "Gracias a vos! Nos vemos en la proxima! Saludos",
            lastMessageHour: "9:37 AM",
            isActive: true,
            id: 3
        },
        {
            name: "Nicolas Caillet-Bois",
            job: "CTO",
            img: imgcontact3,
            lastMessage: "No hay problema!",
            lastMessageHour: "9:13 AM",
            isActive: false,
            id: 4
        },
    
    ]
const renderIndividualChat = (object) => {
const id = object.id

    return (
    <Grid className={classes.chat}> 
                <Grid className={classes.contactTitle}> 
                    <Grid className={classes.infoIndividualchat}> 
                        <img src={object.img} alt="contactImage" className={classes.imgContactChat}/>
                        <Grid className={classes.divnombreChat} > 
                            <Typography className={classes.nombreChat}> {object.name}</Typography>
                            <Typography className={classes.puesto}> {object.job}</Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.chatInputs}> 
                        <Grid className={classes.containerMessage}>
                            {/* {moment().format(' h:mm a')} */}
                            <Grid >
                                <Typography className={classes.hora}> 15:00 PM</Typography>
                            </Grid>
                            <MessageBox
                                className={classes.messageBoxStyles}
                                position={'left'}
                                type={'text'}
                                text={object.lastMessage}
                                />
                        </Grid>

                        <Grid className={classes.containerMessage}>
                            <Grid className={classes.divHora}>
                                <Typography className={classes.hora}> 15:00 PM</Typography>
                            </Grid>
                            <MessageBox
                                className={classes.messageBoxStyles}
                                position={'left'}
                                type={'text'}
                                text={object.lastMessage}
                                />
                        </Grid>

                        {chatMessages.map(item => {
                            return (
                                <Grid className={classes.containerMessage}>
                                <Grid >
                                    <Typography className={classes.hora}> {horarioActual} </Typography>
                                    </Grid>
                                    <MessageBox
                                        className={classes.messageBoxStyles}
                                        position={'right'}
                                        type={'text'}
                                        text={item.message}
                                        />
                                </Grid>
                            )
                        })}                        
                    </Grid>
                    <Grid className={classes.divInput}>
                            <FormControl onSubmit={handleSubmit} className={classes.createMessage}>
                                <Grid className={classes.createMessage}> 
                                    <input
                                        placeholder="Type your message..."
                                        className={classes.inputAlone}
                                        margin="normal"
                                        color="secondary"
                                        required
                                        fullWidth
                                        autoFocus
                                        onChange={handleInputChange}
                                        value={message.message}
                                    />
                                    
                                    <Button
                                        className={classes.buttonStyles}
                                        variant="contained"
                                        type="submit"
                                        
                                        onClick={handleSubmit}
                                    >
                                    Send
                                    </Button>
                                </Grid>                               
                            </FormControl >
                        </Grid>
                </Grid>
                
            </Grid>
)
}

const classes = useStyles();

const [contact1, setContact1] = useState(true)
const [contact2, setContact2] = useState(false)
const [contact3, setContact3] = useState(false)

const [chatMessages2, setChatMessages2] = useState([])
const [chatMessages, setChatMessages] = useState([])
const [chatMessages3, setChatMessages3] = useState([])

const [message, setMessage] = useState({
    message: ""
})

console.log(message)
const handleSubmit = (id) => {
    if(message.message !== ""){
          setChatMessages([...chatMessages, message])
    }
}

const handleInputChange = (e) => {
    setMessage({ ...message, message: e.target.value });
  };

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

const lastPosition = chatMessages.length-1
console.log("lastposition", chatMessages.length > 0 && chatMessages[lastPosition].message)


  useEffect(() => {
   console.log(chatMessages)

  }, [message])

  const horarioActual = moment().format(' h:mm a')

  return (
    <Grid className={classes.padre}>
        <Grid className={classes.container}> 
            <Grid className={classes.contactos}>
                <Grid className={classes.logoDiv}> 
                    <img src={pshLogo} alt="psh react exam" className={classes.imgPsh}/>
                    <Typography className={classes.reactApp}> React Chat</Typography>             
                </Grid> 
                <Grid className={classes.divBlack}>
                    {contacts.map(item => {
                        if(item.isActive){
                            return (
                            <Grid className={classes.contactDetail} onClick={() => renderChatFunction(item)}>
                                <Grid className={classes.divContactImg}> 
                                    <img src={item.img} alt={item.name} className={classes.imgContact}/>
                                </Grid>
                                <Grid  className={classes.divContactName}> 
                                    <Typography className={classes.nameContact}> {item.name}</Typography>
                                    <Typography className={classes.lastmessage}> {chatMessages.length > 0 && chatMessages[lastPosition].message} </Typography>
 
                                </Grid>
                                <Grid  className={classes.divContactHour}> 
                                    <Typography className={classes.lastmessageHour}> {item.lastMessageHour} </Typography>
                                </Grid> 
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
