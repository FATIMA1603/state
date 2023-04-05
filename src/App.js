import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'FATIMA BYS',
        bio: 'Full stack developer.',
        imgSrc: 'zel.jpg',
        profession: 'Developer',
      },
      shows: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.shows !== this.state.shows) {
      this.resetTimer();
      this.startTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  //timer

  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }

  resetTimer() {
    this.setState({ elapsedTime: 0 });
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, elapsedTime } = this.state;

    return (
      <div className="container">
        <button className="btn" onClick={() => this.setState({ shows: !shows })}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img className="profile-img" src={imgSrc} alt={fullName} />
            <h1 className="profile-name">{fullName}</h1>
            <h2 className="profile-title">{profession}</h2>
            <p className="profile-bio">{bio}</p>
          </div>
        )}

        <p className="elapsed-time">Elapsed Time: {elapsedTime}s</p>
      </div>
    );
  }
}

export default App;
