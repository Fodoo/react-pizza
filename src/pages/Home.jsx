import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавит', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(10).fill(<LoadingBlock />)}
      </div>
    </div>
  );
}

export default Home;
