import React from "react"
import './about.css'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import ChipSet from '../common/chip.js'
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import HandymanIcon from '@mui/icons-material/Handyman';
import { LocalPostOfficeRounded } from "@mui/icons-material";
const About = () => {

    return (
        <div id="about" className="text-white container  d-flex justify-content-center mt-5 flex-column ">
            <div  className=" h1 text-center my-4 mt-2">Skills </div>
            <div  >

                <Stepper  orientation="vertical"   >

                    <Step active={true} key={1}>
                        <StepLabel  >
                            <h3 style={{ color: 'white' }}>Programming Languages</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container >
                                <Stack direction="row" style={{flexWrap:'wrap'}} spacing={1}>
                                    <ChipSet avatar={<Avatar>C</Avatar>}  title={'C++'} />
                                    <ChipSet avatar={<Avatar>J</Avatar>} title={'Java'} />
                                    <ChipSet avatar={<Avatar>C</Avatar>} title={'C'} />
                                    <ChipSet avatar={<Avatar>S</Avatar>} title={'Solidity'} />
                                    <ChipSet comp={<JavascriptIcon/>} title={'Javascript'} />
                                </Stack>

                            </Grid>

                        </StepContent>
                    </Step>
                    <Step key={2} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>Web FrontEnd</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <Stack direction="row" style={{flexWrap:'wrap'}} spacing={1}>
                                    <ChipSet comp={<HtmlIcon/>} title={'HTML'} />
                                    <ChipSet comp={<CssIcon/>} title={'CSS'} />
                                    <ChipSet comp={<JavascriptIcon/>} title={'React.js'} />
                                    <ChipSet comp={<JavascriptIcon/>} title={'Redux'} />
                                    <ChipSet comp={<CssIcon/>} title={'MaterialUI'} />
                                    <ChipSet comp={<CssIcon/>} title={'Bootstrap'} />
                                    <ChipSet comp={<CssIcon/>} title={'MaterializeCSS'} />
                                </Stack>

                            </Grid>
                        </StepContent>
                    </Step>
                    <Step key={3} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>Web Back End</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <Stack direction="row" spacing={1}>
                                    <ChipSet comp={<JavascriptIcon/>} title={'Node.js'} />
                                    <ChipSet comp={<JavascriptIcon/>} title={'Express.js'} />
                                </Stack>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step key={3} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>Databases</h3>
                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <Stack  direction="row" spacing={1}>
                                    <ChipSet comp={<StorageIcon/>} title={'MongoDB'} />
                                    <ChipSet comp={<StorageIcon/>} title={'SQL'} />
                                    <ChipSet comp={<LocalFireDepartmentIcon/>} title={'FireStore'} />
                                </Stack>

                            </Grid>
                        </StepContent>
                    </Step >

                    <Step key={3} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>Cloud Platforms</h3>

                        </StepLabel>
                        <StepContent>
                            <Grid container>
                                <Stack direction="row" spacing={1}>
                                    <ChipSet comp={<CloudCircleIcon/>} title={'Heroku'} />
                                    <ChipSet title={'Firebase'} comp={<CloudCircleIcon/>} />
                                    <ChipSet title={'Netlify'}  comp={<CloudCircleIcon/>} />
                                </Stack>
                            </Grid>
                        </StepContent>
                    </Step>
                    <Step key={3} active={true}>
                        <StepLabel >
                            <h3 style={{ color: 'white' }}>Tools</h3>
                        </StepLabel>
                        <StepContent className="ml-5">
                            <Grid className="ml-5" container justify="center">

                                <Stack style={{flexWrap:'wrap'}} direction="row" spacing={1}>
                                    <ChipSet comp={<HandymanIcon/>} title={'VSCode'} tool={true} />
                                    <ChipSet comp={<HandymanIcon/>} title={'MongoDB Compass'} tool={true} />
                                    <ChipSet comp={<GitHubIcon/>} title={'Git/Github'} tool={true} />
                                    <ChipSet comp={<LocalPostOfficeRounded/>} title={'Postman'} tool={true} />
                                    <ChipSet comp={<HandymanIcon/>} title={'JIRA'} tool={true} />
                                    <ChipSet comp={<LocalFireDepartmentIcon/>} title={'Firebase'} tool={true} />
                                </Stack>
                            </Grid>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        </div>
    )
}
export default About