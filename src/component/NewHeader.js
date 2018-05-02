import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon } from 'native-base';

class Header extends Component{
    render(){
        return(
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search"/>
                        <Input placeholder="Cari"/>
                        </Item>
                    </Header>
            </Container>
        )
    }
}

export default Header;