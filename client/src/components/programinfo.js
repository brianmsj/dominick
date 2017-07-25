import React from 'react';
import {Link} from 'react-router-dom';


class ProgramInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='program-info row'>
          <div className='slogan-info col-11'>
            <p className='slogan-guarantee'>Our career program will get you a job as a Developer, guaranteed.</p>
            <Link to={'/program'}><button className='btn btn-primary'>Learn More Here</button></Link>
          </div>
          <div className='program-info-container col-5'>
           <p className='program-text'>In 2012, only 2,000 students graduated from coding bootcamps. In 2017, over 20,000 student graduated from coding bootcamps.
           The competition is stronger than ever and face it, bootcamps are better at teaching students coding rather than finding a job.
           </p>
          </div>
          <div className='program-info-container col-5'>
           <p className='program-text'>Our job search methods are proven, with some of our previous students landing developer jobs within 6 weeks of joining our program.
              We believe in our methods so strongly, that if you do not get a job within 5 months of working with our mentors, we will refund your money.
              To read more about the program click here.
           </p>
          </div>
        </div>
      )
    }
}

export default ProgramInfo;
