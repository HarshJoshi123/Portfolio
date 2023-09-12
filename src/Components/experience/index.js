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
                          3.)I actively engaged in product development tasks and devoted my skills to optimization tasks aimed at elevating our website's conversion rate and overall user experience.
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
                          2.) Migrated core pages like hotel and homepage to Next.js architecture which improved our lighthouse performance score to 90, decreased average page load speed by 59% and improved product visit performance by 49% .
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
                          2.) Ensured both applications were bug-free and reliable, improving user satisfaction.

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
                          3.)Contributed to system scalability through microservices architecture implemented using Node.js, MongoDB and NATS.

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
