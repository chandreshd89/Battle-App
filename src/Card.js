import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      count: 0,
    };
  }

  fetchUser = () =>
    this.setState(
      () => ({
        data: null,
      }),
      () => {
        fetch(
          `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.props.activeLanguage}&sort=stars&order=desc&type=Repositories`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(
              this.setState({
                data,
              })
            );
          });
      }
    );

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeLanguage !== this.props.activeLanguage) {
      this.fetchUser();
    }
  }

  render() {
    if (!this.state.data) {
      return (
        <div className="loading-container">
          <span className="loader"></span>{" "}
        </div>
      );
    }

    return (
      <>
        <div className="flex">
          {this.state.data.items.map((user, i) => {
            return (
              <div className="card">
                <>
                  <h4>#{i + 1}</h4>
                  <img src={user.owner.avatar_url} alt={user.name} />
                  <h2>
                    <a href="#">{user.name}</a>
                  </h2>
                  <ul className="card-list">
                    <li>
                      <div>
                        <i className="fa-solid fa-user">
                          <a className="mar-l" href="#">
                            freeCodeCamp
                          </a>
                        </i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-star"></i>
                        <a href="#">{user.stargazers_count} stars</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-code-branch"></i>{" "}
                        <a href="#">{user.forks_count} forks</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                        <a href="#">{user.open_issues_count} open issues</a>
                      </div>
                    </li>
                  </ul>
                </>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Card;
