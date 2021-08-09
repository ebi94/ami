import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Row, Col, Spin } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { FormTitle } from './AccountSettings.style';
import { AuthContext } from 'context/AuthProvider';

export default function PaymentSetting() {
    const { control, errors, watch, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const { editPassword } = useContext(AuthContext);

    const dataU = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(dataU);
    const [loading, setLoading] = useState(false);
    const onSubmit = (data) => {
        setLoading(true)
        const email = dataUser && dataUser.email;
        editPassword(email, data);
    };

    return (
        <>
            <FormTitle>Payment Setting</FormTitle>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                    <Col lg={12}>
                        <FormControl
                            label="Bank Name"
                            htmlFor="BankName"
                            error={errors.BankName && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue=""
                                control={control}
                                id="BankName"
                                name="BankName"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={12}>
                        <FormControl
                            label="Bank Number"
                            htmlFor="BankNumber"
                            error={errors.BankNumber && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue=""
                                control={control}
                                id="BankNumber"
                                name="BankNumber"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={12}>
                        <FormControl
                            label="BankCode"
                            htmlFor="text"
                            error={errors.BankCode && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue=""
                                control={control}
                                id="BankCode"
                                name="BankCode"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={12}>
                        <FormControl
                            label="CIF Code"
                            htmlFor="CIFCode"
                            error={errors.CIFCode && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue=""
                                control={control}
                                id="CIFCode"
                                name="CIFCode"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={24}>
                        <FormControl
                            label="Full Name"
                            htmlFor="FullName"
                            error={errors.FullName && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue=""
                                control={control}
                                id="FullName"
                                name="FullName"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={24}>
                        <div className="submit-container">
                            <Button htmlType="submit" type="primary" style={{ minWidth: 150 }}>
                                {loading ? (<Spin size="default" />) : "Save Changes"}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </form>
        </>
    );
}
