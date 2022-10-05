import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const initial2State = {
    tell_us_about: "",
    fb_link: "",
    vision_missing: "",
    Management_name: "",
    Management_Designation: "",
    profile: "",
  };
  const [form2Data, setForm2Data] = useState(initial2State);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentData = {
      ...form2Data,
      [name]: value,
    };
    setForm2Data(currentData);
  };

  console.log(form2Data);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(form2Data),
      url: "http://localhost:2345/products",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="App">
        <Grid>
          <Card
            style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5">
                Tell us more about yourself
              </Typography>

              <form>
                <Grid container spacing={1}>
                  <Typography gutterBottom variant="p" align="center">
                    Brief Company profile
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="tell_us_about"
                      value={form2Data.tell_us_about}
                      label="brief"
                      multiline
                      rows={2}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Typography gutterBottom variant="p" align="center">
                      200/200 words Remaining
                    </Typography>
                  </Grid>
                  <Typography gutterBottom variant="p" align="center">
                    Facebook/LinkedIn page URL, Youtube link, etc...
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="fb_link"
                      value={form2Data.fb_link}
                      type="URL"
                      placeholder="https://example.com"
                      label="URL"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Typography gutterBottom variant="p" align="center">
                    Vision / Mission
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="vision_missing"
                      value={form2Data.vision_missing}
                      type="text"
                      multiline
                      rows={2}
                      placeholder="Description (Max 200 Words)"
                      label="Description"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Typography gutterBottom variant="p" align="center">
                      200/200 words Remaining
                    </Typography>
                  </Grid>
                  <Typography
                    style={{
                      fontFamily: "bold",
                      weight: "100",
                    }}
                    gutterBottom
                    variant="h5"
                    align="center"
                  >
                    Management Team Details
                  </Typography>

                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="Management_name"
                      value={form2Data.Management_name}
                      label="Name"
                      placeholder="Enter Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Typography gutterBottom variant="p" align="center">
                    Designation
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="Management_Designation"
                      value={form2Data.Management_Designation}
                      label="Designation"
                      placeholder="Enter Designation"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Typography gutterBottom variant="p" align="center">
                    Profile Summary
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => handleChange(e)}
                      name="profile"
                      value={form2Data.profile}
                      multiline
                      rows={2}
                      label="Summery"
                      placeholder="Description (Max 150 Words)"
                      variant="outlined"
                      fullWidth
                      required
                    />
                    <Typography gutterBottom variant="p" align="center">
                      150/150 words Remaining
                    </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Button
                      type="Back"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => navigate("/")}
                      required
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Button
                      onClick={(e) => handleSubmit(e)}
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      required
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default Page2;
