import { Group, FormInputLabel, Input } from './styles';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group className='group'>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel shrink={otherProps.value.length}>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
