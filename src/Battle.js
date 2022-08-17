import Header from "./Header";
import { Link } from "react-router-dom";
import React from "react";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUser1: "",
      inputUser2: "",
      dataUser1: null,
      dataUser2: null,
      isBattle: false,
    };
  }

  fetchUser = (key, username) =>
    this.setState(
      () => ({
        [key]: null,
      }),
      () => {
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              [key]: data,
            });
          });
      }
    );

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isUser1Winner = () => {
    const user1score =
      this.state.dataUser1.followers +
      this.state.dataUser1.following +
      this.state.dataUser1.public_repos;
    const user2score =
      this.state.dataUser2.followers +
      this.state.dataUser2.following +
      this.state.dataUser2.public_repos;

    if (user1score >= user2score) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <>
        <Header />
        {this.state.isBattle ? (
          <div>
            <div className="results">
              <div className="cardWinner">
                <>
                  <h4>{this.isUser1Winner() ? "winner" : "Loser"}</h4>
                  <img
                    src={this.state.dataUser1.avatar_url}
                    alt={this.state.dataUser1.name}
                  />
                  <h2>
                    <a href="#">
                      score:
                      {this.state.dataUser1.followers +
                        this.state.dataUser1.following +
                        this.state.dataUser1.public_repos}
                    </a>
                  </h2>
                  <h3>{this.state.dataUser1.login}</h3>
                  <ul className="card-list">
                    <li>
                      <div>
                        <i className="fa-solid fa-user">
                          <a className="mar-l" href="#">
                            {this.state.dataUser1.name}{" "}
                          </a>
                        </i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-compass"></i>
                        <a href="#">{this.state.dataUser1.location}</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-users"></i>
                        <a href="#">
                          {this.state.dataUser1.followers} followers
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-user-group"></i>{" "}
                        <a href="#">
                          {this.state.dataUser1.following} following
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <small>/</small>
                        <a href="#">
                          {this.state.dataUser1.public_repos} repos
                        </a>
                      </div>
                    </li>
                  </ul>
                </>
              </div>
              <div className="cardWinner">
                <>
                  <h4>{!this.isUser1Winner() ? "winner" : "Loser"}</h4>
                  <img
                    src={this.state.dataUser2.avatar_url}
                    alt={this.state.dataUser2.name}
                  />
                  <h2>
                    <a href="#">
                      score:
                      {this.state.dataUser2.followers +
                        this.state.dataUser2.following +
                        this.state.dataUser2.public_repos}
                    </a>
                  </h2>
                  <h3>{this.state.dataUser2.login}</h3>
                  <ul className="card-list">
                    <li>
                      <div>
                        <i className="fa-solid fa-user">
                          <a className="mar-l" href="#">
                            {this.state.dataUser2.name}{" "}
                          </a>
                        </i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-compass"></i>
                        <a href="#">{this.state.dataUser2.location}</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-users"></i>
                        <a href="#">
                          {this.state.dataUser2.followers} followers
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-user-group"></i>{" "}
                        <a href="#">
                          {this.state.dataUser2.following} following
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <small>/</small>
                        <a href="#">
                          {this.state.dataUser2.public_repos} repos
                        </a>
                      </div>
                    </li>
                  </ul>
                </>
              </div>
            </div>
            <div className="center">
              <button
                className="reset-btn"
                onClick={() =>
                  this.setState({
                    inputUser1: "",
                    inputUser2: "",
                    dataUser1: null,
                    dataUser2: null,
                    isBattle: false,
                  })
                }
                disabled={!this.state.dataUser1 && !this.state.dataUser2}
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="center">
              <h3>Instructions</h3>
              <div className="flex">
                <div>
                  <h4>Enter two Github users</h4>
                  <div className="box">
                    <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>
                <div>
                  <h4>Battle</h4>
                  <div className="box">
                    <i className="fa-solid fa-jet-fighter"></i>
                  </div>
                </div>
                <div>
                  <h4>See the winner</h4>
                  <div className="box">
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <h3 className="mt">Players</h3>
              <form className="flex">
                <fieldset className="playerOne">
                  {this.state.dataUser1 ? (
                    <div className="cardBattle space-bet">
                      <div className="flex jus__center">
                        <img
                          className="small"
                          src={this.state.dataUser1.avatar_url}
                          alt="cat"
                        />
                        <h4>{this.state.dataUser1.login}</h4>
                      </div>

                      <button
                        className="black"
                        onClick={() =>
                          this.setState({
                            dataUser1: null,
                          })
                        }
                      >
                        x
                      </button>
                    </div>
                  ) : (
                    <>
                      <label htmlFor="username">Player One</label>
                      <input
                        onChange={this.handleChange}
                        value={this.inputText}
                        id="username"
                        type="text"
                        name="inputUser1"
                        placeholder="github username"
                      />
                      <input
                        type="submit"
                        placeholder="Submit"
                        onClick={(e) => {
                          e.preventDefault();
                          this.fetchUser("dataUser1", this.state.inputUser1);
                        }}
                      />
                    </>
                  )}
                </fieldset>
                <fieldset className="playerTwo">
                  {this.state.dataUser2 ? (
                    <div className="cardBattle space-bet">
                      <div className="flex jus__center">
                        <img
                          className="small"
                          src={this.state.dataUser2.avatar_url}
                          alt="cat"
                        />
                        <h4>{this.state.dataUser2.login}</h4>
                      </div>

                      <button
                        className="black"
                        onClick={() => {
                          this.setState({
                            dataUser2: null,
                          });
                        }}
                      >
                        x
                      </button>
                    </div>
                  ) : (
                    <>
                      <label htmlFor="username">Player Two</label>
                      <input
                        onChange={this.handleChange}
                        id="username"
                        type="text"
                        name="inputUser2"
                        placeholder="github username"
                      />
                      <input
                        type="submit"
                        placeholder="Submit"
                        onClick={(e) => {
                          e.preventDefault();
                          this.fetchUser("dataUser2", this.state.inputUser2);
                        }}
                      />
                    </>
                  )}
                </fieldset>
              </form>

              <button
                className="battle-btn"
                onClick={() =>
                  this.setState({
                    isBattle: true,
                  })
                }
                disabled={!this.state.dataUser1 && !this.state.dataUser2}
              >
                BATTLE
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Battle;
