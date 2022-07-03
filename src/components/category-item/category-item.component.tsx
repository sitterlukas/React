import React from "react";

import "./category-item.styles.scss";

type Categories = {
  id: number;
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ category }: { category: Categories }) => {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
