import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Info from './Info';
import Review from './Review';
import Cost from './Cost';

class DevicePhone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
	}

	handleChange = (e, value) => {
		this.setState({ value });
	};

	render() {
		const { value } = this.state;
		const { currentProduct } = this.props;
		return (
			<div
				id="products-man-phone"
				className="Container-box"
				style={{
					background: "url('/assets/images/backgroundHD.png')",
					backgroundSize: 'cover',
					backgroundPositionX: 'center',
				}}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						fullWidth
					>
						<Tab className={value === 0 ? 'info_spec' : ''} label="Info & Specs" />
						<Tab className={value === 1 ? 'reviews' : ''} label="Reviews" />
						<Tab className={value === 2 ? 'cost_plans' : ''} label="Cost & Plans" />
					</Tabs>
				</AppBar>
				{value === 0 &&
					<Typography component="div" style={{ padding: 24, width: '90%' }}>
						<Info product={currentProduct} />
					</Typography>}
				{value === 1 &&
					<Typography component="div" style={{ padding: 24, width: '90%' }}>
						<Review product={currentProduct} />
					</Typography>}
				{value === 2 &&
					<Typography component="div" style={{ padding: 24, width: '90%' }}>
						<Cost product={currentProduct} />
					</Typography>}
			</div>
		);
	}
}

DevicePhone.propTypes = {
	currentProduct: PropTypes.object,
};

DevicePhone.defaultProps = {
	currentProduct: {},
};

export default DevicePhone;