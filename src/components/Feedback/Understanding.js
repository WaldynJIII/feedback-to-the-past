import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class Understanding extends Component {
state={
    understanding: '',
    redirect: false
}

handleChange=(event)=>{
this.setState({
    understanding: event.target.value
})
}
thisIsDispatch=()=>{
    this.props.dispatch({type: 'ADD_UNDERSTANDING', paylod: this.state.understanding})
    thi
}

    render() {
        return (


            <div>
                <h1> Understanding</h1>
<form onSubmit={this.thisIsDispatch}>
                <div onChange={this.handleChange}>
                        <div>
                    <label>
                        <input
                            type="radio"
                            value= '1'
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
export default connect(mapReduxStoreToProps)(Checkout);