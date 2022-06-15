import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import { AuthenticationContainer } from './styles';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;
