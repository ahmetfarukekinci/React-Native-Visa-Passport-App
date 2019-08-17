import React, { Component } from 'react'
import { View, FlatList, TextInput, Keyboard } from 'react-native'
import { Header, List, Spinner } from '../components/common'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
    toggleSearchBar,
    filterCountry,
    mapVisa,
    mapCountries
} from '../actions/mainActions'
import styles from '../components/styles/mainPage'

class MainPage extends Component {
    componentDidMount() {
        this.props.mapCountries();
    }
    searchFilter = (text) => {

        // taking full list of country and reducer filter it to text

        countries = this.props.visa.country_list_full;

        const filtered_country = _.filter(countries, country => {

            country_name = country.uid.toLowerCase();

            filter_text = text.toLowerCase();

            return country_name.indexOf(filter_text) > -1;

        });
        this.props.filterCountry(filtered_country);
    };

    renderList = (item) => {
        return (
            <List
                text={item.uid}
                // mapVisa is the func. that directly navigate to VisaListPage 
                // and map visas of selected country
                onPress={() => this.props.mapVisa(item)}
            />
        )
    };

    searchBarHandler = async () => {
        // handle keyboard and text input focus from 
        if (this.props.visa.isSearchVisible) {
            await this.props.toggleSearchBar();
            await Keyboard.dismiss();
        } else {
            await this.props.toggleSearchBar();
            await this.textInput.focus();
        }

    };

    render() {

        return (
            <View style={styles.container}>
                <Header
                    leftButtonMenuActive
                    leftButtonFunction={() => this.props.navigation.toggleDrawer()}
                    rightButtonSearchActive
                    rightButtonFunction={() => this.searchBarHandler()}
                    text='ÜLKELER'
                />
                {
                    this.props.visa.isSearchVisible === true ?
                        <View style={styles.searchBarWrapper}>
                            <TextInput
                                ref={
                                    input => { this.textInput = input }
                                }
                                placeholder='Ülke Arayın...'
                                placeholderTextColor='#ffffff'
                                style={styles.searchBar}
                                onChangeText={text => this.searchFilter(text)}
                            />
                        </View>
                        : null
                }

                {
                    // Spiner show up while waiting firebase fetch
                    this.props.visa.loading ? <Spinner />
                        :
                        <FlatList
                            keyExtractor={item => item.uid}
                            data={this.props.visa.country_list}
                            renderItem={({ item }) => this.renderList(item)}
                        />
                }



            </View>
        )
    }
}
const mapStateToProps = state => {
    const { visa } = state;
    return { visa };
}

const mapDispatchToProps = {
    toggleSearchBar,
    filterCountry,
    mapVisa,
    mapCountries
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage); 