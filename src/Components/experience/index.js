import React from "react"
//import './about.css'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { ListItem, List, ListItemText } from '@mui/material'
const Experience = () => {

    return (
        <div id="experience" className="text-white container  d-flex justify-content-center mt-5 flex-column ">
            <div data-aos="fade-right" className=" h1 text-center my-4 mt-2">EXPERIENCE </div>
            <div  >

                <Stepper data-aos="fade-right" orientation="vertical"   >

                    <Step active={true} key={1}>
                        <StepLabel  >
                            <div style={{ color: 'white' }}><h3>Software Developer  </h3><span style={{marginLeft:'20px'}}>Antares Tech ( July 2021 - Present )</span></div>
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
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>1.) End to End development of MERN stack projects called  BOSS(Business
                                            Objective Scoring System) which generates agricultural reports based on given factors and a podcast application which hosts 75000 podcasts till date.
                                        </span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>2.) Resolved several bugs in these applications making them failure proof. </span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>3.) Improvement in the speed of products by 30% by optimizing the code </span>} />
                                    </ListItem>
                                </List>

                            </Grid>

                        </StepContent>
                    </Step>
                    <Step key={2} active={true}>
                        <StepLabel >
                            <div style={{ color: 'white' }}><h3>Web Developer Intern </h3> <span style={{marginLeft:'20px'}}>Namasys Consultants ( Mar 2021 - May 2021 )</span></div>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <List >
                                    <ListItem
                                        dense
                                        role={undefined}

                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>1.) Worked on SACRD project which is a robotic process automation solution for multi-currency,multi-GAAP financial reporting automation and business intelligence. </span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>2.) Built several key components using react.js and integrated api's with redux.</span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>3.) Worked on material-ui framework for building modern designs.</span>} />
                                    </ListItem>
                                </List>

                            </Grid>
                        </StepContent>
                    </Step>
                    <Step key={3} active={true}>
                        <StepLabel >
                            <div style={{ color: 'white' }}><h3>Web Developer Intern </h3><span style={{marginLeft:'20px'}}>Triceria Solutions ( Apr 2020 - Jun 2020 )</span></div>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <List style={{ fontSize: '20px !important' }}>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        disableTypography
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText  primary={<span style={{ fontSize: '18px' }}>1.) Developed a recruitment web application using React.js and Redux. </span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>2.) Communicated and worked closely with clients to ensure that their requirements were fully met. </span>} />
                                    </ListItem>
                                    <ListItem
                                        //className={classes.listItem}
                                        //key={id}
                                        //button
                                        dense
                                        role={undefined}
                                    //onClick={() => this.onChecked(id)}
                                    >
                                        <ListItemText primary={<span style={{ fontSize: '18px' }}>3.) Developed website using AGILE methodology. </span>} />
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