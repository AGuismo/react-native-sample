import React from 'react'
import { MapView } from 'expo'
import { Container, Text } from 'native-base'

import PageHeader from './ui-kit/PageHeader'

const GOOGLE_PLACES_API_KEY = 'paste-your-key-here'

type Location = {
  location: {
    lat: string,
    lng: string,
  },
}

type MarkerData = {
  name: string,
  vicinity: string,
  geometry: Location,
}

type State = {
  isLoading: boolean,
  markers: MarkerData[],
}

export default class GMap extends React.Component<{}, State> {
  constructor(props: any) {
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
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=
    ${GOOGLE_PLACES_API_KEY}&types=restaurant&location=13.7489745,100.53805&radius=20000`)
      .then((response) => {
        return response.json()
      })
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

  render() {
    return(
      <Container>
        <PageHeader title='Bangkok Restaurants'/>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 13.7489745,
            longitude: 100.53805,
            latitudeDelta: 0.0960410,
            longitudeDelta: 0.145279,
          }}
        >
          {this.renderMarkers()}
        </MapView>
      </Container>
    )
  }
}
