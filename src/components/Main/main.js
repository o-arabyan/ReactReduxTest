import React from "react";
import axios from "axios";
import CustomModal from "../CustomModal/index";
import ClassicSpinner from "../ClassicSpinner/classic";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import * as actionCreators from "../../actions/index";
import { connect } from "react-redux";

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filterData: [],
      userInfo: {},
      show: false,
      loading: false,
      loadCount: 50,
      offsetLoadCount: 50,
      limitLoadCount: 1000,
      showEnd: false,
      showNoData: false
    };

    this.filterUsers = this.filterUsers.bind(this);
    this.userClick = this.userClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    window.addEventListener("scroll", this.handleScroll);
  }

  getData() {
    const self = this;
    const { loadCount } = this.state;
    const { nat } = this.props;

    axios.interceptors.request.use(
      function(config) {
        self.setState({
          loading: true
        });
        return config;
      },
      function(error) {
        console.error(error);
      }
    );

    this.props.getData(loadCount, nat).then(data => {
      self.setState({
        users: self.props.users,
        loading: false
      });
    });
  }

  filterUsers(e) {
    let { users } = this.state;
    let showNoData = null;

    let filteredUsers = users.filter(user => {
      user.fullName =
        user.name.first.toLowerCase() + user.name.last.toLowerCase();
      return (
        user.fullName.indexOf(e.target.value.toLowerCase().replace(" ", "")) !==
        -1
      );
    });

    showNoData = e.target.value && !filteredUsers.length ? true : false;

    this.setState({
      filterData: filteredUsers,
      showNoData: showNoData
    });
  }

  userClick(e, id) {
    let { users, filterData } = this.state;
    let user = filterData.length ? filterData[id] : users[id];
    this.setState({
      show: true,
      userInfo: {
        locationStreet: user.location.street,
        locationCity: user.location.city,
        locationState: user.location.state,
        locationPostCode: user.location.postcode,
        phone: user.phone,
        cell: user.cell
      }
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleScroll = () => {
    let isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    let { loading } = this.state;

    if (!isBottom || loading) {
      return;
    }

    let { loadCount, offsetLoadCount, limitLoadCount } = this.state;

    if (loadCount >= limitLoadCount) {
      this.setState({
        showEnd: true
      });

      return;
    }

    this.setState({
      loadCount: loadCount + offsetLoadCount
    });

    this.getData();
  };

  render() {
    const {
      filterData,
      show,
      userInfo,
      loading,
      showEnd,
      showNoData
    } = this.state;

    const { users } = this.props;
    let data = filterData.length || showNoData ? filterData : users;
    return (
      <div className="container-fluid">
        <div className="row bg-primary d-flex justify-content-around sticky-top">
          <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="md-form my-0">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={e => this.filterUsers(e)}
                />
              </div>
            </div>
            <Link to={"/Settings"}>
              <button
                className="btn btn-primary ml-5"
                onClick={this.handleClick}
              >
                <FaCog size={"2rem"} />
              </button>
            </Link>
          </nav>
        </div>
        <div className="row">
          <table className="table table-hover mt-4">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Nationality</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user, key) => {
                  return (
                    <tr key={key} onClick={e => this.userClick(e, key)}>
                      <td width="80px">
                        <img src={user.picture.thumbnail} alt="" />
                      </td>
                      <td>{user.name.first}</td>
                      <td>{user.name.last}</td>
                      <td>{user.login.username}</td>
                      <td>{user.email}</td>
                      <td>{user.nat}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <h5 className="w-100 text-center text-muted">
            {showNoData ? "No Data" : ""}
          </h5>
        </div>
        <CustomModal
          handleClose={this.handleClose}
          show={show}
          userInfo={userInfo}
        />
        <div
          style={{
            position: "fixed",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <ClassicSpinner size={80} color="#686769" loading={loading} />
        </div>

        <h5 className="text-center text-muted">
          {showEnd ? "End of users catalog" : ""}
        </h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    nat: state.nat
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(Main);
