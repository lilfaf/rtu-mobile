import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image } from 'react-native';
import { Container, Card, CardItem, Left, Body, Button } from 'native-base';

class RadioScene extends Component {
  render() {
    return (
      <Container>
        <Card>
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
                style={{height: 300, width: '100%'}} />
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
