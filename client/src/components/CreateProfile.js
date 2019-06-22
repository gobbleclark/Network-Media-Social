import React, { useState, useEffect, } from 'react';
import axios from "axios";
import { Form, Header, Container, Segment, Image, Button } from "semantic-ui-react";

function CreateProfile() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [skills, setSkills] = useState("")
  const [avatar, setAvatar] = useState("")
  const [profile, setProfile] = useState([])

  useEffect( () => {
    axios.get("/api/profiles")
      .then( res => setProfile(res.data) )
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile)
    axios.post("/api/profiles", { name, company, position, skills, avatar })

      .then( res => setProfile([...profile, res.data]) )

    //   setAvatar();
    //   setProfile();
    //   setSkills();
    //   setPosition();
    //   setCompany();
  };

  const updateProfile = (id) => {
    axios.put(`/api/profiles/${id}`)
      .then( res => {
        const newProfile = profile.map( p => {
          if (p.id === id)
            return res.data;
          return p;
        })
        setProfile(newProfile);
      })
  };

  return (
    <Container style={{ marginTop: "25px", }}>
        <Header as="h3" textAlign="center" color="blue">Create Your Profile </Header>
      <Segment >
        <Form onSubmit={handleSubmit}>
            <Form.Input
            label = 'Profile Photo'
            placeholder = 'copy an image link and paste is here.'
            name= 'avatar'
            value={avatar}
            onChange={ e => setAvatar(e.target.value)}
            />
          <Form.Input 
            label = 'Your Name'
            placeholder = 'First and Last name preferred.'
            required
            value={name}
            onChange={ e => setName(e.target.value) }
          />
          <Form.Input 
            label = 'Where do you work?'
            placeholder = 'Amazon, Google, Apple, etc.'
            required
            value={company}
            onChange={ e => setCompany(e.target.value) }
          />
          <Form.Input 
           label = 'What is your position?'
            placeholder = 'Product Manager, Customer Service Agent, CEO, etc.'
            required
            value={position}
            onChange={ e => setPosition(e.target.value) }
          />
          <Form.Input
          label = 'Your top skills.'
          placeholder = 'Design, Photography, HTML, BE SPECIFIC' 
            required
            value={skills}
            onChange={ e => setSkills(e.target.value) }
          />
          <Button onClick={handleSubmit} color='blue' >
              Save
          </Button>
        </Form>
      </Segment>
    </Container>
  );
};


export default CreateProfile;