import { AddressProps, PriceProps, ArticleProps, ReviewProps } from "./";

export type DoctorProps = {
  experience: string;
  facebook: string;
  id: number;
  instaqram: string;
  linkedin: string;
  name: string;
  professional_license: number;
  twitter: string;
  profession: string;
  image: string;
  addresses: AddressProps[];
};

export type DoctorCardProps = DoctorProps & {
  openModal: (arg0: number) => void;
};

export type DoctorFullProps = DoctorProps & {
  tabs: Array<{ name: string; data: PriceProps | ArticleProps | ReviewProps }>;
};
