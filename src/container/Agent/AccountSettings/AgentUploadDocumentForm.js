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

  const [selectedFilesKtp, setSelectedFilesKtp] = useState(undefined);
  const [selectedFilesNpwp, setSelectedFilesNpwp] = useState(undefined);


  const selectFileKtp = (event) => {
    setSelectedFilesKtp(event.target.files);
  };

  const selectFileNpwp = (event) => {
    setSelectedFilesNpwp(event.target.files);
  };

  const { uploadKtp, uploadNpwp } = useContext(AuthContext);

  const { control, errors, watch, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const baseUrl = process.env.REACT_APP_BACKEND_API

  const dataU = localStorage.getItem('dataUser');
  const dataUser = JSON.parse(dataU);
  const id = dataUser && dataUser.id;
  const imageKTP = dataUser && dataUser.ktpUrl ? `${baseUrl}/images/ktp/${dataUser.ktpUrl}` : imageEmpty;
  const imageNPWP = dataUser && dataUser.npwpUrl ? `${baseUrl}/images/npwp/${dataUser.npwpUrl}` : imageEmpty;

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


  return (
    <AgentPictureUploader>
      <FormTitle>Upload Document</FormTitle>
      <Heading content="KTP" as="h4" />
      <Image src={imageKTP} alt="KTP" />
      <form className="form-container" onSubmit={handleSubmit(onSubmitKtp)} style={{ marginBottom: 50, marginTop: 25 }}>
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

      <Heading content="NPWP" as="h4" />
      <Image src={imageNPWP} alt="NPWP" />
      <form className="form-container" onSubmit={handleSubmit(onSubmitNpwp)} style={{ marginBottom: 50, marginTop: 25 }}>
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

    </AgentPictureUploader>
  );
}
