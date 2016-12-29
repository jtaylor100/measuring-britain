import React, { Component } from 'react'

class NavbarDynamicComponent extends Component {

	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		const { onToggleNav, navVisibility } = this.props;
		let navState = navVisibility === 'OPEN' ? 'ClOSED' : 'OPEN';
		onToggleNav(navState);
	}

	render() {

		return (
			<div>
				<div 
					className={`navbar-icon hidden-sm-up ${this.props.navVisibility === 'OPEN' ? 'icon-open' : ''}`} 
					onClick={this.toggleNav}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`off-canvas bg-white ${this.props.navVisibility === 'OPEN' ? 'open' : ''}`}>
					<ul>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
					</ul>
				</div>
			</div>
		)

	}

}

NavbarDynamicComponent.propTypes = {
	onToggleNav: React.PropTypes.func.isRequired,
	navVisibility: React.PropTypes.string.isRequired
};

export default NavbarDynamicComponent;