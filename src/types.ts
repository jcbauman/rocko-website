export interface RoleDetails {
  title: string;
  company: string;
  buttons: DetailsButton[];
  yearsActive: string;
  duration: string;
  imageCredits: string;
  notes: any;
  image: string;
}

export enum Roles {
  ATTIC = "Attic Band",
  THESIS = "Thesis",
  KPISS = "KPISS",
  BEATITUDE = "Beatitude",
  CRATE = "Crate Digger",
  QUIO = "Quio",
  KZSC = "Super 8",
  UCSC = "Graduation",
  PLAYS = "Playwriting",
  FLOWCODE = "flowcode",
}

export interface DetailsButton {
  label: string;
  className?: string;
  link?: string;
  icon: JSX.Element;
}
