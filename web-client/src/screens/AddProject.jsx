import React from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import styled from 'styled-components';
import container from '../components/Container.jsx';

/* UI Components */
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(name, value) {
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    axios
      .post(`http://localhost:8080/start`, { url: this.state.url })
      .then(res => {
        swal('Saved!', 'Your project has been added.', 'success');
      })
      .catch(err => {
        swal(
          'Ops...',
          `${err.message}. Check if commits miner is running correctly.`,
          'error'
        );
      });
    event.preventDefault();
  }
  render() {
    return (
      <Card>
        <CardTitle
          title="Add project"
          subtitle="Remember to use SSH or HTTPS"
        />
        <CardText>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="Insert your URL here"
              name="url"
              onChange={e =>
                this.handleInputChange(e.target.name, e.target.value)
              }
              value={this.state.url}
              fullWidth
            />
            <Button
              label="Save"
              type="submit"
              onClick={() => this.handleSubmit}
              fullWidth
            />
          </form>
        </CardText>
      </Card>
    );
  }
}

const Button = styled(RaisedButton)`
  margin-top: 14px;
`;

export default container(AddProject);
