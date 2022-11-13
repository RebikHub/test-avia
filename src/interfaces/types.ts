export interface IRoute {
  cityFrom: string,
  cityWhere: string,
  dateThere: string,
  dateBack: string
};

export interface IHidden {
  there: 'none' | 'there',
  back: 'none' | 'back'
};

export interface ITime {
  first: {
    from: string,
    to: string
  },
  second: {
    from: string,
    to: string,
  },
  third: {
    from: string,
    to: string
  }
};

export interface IContext {
  route: IRoute,
  saveRoute: (route: IRoute) => void
};
