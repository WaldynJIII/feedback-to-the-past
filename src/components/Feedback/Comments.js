import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import FeedbackSummary from '../FeedbackSummary/FeedbackSummary'
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
            return <Redirect push to='/review' />
        }
        return (


            <div>
                <h1> Any additional comments</h1>
                <form onSubmit={this.thisIsDispatch}>
                    <div >
                        
                            
                                <input
                            onChange={this.handleChange}
                                    type="text"
                                    value={this.state.comments}
                                   
                                />
                                
                
                        

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
export default connect(mapReduxStoreToProps)(Comments);