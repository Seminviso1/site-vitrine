import {
  mockPatents,
  mockTrademarks,
  mockIndustrialDesigns,
  mockSoftware,
  mockHardwareCircuits,
  mockSustainableTechnologies,
} from './mockData';

const mockApiData: Record<string, unknown> = {
  '/api/patents': mockPatents,
  '/api/trademarks': mockTrademarks,
  '/api/industrial-designs': mockIndustrialDesigns,
  '/api/software': mockSoftware,
  '/api/hardware-circuits': mockHardwareCircuits,
  '/api/sustainable-technologies': mockSustainableTechnologies,
};

export const fetchApi = async (endpoint: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = mockApiData[endpoint];
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    }, 300);
  });
};
