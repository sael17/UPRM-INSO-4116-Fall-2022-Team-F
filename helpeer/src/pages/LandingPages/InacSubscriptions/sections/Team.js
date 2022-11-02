/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
// import team1 from "assets/images/team-5.jpg";
// import team2 from "assets/images/bruce-mars.jpg";
// import team3 from "assets/images/ivana-squares.jpg";
// import team4 from "assets/images/ivana-square.jpg";

// import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import MKButton from "components/MKButton";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Your Inactive Subscriptions
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Renew these canceled subscriptions based of the provided information.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://logo.clearbit.com/appletv.com"
                name="Apple TV"
                position={{
                  color: "info",
                  label: (
                    <>
                      Price: <br /> Cancel Date:{" "}
                    </>
                  ),
                }}
                description={
                  <>
                    <MKButton color="success">Renew</MKButton>
                  </>
                }
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image="https://logo.clearbit.com/amazon.com"
                name="Amazon"
                position={{
                  color: "info",
                  label: (
                    <>
                      Price: <br /> Cancel Date:{" "}
                    </>
                  ),
                }}
                description={
                  <>
                    <MKButton color="success">Renew</MKButton>
                  </>
                }
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://logo.clearbit.com/showtime.com"
                name="Showtime"
                position={{
                  color: "info",
                  label: (
                    <>
                      Price: <br /> Cancel Date:{" "}
                    </>
                  ),
                }}
                description={
                  <>
                    <MKButton color="success">Renew</MKButton>
                  </>
                }
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image="https://logo.clearbit.com/pandora.com"
                name="Pandora"
                position={{
                  color: "info",
                  label: (
                    <>
                      Price: <br /> Cancel Date:{" "}
                    </>
                  ),
                }}
                description={
                  <>
                    <MKButton color="success">Renew</MKButton>
                  </>
                }
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
