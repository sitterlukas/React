import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/category.selectors';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <CategoryPreview key={title} title={title} products={products} />
            )}
          </>
        );
      })}
    </>
  );
};

export default CategoriesPreview;
