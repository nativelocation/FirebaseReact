import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import GeneralInfo from 'components/GeneralInfo';
import HomeView from 'components/HomeView';

class LocationsManInfo extends Component {
	render() {
		const globalBackComponent = {
			title: false,
			subtitle: false,
			footer: false,
			cardImage: false,
			backTitle: false,
			backImage: true,
		};
		const homeViewComponent = {
			title: true,
			subtitle: true,
			footer: true,
			cardImage: true,
			backTitle: true,
			backImage: true,
		};
		return (
			<div id="locations-man-info" className="Container-box">
				<Grid container spacing={24}>
					<GeneralInfo storeId={this.props.storeId} />
					<HomeView
						title="Home Open View"
						activeComponent={homeViewComponent} />
					<HomeView
						title="Global Background"
						activeComponent={globalBackComponent} />
				</Grid>
			</div>
		);
	}
}

LocationsManInfo.propTypes = {
	storeId: PropTypes.string,
};

LocationsManInfo.defaultProps = {
	storeId: '',
};

export default LocationsManInfo;