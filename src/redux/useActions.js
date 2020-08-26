import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const useActions = (action) => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(action, dispatch);
  }, [action, dispatch]);
};
