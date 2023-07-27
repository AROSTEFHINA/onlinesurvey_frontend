import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShowRadio.css';

class ShowRadio extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedOptions: {} // Object to store selected options for each question
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/shDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOptionChange = (event, questionId) => {
    const selectedOption = event.target.value;
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        [questionId]: selectedOption // Store the selected option for the corresponding question ID
      }
    }), () => {
      console.log("Selected options:", this.state.selectedOptions);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedOptions } = this.state;
    const selectedOptionsData = Object.keys(selectedOptions).map((questionId) => ({
      questionid: parseInt(questionId),
      selectedoption: selectedOptions[questionId],
    }));

    axios
      .post('http://127.0.0.1:8080/addUserDetails', selectedOptionsData)
      .then((response) => {
        console.log('Selected options submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting selected options:', error);
      });
  };

  render() {
    return (
      
      <div className="saami">
        <h1>
          <center>FEEDBACK_FORM</center>
        </h1>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          {this.state.data.map(user => (
            <div key={user.id} className="question-container">
              <h3>Question {user.id}</h3>
              <p>{user.question}</p>
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option1}
                  checked={this.state.selectedOptions[user.id] === user.option1}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option1}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option2}
                  checked={this.state.selectedOptions[user.id] === user.option2}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option2}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option3}
                  checked={this.state.selectedOptions[user.id] === user.option3}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option3}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`option${user.id}`}
                  value={user.option4}
                  checked={this.state.selectedOptions[user.id] === user.option4}
                  onChange={(event) => this.handleOptionChange(event, user.id)}
                />
                {user.option4}
              </label>
              <br />
            </div>
          ))}

          <button type="submit" className="epa">
            Submit Selected Options
          </button>
        </form>

         
      </div>
  
    );
  }
}

export default ShowRadio;
 