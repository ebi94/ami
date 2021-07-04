import React, { Fragment, useContext, useState } from 'react';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Select, Button, Spin } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import DatePicker from 'components/UI/AntdDatePicker/AntdDatePicker';
import { FormTitle } from './AccountSettings.style';
import { AuthContext } from 'context/AuthProvider';

export default () => {
	const { control, errors, handleSubmit } = useForm();
	const { editProfile } = useContext(AuthContext);
	const dataU = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(dataU);

	const dateFormat = 'YYYY-MM-DD';

	const [loading, setLoading] = useState(false);

	const genderOptions = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' }
	];

	const onSubmit = (data) => {
		setLoading(true)
		const id = localStorage.getItem('id');
		editProfile(id, data);
	};

	return (
		<Fragment>
			<FormTitle>Basic Information</FormTitle>
			<form className="form-container" onSubmit={handleSubmit(onSubmit)}>
				<Row gutter={30}>
					<Col lg={12}>
						<FormControl
							label="First name"
							htmlFor="firstName"
							error={errors.firstName && <span>This field is required!</span>}
						>
							<Controller
								as={<Input />}
								id="firstName"
								name="firstName"
								defaultValue={dataUser.firstName}
								control={control}
								rules={{ required: true }}
								disabled={loading}
							/>
						</FormControl>
					</Col>
					<Col lg={12}>
						<FormControl
							label="Last name"
							htmlFor="lastName"
							error={errors.lastName && <span>This field is required!</span>}
						>
							<Controller
								as={<Input />}
								id="lastName"
								name="lastName"
								defaultValue={dataUser.lastName}
								control={control}
								rules={{ required: true }}
								disabled={loading}
							/>
						</FormControl>
					</Col>
				</Row>
				<Row gutter={30}>
					<Col lg={12}>
						<FormControl
							label="Date of birth"
							htmlFor="dateOfBirthday"
							error={
								errors.dateOfBirthday && <span>This field is required!</span>
							}
						>
							<Controller
								as={<DatePicker />}
								id="dateOfBirthday"
								name="dateOfBirthday"
								defaultValue={moment(dataUser.dateOfBirthday, dateFormat)} format={dateFormat}
								control={control}
								rules={{ required: true }}
								disabled={loading}
							/>
						</FormControl>
					</Col>
					<Col lg={12}>
						<FormControl
							label="I am"
							htmlFor="agentGender"
							error={
								errors.agentGender && <span>This field is required!</span>
							}
						>
							<Controller
								as={<Select options={genderOptions} />}
								id="agentGender"
								name="agentGender"
								defaultValue={dataUser.gender}
								control={control}
								rules={{ required: true }}
								disabled={loading}
							/>
						</FormControl>
					</Col>
				</Row>
				<Row gutter={30}>
					<Col lg={12}>
						<FormControl
							label="Email address"
							htmlFor="email"
							error={
								errors.email && (
									<>
										{errors.email?.type === 'required' && (
											<span>This field is required!</span>
										)}
										{errors.email?.type === 'pattern' && (
											<span>Please enter a valid email address!</span>
										)}
									</>
								)
							}
						>
							<Controller
								as={<Input />}
								type="email"
								id="email"
								name="email"
								defaultValue={dataUser.email}
								control={control}
								rules={{
									required: true,
									pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
								}}
								disabled={loading}
							/>
						</FormControl>
					</Col>
					<Col lg={12}>
						<FormControl
							label="Phone number"
							htmlFor="phoneNumber"
							error={
								errors.phoneNumber && (
									<>
										{errors.phoneNumber?.type === 'required' && (
											<span>This field is required!</span>
										)}
										{errors.phoneNumber?.type === 'pattern' && (
											<span>Please enter your valid number!</span>
										)}
									</>
								)
							}
						>
							<Controller
								as={<Input />}
								id="phoneNumber"
								name="phoneNumber"
								defaultValue={dataUser.phone}
								control={control}
								rules={{
									required: true,
									pattern: /^[0-9]*$/,
								}}
								disabled={loading}
							/>
						</FormControl>
					</Col>
					<Col lg={24}>
						<FormControl
							label="Where you live"
							htmlFor="address"
							error={errors.address && <span>This field is required!</span>}
						>
							<Controller
								as={<Input />}
								id="address"
								name="address"
								defaultValue={dataUser.address}
								control={control}
								rules={{ required: true }}
								disabled={loading}
							/>
						</FormControl>
					</Col>
					<Col lg={24}>
						<FormControl
							label="Describe Yourself (Optional)"
							htmlFor="describeYourself"
						>
							<Controller
								as={<Input.TextArea rows={5} />}
								id="describeYourself"
								name="describeYourself"
								defaultValue={dataUser.describeProfile}
								control={control}
								disabled={loading}
							/>
						</FormControl>
					</Col>
				</Row>
				<div className="submit-container">
					<Button htmlType="submit" type="primary" style={{ minWidth: 120 }}>
						{loading ? (<Spin size="default" />) : "Save Changes"}
					</Button>
				</div>
			</form>
		</Fragment>
	);
};
