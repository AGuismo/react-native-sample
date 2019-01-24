import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Constants, MapView } from 'expo'
import {
  Container,
  Header,
  Body,
  Title,
} from 'native-base'


export default class GMap extends Component {
  render(){
    return(
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title>GMap</Title>
          </Body>
        </Header>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 13.822708,
              longitude: 100.524454,
              latitudeDelta: 0.056011,
              longitudeDelta: 0.043858,
            }}
          />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight
    },
  })