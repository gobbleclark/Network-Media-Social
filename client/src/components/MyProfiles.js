import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyProfiles extends React.Component {
  state = { profiles: [], };

  componentDidMount() {
    axios.get("/api/my_profiles")
      .then( res => this.setState({ profiles: res.data, }) );
  }

  render() {
   
    const { profiles, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { profiles.map( profile =>
          <Card key={profile.id}>
          <Image src={profile.avatar} />
          <Card.Content>
            <Card.Header>
              { profile.name }
            </Card.Header>
            <Card.Description>
              { profile.company }
            </Card.Description>
            <Card.Meta>
              { profile.position }
            </Card.Meta>
            <Card.Meta>
              { profile.skills }
            </Card.Meta>
          </Card.Content>
        </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyProfiles;