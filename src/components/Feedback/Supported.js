import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class Supported extends Component {




    render() {
        return (


            <div>


            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Supported);