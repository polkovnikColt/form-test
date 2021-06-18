import React, { ChangeEvent } from 'react';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { LoginFormI } from '../../../interfaces/interfaces';
import { Input } from '../../../components/input/Input';
import { Button } from '../../../components/button/Button';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { Label } from '../../../components/label/Label';

type FormProps = {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	values: FormikValues;
	errors: FormikErrors<LoginFormI>;
	touched: FormikTouched<LoginFormI>;
};

export const LoginForm: React.FC<FormProps> = ({
	handleChange,
	touched,
	values,
	errors,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Input
				placeholder="Email"
				type="text"
				name="email"
				value={values.email}
				onChange={handleChange}
				error={(touched.email && errors.email) || ''}
			/>
			<Input
				placeholder="Password"
				type="text"
				name="password"
				value={values.password}
				onChange={handleChange}
				error={(touched.password && errors.password) || ''}
			/>
			<div className="text-center my-small">
				<Label size="small" path="/" isLink>
					Forgot password?
				</Label>
			</div>
			<Checkbox
				value={values.remember}
				label="Remember me"
				className="my-medium"
				name="remember"
				handleChange={handleChange}
			/>
			<Button buttonStyle="common" type="submit" className="w-100 my-medium">
				Continue
			</Button>
		</form>
	);
};
