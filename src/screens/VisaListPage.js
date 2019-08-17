import React, { Component } from 'react'
import { View, FlatList, TextInput, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { List, Header, } from '../components/common'
import { visaFilter, visaSelect, back } from '../actions/visaActions'
import { toggleSearchBar } from '../actions/mainActions'
import styles from '../components/styles/visaListPage'
class VisaListPage extends Component {
    searchVisa = (text) => {

        const item = this.props.visa.visa_list_full;

        const search_text = text.toLowerCase();

        const searched_visa = item.filter(response => {

            let visa_name = null;

            typeof response.visa_name !== 'undefined' ? visa_name = response.visa_name.toLowerCase() : null;

            let result = null;

            visa_name !== null ? result = visa_name.indexOf(search_text) > -1 : null;

            return result;

        });

        this.props.visaFilter(searched_visa);
    };

    renderVisaList = (item) => {

        if (typeof item.visa_name !== 'undefined') {
            return (
                <List
                    text={item.visa_name}
                    onPress={() => this.props.visaSelect(item)}
                />
            )
        }
    };
    searchBarHandler = async () => {
        if (this.props.visa.isSearchVisible) {
            await this.props.toggleSearchBar();
            await Keyboard.dismiss();
        } else {
            await this.props.toggleSearchBar();
            await this.textInput.focus()
        }

    };

    render() {
        const { visa_list } = this.props.visa;
        const countryName = this.props.navigation.getParam('countryName');
        return (
            <View style={styles.container}>
                <Header
                    leftButtonBackActive
                    leftButtonFunction={() => {
                        this.props.navigation.goBack();
                        this.props.back();
                    }}
                    rightButtonSearchActive
                    rightButtonFunction={() => this.searchBarHandler()}
                    text={countryName}
                />
                {
                    this.props.visa.isSearchVisible === true ?
                        <View style={styles.searchBarWrapper}>
                            <TextInput
                                ref={
                                    input => { this.textInput = input }
                                }
                                placeholder='Aranacak Metni Giriniz...'
                                placeholderTextColor='#ffffff'
                                style={styles.searchBar}
                                onChangeText={text => this.searchVisa(text)}
                            />
                        </View>
                        : null
                }
                <FlatList
                    data={visa_list}
                    keyExtractor={(item) => item.visa_name || item.uid}
                    renderItem={({ item }) => this.renderVisaList(item)}
                />

            </View>
        )
    }
}


const mapStateToProps = (state) => {
    const { visa } = state
    return { visa }
};

const mapDispatchToProps = {
    visaFilter,
    toggleSearchBar,
    visaSelect,
    back
};


export default connect(mapStateToProps, mapDispatchToProps)(VisaListPage);