import { FormikHelpers, FormikValues, useFormik } from 'formik';
import * as yup from 'yup';
import { FormHandlerReturn, LoginFormI } from '../interfaces/interfaces';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Does not match email format')
		.required('Email is required'),
	password: yup.string().required('Password is required').min(10, 'Too short'),
	remember: yup.boolean(),
});

export const useLoginFormHandler = (): FormHandlerReturn<LoginFormI> => {
	const onSubmit = (
		values: FormikValues,
		actions: FormikHelpers<LoginFormI>,
	) => {
		actions.resetForm();
	};
	const { values, errors, handleSubmit, handleChange, touched } = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: false,
		},
		onSubmit,
		validationSchema: schema,
		validateOnChange: true,
	});
	return { values, errors, handleSubmit, handleChange, touched };
};
