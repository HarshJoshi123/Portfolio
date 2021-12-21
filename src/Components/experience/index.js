import React from "react"
//import './about.css'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import {ListItem,List,ListItemText} from '@mui/material'
const Experience = () => {

    return (
        <div id="experience" className="text-white container  d-flex justify-content-center mt-5 flex-column ">
            <div data-aos="fade-right" className=" h1 text-center my-4 mt-2">EXPERIENCE </div>
            <div  >

                <Stepper data-aos="fade-left" orientation="vertical"   >

                    <Step active={true} key={1}>
                        <StepLabel  >
                            <h3 style={{ color: 'white' }}>ANTARES TECH</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container >
                                <List >
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText primary={<span style={{fontSize:'20px'}}>1.) Developed full stack web applications which allows real-time communication and storage.</span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText primary={<span style={{fontSize:'20px'}}>2.) Designed and built features for webapp's front-end using React.js and MaterialUI. </span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText primary={<span style={{fontSize:'20px'}}>3.) Built microservice's using Node.js,MongoDB and NATS. </span>} />
                                        </ListItem>
                                </List>

                            </Grid>

                        </StepContent>
                    </Step>
                    <Step key={2} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>NAMASYS CONSULTANTS LLP</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                            <List >
                                        <ListItem
                                             dense
                                            role={undefined}
                                           
                                        >
                                            <ListItemText  primary={<span style={{fontSize:'20px'}}>1.) Worked on real-time management information systems for leaders and managers as React.js Developer. </span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText  primary={<span style={{fontSize:'20px'}}>2.) Integrated API's with front-end and redux. </span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText  primary={<span style={{fontSize:'20px'}}>3.) Worked on Material ui framework for building modern designs.</span>} />
                                        </ListItem>
                                </List>
 
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step key={3} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>TRICERIA SOLUTIONS</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                            <List style={{fontSize:'20px !important'}}>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            disableTypography
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText style={{fontSize:'20px !important'}} primary={<span style={{fontSize:'20px'}}>1.) Developed a recruitment web application using React.js and Redux. </span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText primary={<span style={{fontSize:'20px'}}>2.) Communicated and worked closely with clients to ensure that their requirements were fully met. </span>} />
                                        </ListItem>
                                        <ListItem
                                            //className={classes.listItem}
                                            //key={id}
                                            //button
                                            dense
                                            role={undefined}
                                            //onClick={() => this.onChecked(id)}
                                        >
                                            <ListItemText primary={<span style={{fontSize:'20px'}}>3.) Developed website using AGILE methodology. </span>} />
                                        </ListItem>
                                </List>
                            </Grid>
                        </StepContent>
                    </Step>

                </Stepper>
            </div>
        </div>
    )
}
export default Experience