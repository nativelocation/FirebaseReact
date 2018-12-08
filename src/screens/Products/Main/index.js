import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import ProductPreview from '../Components/ProductPreview';
import ProductImport from '../Components/ProductImport';
import InputEvent from 'components/InputEvent';
import TableList from 'components/TableList';
import HomeView from 'components/HomeView';

import { getProducts, getSubCollection } from 'redux/firebase/actions';
import { productsSelector } from 'redux/firebase/selectors';

class ProductsMain extends InputEvent {
	constructor(props) {
		super(props);
		this.state = {
			currentProduct: {},
			currentProductIndex: '',
			addProductEnable: false,
			editProductEnable: false,
			editProductIndex: '',
		};
	}

	componentDidMount() {
		this.props.getProducts();
	}

	// handleOnClick = (row) => {
	// 	this.props.getSubCollection('products', row.fbId, 'web-reviews');
	// 	// const type = row.subType === 'watch_tv' || row.subType === 'watch_tv' || row.subType === 'watch_tv' ? 'services' : 'devices';
	// 	this.props.history.push(`/products/manage/${row._original.type}/${row.subType}/${row.fbId}`);
	// }

	handleCatalogClick = (row, index) => {
		this.setState({
			currentProduct: row._original,
			currentProductIndex: index,
			addProductEnable: false,
			editProductEnable: false,
			editProductIndex: '',
		});
	}

	handleEditProduct = () => {
		// this.props.history.push(`/products/manage/${row._original.type}/${row.subType}/${row.fbId}`);
		this.setState({
			editProductEnable: true,
			editProductIndex: this.state.currentProductIndex,
		});
	}

	updateRowStyle = (state, rowInfo) => ({
		style: {
			background: rowInfo && rowInfo.index === this.state.currentProductIndex ? 'green' : null,
		},
	});

	render() {
		const { currentProduct, editProductEnable, editProductIndex } = this.state;
		const { catalogProducts } = this.props;
		const categoryProductsColumn = [
			{
				Header: () => this.renderHeader('Model'),
				Cell: ({ row, index }) => this.renderCell(row.model, () => this.handleCatalogClick(row, index)),
				accessor: 'model',
			},
			{
				Header: () => this.renderHeader('Manufacture'),
				Cell: ({ row, index }) => this.renderCell(row.manufacture, () => this.handleCatalogClick(row, index)),
				accessor: 'manufacture',
			},
			{
				Header: () => this.renderHeader('ID'),
				Cell: ({ row, index }) => this.renderCell(row.fbId, () => this.handleCatalogClick(row, index)),
				accessor: 'fbId',
			},
			{
				Header: () => this.renderHeader('Type'),
				Cell: ({ row, index }) => this.renderCell(row.type, () => this.handleCatalogClick(row, index)),
				accessor: 'type',
			},
			{
				Header: () => this.renderHeader('SubType'),
				Cell: ({ row, index }) => this.renderCell(row.subType, () => this.handleCatalogClick(row, index)),
				accessor: 'subType',
			},
		];
		const cardProductComponent = {
			title: true,
			subtitle: true,
			footer: true,
			cardImage: false,
			backTitle: false,
			backImage: true,
		};
		return (
			<div id="locations-add" className="Container-box">
				<Card className="card-box">
					<CardContent className="left-border-green">
						<Grid container spacing={24}>

							{this.renderGrid('white',
								<TableList
									columns={categoryProductsColumn}
									tables={catalogProducts}
									pageSize={10}
									showPagination
									label="Products Catalog"
									editbtnTooltip="Edit Product"
									editbtn
									addbtnTooltip="Add Product"
									addbtn
									searchEnable
									handleEdit={this.handleEditProduct}
									handleAdd={this.handleAddProduct}
									updateRowStyle={this.updateRowStyle} />)}

							{editProductEnable &&
								editProductIndex !== '' &&
								(currentProduct.type === 'service' || currentProduct.type === 'device') &&
								this.renderGrid('dark-blue', <ProductImport />)}

							{editProductEnable &&
								editProductIndex !== '' &&
								(currentProduct.type === 'service' || currentProduct.type === 'device') &&
								this.renderGrid('dark-blue',
									<HomeView
										title="Product Card"
										activeComponent={cardProductComponent}
										prevbtn
										savebtn
										importbtn
										archbtn
										handlePreview={this.handleTitlePreview}
										handleSave={this.handleTitleSave}
										handleImport={this.handleTitleImport}
										handleArchive={this.handleTitleArchive} />)}

							{editProductEnable &&
								editProductIndex !== '' &&
								(currentProduct.type === 'service' || currentProduct.type === 'device') &&
								this.renderGrid('dark-blue', <ProductPreview currentProduct={currentProduct} />)}

						</Grid>
					</CardContent>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	catalogProducts: productsSelector(state),
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => dispatch(getProducts()),
	getSubCollection: (parent, id, child) => dispatch(getSubCollection(parent, id, child)),
});

ProductsMain.propTypes = {
	catalogProducts: PropTypes.array.isRequired,
	getProducts: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsMain);
