import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FeedbackReview extends Component {
    state={
        complete: false
    }
    componentDidMount=()=>{
this.checkReview()
    }
    checkReview=()=>{
        if(this.props.reduxStore.feedbackReducer !== {feeling:'', support: '', understanding: '', comments: '',}){
            this.setState({
                ...this.state,
                complete: true
            })

   
    }
 
       
        else{
            this.setState({
                ...this.state,
                complete: false
            })
        }

}

    yeetReview = () => {
        // just like $.ajax()
        axios({
            method: 'POST',
            url: '/feed',
            data: { feeling: this.props.reduxStore.feedbackReducer.feeling, 
                support: this.props.reduxStore.feedbackReducer.support, 
                understanding: this.props.reduxStore.feedbackReducer.understanding, 
                comments: this.props.reduxStore.feedbackReducer.comments}
        }).then((response) => {
           this.props.dispatch({type: 'CLEAR'})
            // response.data will be the array of artists
        });
    }
render(){
    console.log(this.props.reduxStore.feedbackReducer.comments)
    if(this.state.complete == true){
    return(

        <div>
            <ul>
                <li> Feeling {this.props.reduxStore.feedbackReducer.feeling}
                </li>
                <li>
                    Support {this.props.reduxStore.feedbackReducer.support}
                </li>
                <li>
                    Understanding {this.props.reduxStore.feedbackReducer.understanding}
                </li>
                <li>
                    Comments {this.props.reduxStore.feedbackReducer.comments}
                </li>
            </ul>
<button onClick={this.yeetReview}>Submit Review</button>
        </div>
    
    )
}
else if(this.state.complete == false){
    return(
        

            <div>
                <ul>
                    <li> Feeling {this.props.reduxStore.feedbackReducer.feeling}
                    </li>
                    <li>
                        Support {this.props.reduxStore.feedbackReducer.support}
                    </li>
                    <li>
                        Understanding {this.props.reduxStore.feedbackReducer.understanding}
                    </li>
                    <li>
                        Comments {this.props.reduxStore.feedbackReducer.comments}
                    </li>
                </ul>
                
            </div>
    )
}
}
}


const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(FeedbackReview);