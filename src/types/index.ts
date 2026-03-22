export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Theme {
  primary: string;
  primaryDark: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  shadow: string;
  radius: string;
}