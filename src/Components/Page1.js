import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const Page1 = () => {
  const initialState = {
    companyname: "",
    headOffice: "",
    Country: "",
    city: "",
    contactNumber: "",
    url: "",
    name: "",
    Designation: "",
    keyContact: "",
    keyEmail: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [image, setimage] = useState(
    "https://thumbs.dreamstime.com/z/career-icon-trendy-logo-concept-white-background-human-resources-collection-133513442.jpg"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentData = {
      ...formData,
      [name]: value,
    };
    setFormData(currentData);
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(formData),
      url: "http://localhost:2345/products",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (
      !formData.companyname &&
      !formData.headOffice &&
      !formData.Country &&
      !formData.city &&
      !formData.contactNumber
    ) {
      navigate("/SecondPage");
    } else {
      alert("Plese Fill all the details");
    }
  };

  const Upload_URL = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setimage(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      className="Page"
    >
      <div style={{ textAlign: "center" }} className="info_Div">
        <Typography gutterBottom variant="h6" align="center">
          Basic Company Information
        </Typography>
        <Grid>
          <Card style={{ maxWidth: 500, padding: "5px 5px", margin: "0 auto" }}>
            <CardContent>
              <form>
                <Grid container spacing={1}>
                  &nbsp;
                  <Typography gutterBottom variant="p" align="center">
                    Company Name
                  </Typography>
                  <Grid xs={12} item>
                    <TextField
                      name="companyname"
                      value={formData.companyname}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  &nbsp;
                  <Typography gutterBottom variant="p" align="center">
                    Head Office Address
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      name="headOffice"
                      value={formData.headOffice}
                      onChange={(e) => handleChange(e)}
                      type="text"
                      placeholder="Enter head office"
                      label="office"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  &nbsp;
                  <Typography gutterBottom variant="p" align="center">
                    Country
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      name="Country"
                      value={formData.Country}
                      onChange={(e) => handleChange(e)}
                      type="country"
                      placeholder="Enter Country"
                      label="country"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <div
                    spacing={1}
                    style={{ textAlign: "left", display: "flex" }}
                  >
                    <div className="code_div">
                      <Typography gutterBottom variant="p" align="center">
                        Post Code
                      </Typography>
                      <Grid item xs={5}>
                        <TextField
                          type="number"
                          label="Code"
                          placeholder="Type your message here"
                          variant="outlined"
                        />
                      </Grid>
                    </div>
                    <div className="City">
                      &nbsp;
                      <Typography gutterBottom variant="p" align="center">
                        City
                      </Typography>
                      <Grid xs={15} item>
                        <TextField
                          name="city"
                          value={formData.city}
                          onChange={(e) => handleChange(e)}
                          placeholder="City name"
                          label="City"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                    </div>
                  </div>
                  <div
                    spacing={1}
                    style={{ textAlign: "left", display: "flex" }}
                  >
                    <div className="code_div">
                      <Typography gutterBottom variant="p" align="center">
                        Country Code
                      </Typography>
                      <Grid item xs={5}>
                        <TextField
                          type="number"
                          label="Code"
                          placeholder="Type your message here"
                          variant="outlined"
                        />
                      </Grid>
                    </div>
                    <div className="City">
                      &nbsp;
                      <Typography gutterBottom variant="p" align="center">
                        Contact Number
                      </Typography>
                      <Grid xs={15} item>
                        <TextField
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={(e) => handleChange(e)}
                          type="number"
                          placeholder="number"
                          label="Number"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                    </div>
                  </div>
                  &nbsp;
                  <Typography gutterBottom variant="p" align="center">
                    Website URL
                  </Typography>
                  <Grid xs={12} item>
                    <TextField
                      name="url"
                      value={formData.url}
                      onChange={(e) => handleChange(e)}
                      type="url"
                      placeholder="https://example.com"
                      label="URL"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Typography gutterBottom variant="h5" align="center">
                    Key Content Person
                  </Typography>
                  <Grid xs={12} item>
                    <TextField
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange(e)}
                      type="Name"
                      placeholder="Enter Name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      name="Designation"
                      value={formData.Designation}
                      onChange={(e) => handleChange(e)}
                      type="Designation"
                      placeholder="Enter Designation"
                      label="Designation"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <div
                    spacing={1}
                    style={{ textAlign: "left", display: "flex" }}
                  >
                    <div className="code_div">
                      <Typography gutterBottom variant="p" align="center">
                        Country Code
                      </Typography>
                      <Grid item xs={5}>
                        <TextField
                          type="number"
                          label="Code"
                          placeholder="Type your message here"
                          variant="outlined"
                        />
                      </Grid>
                    </div>
                    <div className="City">
                      &nbsp;
                      <Typography gutterBottom variant="p" align="center">
                        Contact Number
                      </Typography>
                      <Grid xs={15} item>
                        <TextField
                          name="keyContact"
                          value={formData.keyContact}
                          onChange={(e) => handleChange(e)}
                          type="number"
                          placeholder="number"
                          label="Number"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                    </div>
                  </div>
                  <Typography gutterBottom variant="p" align="center">
                    Email
                  </Typography>
                  <Grid xs={12} item>
                    <TextField
                      name="keyEmail"
                      value={formData.keyEmail}
                      onChange={(e) => handleChange(e)}
                      type="Email"
                      placeholder="Email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={(e) => handleSubmit(e)}
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
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
      <div className="Logo_Div">
        <Typography gutterBottom variant="h1" align="center">
          logo
        </Typography>
        <div
          className="imagediv"
          style={{
            borderRadius: "100%",
            height: "200px",
            width: "200px",
            border: "1px solid black",
            margin: "auto",
          }}
        >
          {image ? (
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                boxSizing: "content-box",
              }}
              src={image}
              alt="profile photo"
            />
          ) : null}
        </div>

        <div
          style={{
            marginLeft: "70px",
            marginTop: "10%",
          }}
          className="box"
        >
          <label>Choose photo</label>
          <input type="file" onChange={Upload_URL}></input>
        </div>
      </div>
    </div>
  );
};

export default Page1;
