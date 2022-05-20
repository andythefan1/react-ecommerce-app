import './styles.scss';

/*
  Types of buttons:
  1. default
  2. inverted
  3. google sign-in
*/

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
};

const Button = ({ buttonType, children, ...otherProps }) => {
	return (
		<button
			className={`button-container ${
				buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
			}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
