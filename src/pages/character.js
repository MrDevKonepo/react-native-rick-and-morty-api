import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const DetailContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const DetailImage = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

const Detail = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

const Character = ({ route }) => {
  const { name, image, status, location, episode } = route.params;

  return (
    <DetailContainer>
      <DetailImage source={{ uri: image }} />
      <Detail>Name: {name}</Detail>
      <Detail>Status: {status}</Detail>
      <Detail>Location: {location}</Detail>
      <Detail>First Episode: {episode}</Detail>
    </DetailContainer>
  );
};

export default Character;
