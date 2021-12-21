import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Soc from './Soc.png'
import GCA from './GCA2.png'
import Rec from './GCA.png'
import ElVote from './Elvote.png'
import Food from './Food.png'
import Cov from './Cov.png'
import {  CardActionArea } from '@mui/material';
const Projects = () => {

    const handleClick=(url)=>{
        window.open(url,'_blank');
    }

    return (

        <div id="projects" className="text-white container  d-flex justify-content-center flex-column " style={{marginTop:'200px'}}>
            <div data-aos="fade-up"  className="h1 text-center mt-2"> Projects </div>
         
                <Grid data-aos="fade-up" container >
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('https://github.com/HarshJoshi123/ElVote')} className="m-4" >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ElVote}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    El-Vote
                                </Typography>
                                <Typography variant="body2" color="white">
                                Made an E-Voting  using Blockchain Technology. NodeJs and ExpressJs were used as backend. Smart contract was designed using solidity. User has to login via facial verification using face-api.js. Vote was recorded using web3.js API.Ganache blockchain was used as the test network.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('https://mysocialmediaapp0026.netlify.app/')} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                //image="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201100297/158285890-online-voting-rgb-color-icon-electronic-polls-election-system-e-voting-balloting-participation-in-de.jpg"
                                image={Soc}
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    Social Media Web Application
                                </Typography>
                                <Typography variant="body2" color="white">
                                I made This project using MERN Stack Technology (Express,Node Js,Mongo and React).To make a social Media website where a user can Signup ,where password is saved using encryption and can be reset.
User can post photos,text and follow other users.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('http://chatting-app-c338a.firebaseapp.com/')} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={GCA}
                                //image="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201100297/158285890-online-voting-rgb-color-icon-electronic-polls-election-system-e-voting-balloting-participation-in-de.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    Group Chatting Web Application
                                </Typography>
                                <Typography variant="body2" color="white">
                                Created a webapp where user can login safely using Gmail and can create groups and add members and can send multimedia to other members.
Used Technologies-HTML ,CSS,React JS,MobX,Firebase
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('https://profiling-tool123.web.app/')} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Rec}
                                //image="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201100297/158285890-online-voting-rgb-color-icon-electronic-polls-election-system-e-voting-balloting-participation-in-de.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    Recruitment Website 
                                   
                                </Typography>
                                <Typography variant="body2" color="white">
                                I worked on UI of this project with react and redux.This will be used for providing details of candidate,who is job applicant, which will be validated by mentor.
                                You can checkout this website using these credentials (Email:abc@gmail.com ,pass:abcd)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card><Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('https://foodapp1890.firebaseapp.com')} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Food}
                                //image="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201100297/158285890-online-voting-rgb-color-icon-electronic-polls-election-system-e-voting-balloting-participation-in-de.jpg"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    Food Delivery Web Application 
                                   
                                </Typography>
                                <Typography variant="body2" color="white">
                                UI for food ordering website made using react js and animate.css
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card><Card sx={{ maxWidth: 345 }} style={{backgroundColor:'transparent',color:'white !important'}} onClick={()=>handleClick('https://leafletproj1890.firebaseapp.com/')} className="m-4">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={Cov}
                                //image="https://previews.123rf.com/images/bsd555/bsd5552011/bsd555201100297/158285890-online-voting-rgb-color-icon-electronic-polls-election-system-e-voting-balloting-participation-in-de.jpg"
                                alt=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className=" text-white text-center">
                                    Covid Tracker Web Application      
                                </Typography>
                                <Typography variant="body2" color="white">
                                Short Project That tracks Covid-19 cases around the world.
Made Using React Js and Leaflet Js.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
            </Grid>
        </div>
    )
}
export default Projects