import React, { createContext, ReactNode, useState } from 'react';
import { IContext, IRoute } from '../interfaces/types';

export const Context = createContext<IContext | null>(null);

type Props = {
  children: ReactNode
}

export default function RouteProvider({children}: Props) {
  const [route, setRoute] = useState<IRoute>({
    cityFrom: '',
    cityWhere: '',
    dateThere: '',
    dateBack: ''
  });

  function saveRoute(route: IRoute) {
    setRoute(route);
  };

  return (
    <Context.Provider value={{route, saveRoute}}>
      {children}
    </Context.Provider>
  );
};
