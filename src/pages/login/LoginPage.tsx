import React from 'react';
import { Label } from '../../components/label/Label';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button/Button';
import { Divider } from '../../components/divider/Divider';
import { LoginForm } from './components/LoginForm';
import { useLoginFormHandler } from '../../hooks/useLoginFormHandler';
import googleIcon from '../../assets/google.svg';
import microsoftIcon from '../../assets/microsoft.svg';

export const LoginPage: React.FC = () => {
	const { errors, handleChange, handleSubmit, touched, values } =
		useLoginFormHandler();

	return (
		<div className="row w-100 h-100 justify-center p-small">
			<Card>
				<div className="text-center">
					<Label size="medium">Log in</Label>
				</div>
				<div className="row justify-center my-medium">
					<Label size="small">Dont have an account?</Label>
					<Label size="small" path="/" isLink>
						Sign up
					</Label>
				</div>
				<Button buttonStyle="icon" className="w-100 my-small" icon={googleIcon}>
					Continue with Google
				</Button>
				<Button
					buttonStyle="icon"
					className="w-100 my-small"
					icon={microsoftIcon}
				>
					Continue with Microsoft
				</Button>
				<Divider text="or" />
				<LoginForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					values={values}
					errors={errors}
					touched={touched}
				/>
			</Card>
		</div>
	);
};
