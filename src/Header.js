import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
			<div>
				<ul>
					<li><Link to="/">home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>
    );
  }
}
