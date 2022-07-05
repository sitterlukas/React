import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from './directory-item.styles';

type Categories = {
  id: number;
  title: string;
  imageUrl: string;
};

const DirectoryItem = ({ category }: { category: Categories }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler} key={id}>
      <BackgroundImage className='background-image' imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
