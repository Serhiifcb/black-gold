import css from './FilterButton.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from 'redux/activeFilterSlice';

export const FilterButton = ({filter}) => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(state => state.activeFilter);
  
  const setFilter = event => {
    dispatch(setActiveFilter(event.target.textContent));
  }
  
  return (
    <>
      <button className={clsx(css.filterButton, { [css.activeFilter]: activeFilter === filter })} onClick={setFilter}>{filter}</button>
    </>
  );
};