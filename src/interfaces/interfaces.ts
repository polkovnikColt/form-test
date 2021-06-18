import React from 'react';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';

export interface LoginFormI {
	email: string;
	password: string;
	remember: boolean;
}

export interface FormHandlerReturn<T> {
	values: FormikValues;
	errors: FormikErrors<T>;
	touched: FormikTouched<T>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
