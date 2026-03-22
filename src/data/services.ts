import type { TFunction } from 'i18next';

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  documents: string[];
  highlights: string[];
  turnaround: string;
  image: string;
}

const serviceImage = `${process.env.PUBLIC_URL}/images/sample-image.jpeg`;

type ServiceDefinition = Pick<Service, 'id' | 'icon' | 'image'>;
type TranslatedServiceFields = Omit<Service, 'id' | 'icon' | 'image'>;

export const services: ServiceDefinition[] = [
  {
    id: 'governmentForms',
    icon: '🪪',
    image: serviceImage
  },
  {
    id: 'utilityBillPayment',
    icon: '💡',
    image: serviceImage
  },
  {
    id: 'onlineServices',
    icon: '🌐',
    image: serviceImage
  },
  {
    id: 'examFormFilling',
    icon: '📝',
    image: serviceImage
  },
  {
    id: 'courierLogistics',
    icon: '📦',
    image: serviceImage
  },
  {
    id: 'printingScanning',
    icon: '🖨️',
    image: serviceImage
  },
  {
    id: 'dakhale',
    icon: '📚',
    image: serviceImage
  }
];

export const getLocalizedServices = (t: TFunction): Service[] => {
  return services.map((service) => {
    const translated = t(`serviceCatalog.items.${service.id}`, { returnObjects: true }) as TranslatedServiceFields;
    return {
      ...service,
      ...translated
    };
  });
};
