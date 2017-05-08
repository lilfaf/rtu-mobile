import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body, Button } from 'native-base';
import { Player } from 'react-native-audio-streaming';

const streamUrl = 'http://srv2.streaming-ingenierie.fr:8184/;stream/1'

class RadioScene extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontWeight: 'bold'}}>
                    {this.props.track.title}
                  </Text>
                  <Text style={{color: 'gray'}} note>
                    {this.props.track.artist}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {(this.props.track.metadatas && this.props.track.metadatas.length) &&
                <Image source={{uri: this.props.track.metadatas[0].cover}}
                  style={{height: 340, width: '100%'}} />
              }
            </CardItem>
            {(this.props.track.metadatas && this.props.track.metadatas.length) &&
              <CardItem>
                {this.props.track.metadatas.map((meta, i) => {
                  return (
                    <Button key={i} transparent>
                      <Text>{meta.provider}</Text>
                    </Button>
                  )
                })}
              </CardItem>
            }
          </Card>
        </Content>
        <Player url={streamUrl} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    track: state.track
  };
}

export default connect(mapStateToProps)(RadioScene);
