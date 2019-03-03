import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
class FeedbackSummary extends Component {




    render() {
        return (


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
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(FeedbackSummary);