import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Card } from 'native-base';

export default class extends Component {
  render () {
    return (
      <Container>
        <Card>
          <Text>Playlist goes here !</Text>
        </Card>
      </Container>
    )
  }
}
