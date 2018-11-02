import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import GeneralInfo from 'components/GeneralInfo';
import HomeView from 'components/HomeView';
import InputEvent from 'components/InputEvent';

class LocationsManInfo extends InputEvent {
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
					{this.renderGrid('orange', <GeneralInfo storeId={this.props.storeId} />)}
					{this.renderGrid('orange',
						<HomeView
							title="Home Open View"
							activeComponent={homeViewComponent} />)}
					{this.renderGrid('orange',
						<HomeView
							title="Global Background"
							activeComponent={globalBackComponent} />)}
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
