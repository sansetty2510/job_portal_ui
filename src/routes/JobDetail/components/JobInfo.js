import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardText, Col, Button } from 'reactstrap'
import { NotificationManager} from 'react-notifications';

const JobInfo = (props) =>{
    const applyJob = () => {
        NotificationManager.success('You Successfully applied for this Job');
    }
    return(
        <Col sm='12'>
            <Card body>
              <CardTitle>Job Name: {props.job.title}</CardTitle>
              <CardText>Skill Name : {props.job.skills}</CardText>
              <CardText>Description : {props.job.description}</CardText>
              <CardText>Employment Type : {props.job.employment_type}</CardText>
              <Button color='primary' type="button" onClick={()=>applyJob()}>Apply</Button>
            </Card>
          </Col>
    )

}

JobInfo.propTypes = {
    job: PropTypes.object.isRequired
  }
export default JobInfo