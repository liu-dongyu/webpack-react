import footerStyles from 'footer/footer.scss'
import React from 'react'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={footerStyles.footer}>I am a footer</footer>
		)
	}
}