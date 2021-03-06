import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FeedbackSummary from '../FeedbackSummary/FeedbackSummary'
class Supported extends Component {
    state = {
        support: '',
        redirect: false
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            support: event.target.value
        })
    }
    thisIsDispatch = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
        this.setState({
            ...this.state,
            redirect: true,
        })
    }

    render() {
        console.log(this.state.support)
        if (this.state.redirect) {
            return <Redirect push to='/understanding' />
        }
        return (


            <div>
                <h1> Did Prime staff support you today?</h1>
                <form onSubmit={this.thisIsDispatch}>
                    <div onChange={this.handleChange}>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='1'
                                    name="type"
                                />
                                1
                </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='2'
                                    name="type"
                                />
                                2
                </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='3'
                                    name="type"
                                />
                                3
                </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='4'
                                    name="type"
                                />
                                4
                </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value='5'
                                    name="type"
                                />
                                5
                </label>
                        </div>

                    </div>
                    <input type="submit" value="Submit" />

                </form>
                <FeedbackSummary />
            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Supported);