import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'components/UI/Image/Image';
import { Button, Spin } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import { AgentPictureUploader, FormTitle } from './AccountSettings.style';
import { AuthContext } from 'context/AuthProvider';
import imageEmpty from 'assets/images/images-empty.png'

export default function AgentUploadDocumentForm() {
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [loadingBackground, setLoadingBackground] = useState(false);

  const [selectedFilesPhoto, setSelectedFilesPhoto] = useState(undefined);
  const [selectedFilesBackground, setSelectedFilesBackground] = useState(undefined);


  const selectFilePhoto = (event) => {
    setSelectedFilesPhoto(event.target.files);
  };

  const selectFileBackground = (event) => {
    setSelectedFilesBackground(event.target.files);
  };

  const { uploadPhoto, uploadBackground } = useContext(AuthContext);

  const { control, errors, watch, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const baseUrl = process.env.REACT_APP_BACKEND_API

  const dataU = localStorage.getItem('dataUser');
  const dataUser = JSON.parse(dataU);
  const id = dataUser && dataUser.id;
  const imagePHOTO = dataUser && dataUser.photoProfileUrl ? `${baseUrl}/images/photo/${dataUser.photoProfileUrl}` : imageEmpty;
  const imageBACKGROUND = dataUser && dataUser.backgroundUrl ? `${baseUrl}/images/background/${dataUser.backgroundUrl}` : imageEmpty;

  const onSubmitPhoto = (data) => {
    if (selectedFilesPhoto !== undefined) {
      let currentFile = selectedFilesPhoto[0];
      setLoadingPhoto(true);
      uploadPhoto(id, currentFile);
    }
  };

  const onSubmitBackground = (data) => {
    if (selectedFilesBackground !== undefined) {
      let currentFile = selectedFilesBackground[0];
      setLoadingBackground(true);
      uploadBackground(id, currentFile);
    }
  };


  return (
    <AgentPictureUploader>
      <FormTitle>Change Photo Profile & Background</FormTitle>
      <Heading content="PHOTO" as="h4" />
      <Image src={imagePHOTO} alt="PHOTO" />
      <form className="form-container" onSubmit={handleSubmit(onSubmitPhoto)} style={{ marginBottom: 50, marginTop: 25 }}>
        <input
          type="file"
          name="imagephoto"
          id="imagephoto"
          class="form-control-file border"
          onChange={selectFilePhoto}
        />
        <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
          {loadingPhoto ? <Spin size="default" /> : "Upload Photo"}
        </Button>
      </form>

      <Heading content="BACKGROUND" as="h4" />
      <Image src={imageBACKGROUND} alt="BACKGROUND" />
      <form className="form-container" onSubmit={handleSubmit(onSubmitBackground)} style={{ marginBottom: 50, marginTop: 25 }}>
        <input
          type="file"
          name="imagebackground"
          id="imagebackground"
          class="form-control-file border"
          onChange={selectFileBackground}
        />
        <Button type="primary" htmlType="submit" class="ant-btn ant-btn-primary" style={{ minWidth: 120 }}>
          {loadingBackground ? <Spin size="default" /> : "Upload Background"}
        </Button>
      </form>

    </AgentPictureUploader>
  );
}
