import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Row, Col, Spin } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import { FormTitle } from './AccountSettings.style';
import { AuthContext } from 'context/AuthProvider';

export default function PaymentSetting() {
    const { control, errors, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const { editPayment } = useContext(AuthContext);

	const data = JSON.parse(localStorage.getItem('dataUser'));

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true)
        const id = localStorage.getItem('id');
        editPayment(id, data);
    };

    return (
        <>
            <FormTitle>Payment Setting</FormTitle>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                    <Col lg={12}>
                        <FormControl
                            label="Bank Name"
                            htmlFor="bankName"
                            error={errors.bankName && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue={data && data.bankName}
                                control={control}
                                id="bankName"
                                name="bankName"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={12}>
                        <FormControl
                            label="Bank Number"
                            htmlFor="bankNumber"
                            error={errors.bankNumber && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue={data && data.bankNumber}
                                control={control}
                                id="bankNumber"
                                name="bankNumber"
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </Col>
                    <Col lg={24}>
                        <FormControl
                            label="Full Name"
                            htmlFor="bankFullName"
                            error={errors.bankFullName && <span>This field is required!</span>}
                        >
                            <Controller
                                as={<Input />}
                                defaultValue={data && data.bankFullName}
                                control={control}
                                id="bankFullName"
                                name="bankFullName"
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
