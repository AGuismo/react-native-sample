import React, { Component } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Constants, MapView } from 'expo'
import {
  Container,
  Header,
  Body,
  Title,
} from 'native-base'


const GOOGLE_PLACES_API_KEY = 'paste-your-key-here'


export default class GMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      markers: [],
    }
  }

  componentDidMount () {
    this.fetchPlacesData()
  }

  fetchPlacesData = () => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_PLACES_API_KEY}&types=restaurant&location=13.819792,100.528361&radius=2600`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          isLoading: false,
          markers: responseJson.results, 
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderMarkers = () => {
    if (this.state.isLoading) return null
    return this.state.markers.map((marker, index) => {
      const coords = {
        latitude: marker.geometry.location.lat,
        longitude: marker.geometry.location.lng,
    }

    return (
        <MapView.Marker
            key={index}
            coordinate={coords}
            title={marker.name}
            description={marker.vicinity}
        />
    )
    })
  }

  render(){
    return(
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title>GMap: Bang Sue Restaurant</Title>
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
          >
            {this.renderMarkers()}
          </MapView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight
    },
  })