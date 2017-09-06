import React from 'react';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
      event.preventDefault();
      var item = {
        name: this.name.value,
        date: this.date.value,
        comment: this.comment.value
      }
      this.props.dispatch(actions.postComments(item))
      this.answerForm.reset();
    }
    componentDidMount() {
      this.props.dispatch(actions.fetchComments());
    }
    render() {
        console.log(this.props.posts)
        return (
          <div className='program-info row'>
          <div className='aux-pic-text col-11'>
           <p className='aux-pic-text'>Like my Lego Site? Comment here on what you like</p>
          </div>
          <div className='comment-form col-11'>
           <form onSubmit={this.onSubmit} ref={ref => this.answerForm = ref}>>
            <input ref={ref => this.name = ref} className='top-two-input' placeholder='please enter name here'></input>
            <input ref={ref => this.date = ref} className='top-two-input' type='date'></input>
            <textarea ref={ref => this.comment = ref} placeholder='submit comments about the site here' className='comment-text-box'></textarea>
            <button className='comment-form-submit'>Submit Comment</button>
            </form>
          </div>
          </div>
      )
    }
}
const mapStateToProps = (state, props) => ({
    posts: state.posts
})

export default connect(mapStateToProps)(Comments)
