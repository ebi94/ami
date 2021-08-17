import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'components/UI/Image/Image';
import { Button, Spin } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import { AgentPictureUploader, FormTitle } from './AccountSettings.style';
import { AuthContext } from 'context/AuthProvider';
import imageEmpty from 'assets/images/images-empty.png'

export default function AgentUploadDocumentForm() {
    const [loadingKtp, setLoadingKtp] = useState(false);
    const [loadingNpwp, setLoadingNpwp] = useState(false);
    const [loadingPassport, setLoadingPassport] = useState(false);
    const [loadingIqoma, setLoadingIqoma] = useState(false);
    const [loadingBPJS, setLoadingBPJS] = useState(false);

    const [selectedFilesKtp, setSelectedFilesKtp] = useState(undefined);
    const [selectedFilesNpwp, setSelectedFilesNpwp] = useState(undefined);
    const [selectedFilesPassport, setSelectedFilesPassport] = useState(undefined);
    const [selectedFilesIqoma, setSelectedFilesIqoma] = useState(undefined);
    const [selectedFilesBPJS, setSelectedFilesBPJS] = useState(undefined);


    const selectFileKtp = (event) => {
        setSelectedFilesKtp(event.target.files);
    };

    const selectFileNpwp = (event) => {
        setSelectedFilesNpwp(event.target.files);
    };

    const selectFilePassport = (event) => {
        setSelectedFilesPassport(event.target.files);
    };

    const selectFileIqoma = (event) => {
        setSelectedFilesIqoma(event.target.files);
    };

    const selectFileBPJS = (event) => {
        setSelectedFilesBPJS(event.target.files);
    };



    const { uploadKtp, uploadNpwp, uploadBPJS, uploadIqoma, uploadPassport } = useContext(AuthContext);

    const { control, errors, watch, handleSubmit } = useForm({
        mode: 'onChange',
    });

    const baseUrl = process.env.REACT_APP_BACKEND_API

    const dataU = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(dataU);
    const id = dataUser && dataUser.id;
    console.log('id', id)
    const imageKTP = dataUser && dataUser.ktpUrl ? `${baseUrl}/images/ktp/${dataUser.ktpUrl}` : imageEmpty;
    const imageNPWP = dataUser && dataUser.npwpUrl ? `${baseUrl}/images/npwp/${dataUser.npwpUrl}` : imageEmpty;
    const imageBPJS = dataUser && dataUser.bpjsUrl ? `${baseUrl}/images/bpjs/${dataUser.bpjsUrl}` : imageEmpty;
    const imageIqoma = dataUser && dataUser.iqomaUrl ? `${baseUrl}/images/iqoma/${dataUser.iqomaUrl}` : imageEmpty;
    const imagePassport = dataUser && dataUser.passportUrl ? `${baseUrl}/images/passport/${dataUser.passportUrl}` : imageEmpty;

    const onSubmitKtp = (data) => {
        if (selectedFilesKtp !== undefined) {
            let currentFile = selectedFilesKtp[0];
            setLoadingKtp(true);
            uploadKtp(id, currentFile);
        }
    };

    const onSubmitNpwp = (data) => {
        if (selectedFilesNpwp !== undefined) {
            let currentFile = selectedFilesNpwp[0];
            setLoadingNpwp(true);
            uploadNpwp(id, currentFile);
        }
    };

    const onSubmitPassport = (data) => {
        if (selectedFilesPassport !== undefined) {
            let currentFile = selectedFilesPassport[0];
            setLoadingPassport(true);
            uploadPassport(id, currentFile);
        }
    };

    const onSubmitIqoma = (data) => {
        if (selectedFilesIqoma !== undefined) {
            let currentFile = selectedFilesIqoma[0];
            setLoadingIqoma(true);
            uploadIqoma(id, currentFile);
        }
    };

    const onSubmitBPJS = (data) => {
        if (selectedFilesBPJS !== undefined) {
            let currentFile = selectedFilesBPJS[0];
            setLoadingBPJS(true);
            uploadBPJS(id, currentFile);
        }
    };


    return (
        <AgentPictureUploader>
            <FormTitle>Upload Document</FormTitle>
            <Heading content="KTP" as="h4" />
            <Image src={imageKTP} alt="KTP" style={{ maxWidth: '65%' }} />
            <form className="form-container" onSubmit={handleSubmit(onSubmitKtp)} style={{ marginBottom: 10, marginTop: 25 }}>
                <input
                    type="file"
                    name="imagektp"
                    id="imagektp"
                    class="form-control-file border"
                    onChange={selectFileKtp}
                />
                <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
                    {loadingKtp ? <Spin size="default" /> : "Upload KTP"}
                </Button>
            </form>
            <Heading content="- Maks 5 mb" as="h5" />
            <Heading content="- Hanya Gambar (JPG, JPEG, PNG, GIF)" as="h5" />
            <div style={{ marginBottom: 45 }} />

            <Heading content="Passport" as="h4" />
            <Image src={imagePassport} alt="Passport" style={{ maxWidth: '65%' }} />
            <form className="form-container" onSubmit={handleSubmit(onSubmitPassport)} style={{ marginBottom: 10, marginTop: 25 }}>
                <input
                    type="file"
                    name="imagePassport"
                    id="imagePassport"
                    class="form-control-file border"
                    onChange={selectFilePassport}
                />
                <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
                    {loadingPassport ? <Spin size="default" /> : "Upload Passport"}
                </Button>
            </form>
            <Heading content="- Maks 5 mb" as="h5" />
            <Heading content="- Hanya Gambar (JPG, JPEG, PNG, GIF)" as="h5" />
            <div style={{ marginBottom: 45 }} />

            <Heading content="Iqoma" as="h4" />
            <Image src={imageIqoma} alt="Iqoma" style={{ maxWidth: '65%' }} />
            <form className="form-container" onSubmit={handleSubmit(onSubmitIqoma)} style={{ marginBottom: 10, marginTop: 25 }}>
                <input
                    type="file"
                    name="imageIqoma"
                    id="imageIqoma"
                    class="form-control-file border"
                    onChange={selectFileIqoma}
                />
                <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
                    {loadingIqoma ? <Spin size="default" /> : "Upload Iqoma"}
                </Button>
            </form>
            <Heading content="- Maks 5 mb" as="h5" />
            <Heading content="- Hanya Gambar (JPG, JPEG, PNG, GIF)" as="h5" />
            <div style={{ marginBottom: 45 }} />

            <Heading content="NPWP" as="h4" />
            <Image src={imageNPWP} alt="NPWP" style={{ maxWidth: '65%' }} />
            <form className="form-container" onSubmit={handleSubmit(onSubmitNpwp)} style={{ marginBottom: 10, marginTop: 25 }}>
                <input
                    type="file"
                    name="imagenpwp"
                    id="imagenpwp"
                    class="form-control-file border"
                    onChange={selectFileNpwp}
                />
                <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
                    {loadingNpwp ? <Spin size="default" /> : "Upload NPWP"}
                </Button>
            </form>
            <Heading content="- Maks 5 mb" as="h5" />
            <Heading content="- Hanya Gambar (JPG, JPEG, PNG, GIF)" as="h5" />
            <div style={{ marginBottom: 45 }} />

            <Heading content="BPJS" as="h4" />
            <Image src={imageBPJS} alt="BPJS" style={{ maxWidth: '65%' }} />
            <form className="form-container" onSubmit={handleSubmit(onSubmitBPJS)} style={{ marginBottom: 10, marginTop: 25 }}>
                <input
                    type="file"
                    name="imageBPJS"
                    id="imageBPJS"
                    class="form-control-file border"
                    onChange={selectFileBPJS}
                />
                <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
                    {loadingBPJS ? <Spin size="default" /> : "Upload BPJS"}
                </Button>
            </form>
            <Heading content="- Maks 5 mb" as="h5" />
            <Heading content="- Hanya Gambar (JPG, JPEG, PNG, GIF)" as="h5" />
            <div style={{ marginBottom: 45 }} />

        </AgentPictureUploader>
    );
}
