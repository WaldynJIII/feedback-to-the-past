import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
class Comments extends Component {
    state = {
        comments: '',
        redirect: false
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value
        })
    }
    thisIsDispatch = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
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
                <h1> Understanding</h1>
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
            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Comments);