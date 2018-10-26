import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

import InputEvent from 'components/InputEvent';
import SearchList from 'components/SearchList';
import Table from 'components/Table';

import { getUsers, getLocations } from 'redux/firebase/actions';
import { usersSelector, locationsSelector } from 'redux/firebase/selectors';

class Managers extends InputEvent {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      tables: [],
      columns: [
        {
          Header: () => (
            <div>
              <span>email</span>
            </div>
          ),
          accessor: 'email',
          width: 200,
        },
        {
          Header: () => (
            <div>
              <span>name</span>
            </div>
          ),
          accessor: 'email',
          width: 200,
        },
        {
          Header: () => (
            <div>
              <span>user type</span>
            </div>
          ),
          accessor: 'email',
          width: 200,
        },
      ],
    };
  }

  render() {
    const { tables, columns } = this.state;
    return (
      <Grid item xs={12}>
        <div className="border-shadow">
          <Grid container>
            <SearchList
              columns={columns}
              tables={tables}
              label="Add Managers / Users to location" />
            <Grid item xs={12}>
              <div className="sub-container">
                <FormLabel component="legend">Managers / Users added to location</FormLabel>
                <FormGroup>
                  <Table tables={tables} columns={columns} />
                </FormGroup>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelector(state),
  locations: locationsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getLocations: () => dispatch(getLocations()),
});

Managers.propTypes = {
  users: PropTypes.array,
  locations: PropTypes.array,
  getUsers: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
};

Managers.defaultProps = {
  users: [],
  locations: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Managers);