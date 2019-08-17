import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Icon, Left, Body, Right, Button, Footer, Title, } from 'native-base';
export default class ListIconExample extends Component {
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor='rgb(255, 255, 255)'
          iosBarStyle='dark-content'
          style={{ backgroundColor: '#669999' }}>
          <Left style={{ flex: 0 }} />
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Yurt Dışı Vize ve Pasaport</Title>
          </Body>
          <Right style={{ flex: 0 }} />
        </Header>
        <Content>
          <ListItem icon
            onPress={() => this.props.navigation.closeDrawer()}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>
            </Left>

            <Body>
              <Text>Ana Sayfa </Text>
            </Body>

          </ListItem>

          <ListItem icon
            onPress={() => this.props.navigation.navigate('AboutPage')}

          >
            <Left>
              <Button style={{ backgroundColor: "#1A5276" }}>
                <Icon active
                  type="MaterialCommunityIcons"
                  name="information" />
              </Button>
            </Left>
            <Body>
              <Text>Uygulama Hakkında</Text>
            </Body>

          </ListItem>
          <ListItem icon
            onPress={() => this.props.navigation.navigate('ContacPage')}

          >
            <Left>
              <Button style={{ backgroundColor: "#1A5276" }}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>İletişim</Text>
            </Body>

          </ListItem>

        </Content>
        <Footer style={{ backgroundColor: '#a3c1c1', paddingRight: 10 }}>

          <Right>
            <Text >Yurt Dışı Vize ve Pasaport</Text>
            <Text > Version 1.0 </Text>
          </Right>

        </Footer>
      </Container>
    );
  }
}