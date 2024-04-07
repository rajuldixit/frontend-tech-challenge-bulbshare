import { Dispatch, createContext, useContext, useReducer } from "react";
import {
  AppReducer,
  IActionType,
  IAppState,
  appInitialState
} from "./AppReducer";

export const AppStateContext = createContext<IAppState>(appInitialState);
export const AppDispatchContext = createContext<Dispatch<IActionType>>(
  () => null
);

type IContextProps = {
  children: React.ReactNode;
};
export const AppContext: React.FC<IContextProps> = ({
  children
}: IContextProps) => {
  const [state, dispatch] = useReducer(AppReducer, appInitialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

export const useAppDispatch = () => {
  return useContext(AppDispatchContext);
};
