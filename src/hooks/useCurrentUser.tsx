import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/store/store";
import { fetchCurrentUser } from "../services/store/authenticated/update-user/updateSlice";

const useCurrentUser = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector<RootState>((state) => state.updateUser);

  useEffect(() => {
    dispatch<any>(fetchCurrentUser());
  }, [dispatch]);

  return { user, isLoading, error };
};

export default useCurrentUser;