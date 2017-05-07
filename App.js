import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Tab, Tabs, Header, Body, Title } from 'native-base';
import RadioScene from './scenes/RadioScene';
import PlaylistScene from './scenes/PlaylistScene';
import channel from './config/channel';
import store from './config/store';
import { newTrack } from './actions/track'

export default class extends Component {
  componentDidMount()   {
    channel.on('new_track', (data) => {
      store.dispatch(newTrack(data))
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header style={{backgroundColor: '#00BCD4'}}>
            <Body>
              <Title>RTU</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab heading="Radio">
              <RadioScene />
            </Tab>
            <Tab heading="Playlist">
              <PlaylistScene />
            </Tab>
          </Tabs>
        </Container>
      </Provider>
    );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
});
