import React from "react";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { ListItem, List, ListItemText } from "@mui/material";
const Experience = () => {
  return (
    <div
      id="experience"
      className="text-white container  d-flex justify-content-center mt-5 flex-column "
    >
      <div data-aos="fade-right" className=" h1 text-center my-4 mt-2">
        EXPERIENCE{" "}
      </div>
      <div>
        <Stepper data-aos="fade-right" orientation="vertical">
          <Step key={1} active={true}>
            <StepLabel>
              <div style={{ color: "white" }}>
                <h3>Frontend Developer </h3>{" "}
                <span style={{ marginLeft: "20px" }}>
                  Mamaearth ( Jan 2023 - Present )
                </span>
              </div>
            </StepLabel>
            <StepContent>
              <Grid container>
                <List>
                  <ListItem dense role={undefined}>
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          1.) Spearheaded the frontend development efforts for our company's flagship e-commerce platform, leveraging the power of Next.js and React.js to craft highly dynamic and impeccably responsive user interfaces.
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          2.) My standout achievements were orchestrating a significant reduction in bundle size, an endeavor that saw us trim it down from a bulky 600 KB to a sleek and efficient average of 180 KB for our important pages. Me and my team boosted our Gtmetrix score from  30 to an average of 65 for our  converting pages like Home,PDP and PLP within a month
                        </span>
                      }
                    />
                  </ListItem>
                 
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          3.)Integrated 3rd party SDKs like Gokwik, VWO, Google optimise, Google tag manager and Moengage.
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          4.)Product development tasks like goodness-insider loyalty program, PLP as SSR page and GoKwik-address section.
                        </span>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </StepContent>
          </Step>
          <Step key={2} active={true}>
            <StepLabel>
              <div style={{ color: "white" }}>
                <h3>Frontend Developer </h3>
                <span style={{ marginLeft: "20px" }}>
                  Tiket.com ( Mar 2022 - Jan 2023 )
                </span>
              </div>
            </StepLabel>
            <StepContent>
              <Grid container>
                <List style={{ fontSize: "20px !important" }}>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    disableTypography
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          1.)Worked in the payments team where I integrated Blipay successfully and led the migration of  Refunds page to Next.js architecture.
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          2.)Led creation and maintenance of our inhouse UI framework - Tiket Passport made using React.js,Typescript and Storybook.
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          3.)Successfully migrated core pages, including hotel and homepage, to Next.js, resulting in a Lighthouse performance score of 90+ , a 59% reduction in average page load speed, and a 49% enhancement in product visit performance.
                        </span>
                      }
                    />
                  </ListItem>

                </List>
              </Grid>
            </StepContent>
          </Step>
          <Step active={true} key={3}>
            <StepLabel>
              <div style={{ color: "white" }}>
                <h3>Software Developer </h3>
                <span style={{ marginLeft: "20px" }}>
                  Antares Tech ( July 2021 - Present )
                </span>
              </div>
            </StepLabel>
            <StepContent>
              <Grid container>
                <List>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          1.) End to End development of MERN stack projects
                          called BOSS(Business Objective Scoring System) which
                          generates agricultural reports based on given factors
                          and a podcast application which hosts 75000 podcasts
                          till date.
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem
                    //className={classes.listItem}
                    //key={id}
                    //button
                    dense
                    role={undefined}
                    //onClick={() => this.onChecked(id)}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: "18px" }}>
                          2.) Product development tasks like implementing factors data page for seed data, dashboard page for podcast application,
engineering an audio packet data visualization tool and designing a messaging system using NATS event bus and Sendgrid.


                        </span>
                      }
                    />
                  </ListItem>
                  
                </List>
              </Grid>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};
export default Experience;
