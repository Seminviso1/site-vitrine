import {
  mockPatents,
  mockTrademarks,
  mockIndustrialDesigns,
  mockSoftware,
  mockHardwareCircuits,
  mockSustainableTechnologies,
} from './lib/mockData';

export const apiRoutes = {
  '/api/patents': mockPatents,
  '/api/trademarks': mockTrademarks,
  '/api/industrial-designs': mockIndustrialDesigns,
  '/api/software': mockSoftware,
  '/api/hardware-circuits': mockHardwareCircuits,
  '/api/sustainable-technologies': mockSustainableTechnologies,
};

export const handleApiRequest = (url: string) => {
  const pathname = new URL(url, 'http://localhost').pathname;
  return apiRoutes[pathname as keyof typeof apiRoutes] || null;
};
