export interface IRoute {
  cityFrom: string,
  cityWhere: string,
  dateThere: string,
  dateBack: string
};

export type Hidden = {
  there: 'none' | 'there',
  back: 'none' | 'back'
}
