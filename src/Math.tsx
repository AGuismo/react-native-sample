import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
} from 'native-base'
import memoize from 'fast-memoize'

// findSequenceTerm find the term value of the sequence X(n) = X(n - 1) + 2(n - 1)
const findSequenceTerm = (termNumber: number) => {
  if (isNaN(termNumber) || termNumber <= 0) return ''
  let currentStep = 0
  let sum = 3
  while (currentStep !== termNumber) {
    sum += 2 * currentStep
    currentStep += 1
  }
  return sum
}

type State = {
  termNumber: string,
  result: string,
}

export default class Math extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      termNumber: '',
      result: '',
    }
    this.memfindSequenceTerm = memoize(findSequenceTerm)
  }

  memfindSequenceTerm: any

  onFindPress = () => {
    this.setState({ result: this.memfindSequenceTerm(parseInt(this.state.termNumber, 10)) })
  }

  onChangeText = (text: string) =>  {
    this.setState({ termNumber: text.replace(/[^0-9]/g, ''), result: '' })
  }

  renderResult = () => this.state.result ?
  <Text style={styles.result}>Result: {this.state.result}</Text> : null

  render() {
    return(
      <Container>
        <Header noLeft={true} style={styles.header}>
          <Left />
          <Body>
            <Title>Math: Sequence</Title>
          </Body>
          <Right />
        </Header>
        <Content padder={true}>
        <Text style={styles.contentTitle}>{'Find sequence term'}</Text>
        <Text style={styles.contentSubtitle}>{'Sequence notation: { 3, 5, 9, 15, ... }'}</Text>
        <Text style={styles.contentSubtitle}>{'Sequence formula: X(n) = F(n - 1) + 2(n - 1)'}</Text>
          <Form>
            <Item
              style={styles.formInput}
              regular={true}
            >
              <Label>N :</Label>
              <Input
                keyboardType='numeric'
                value={`${this.state.termNumber}`}
                maxLength={8}
                onChangeText={this.onChangeText}
                onEndEditing={this.onFindPress}
                onFocus={() => this.setState({ termNumber: '', result: '' })}
              />
            </Item>
            <Button
              style={styles.formButton}
              full={true}
              onPress={this.onFindPress}
            >
              <Text>Find</Text>
            </Button>
          </Form>
          {this.renderResult()}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight,
  },
  contentTitle: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 25,
  },
  contentSubtitle: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  formInput: {
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  formButton: {
    borderRadius: 5,
  },
  result: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
})
