import axios, { AxiosError } from 'axios';

export const API_BASE_URL = 'https://api.example.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface PatentApiResponse {
  title: string;
  researcher: string;
  year: number;
  stars: number;
  id: string;
  lattes_id: string;
  patent: string | null;
  has_image: boolean;
  relevance: boolean;
  code: string;
}

interface SoftwareApiResponse {
  title: string;
  researcher: string;
  year: number;
  stars: number;
  id: string;
  lattes_id: string;
  patent: string | null;
  has_image: boolean;
  relevance: boolean;
  code: string;
}

const mapPatentToItem = (patent: PatentApiResponse): ApiItem => ({
  id: patent.id,
  image: patent.has_image
    ? `${API_BASE_URL}/images/patents/${patent.id}.jpg`
    : 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: patent.title,
  description: `Researcher: ${patent.researcher} | Year: ${patent.year} | Stars: ${patent.stars}`,
});

const mapSoftwareToItem = (software: SoftwareApiResponse): ApiItem => ({
  id: software.id,
  image: software.has_image
    ? `${API_BASE_URL}/images/software/${software.id}.jpg`
    : 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: software.title,
  description: `Researcher: ${software.researcher} | Year: ${software.year} | Stars: ${software.stars}`,
});

export const fetchPatents = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/production/patent');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch patents: ${error.message}`);
    }
    throw new Error('Failed to fetch patents');
  }
};

export const fetchSoftware = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<SoftwareApiResponse[]>('/production/software');
    return response.data.map(mapSoftwareToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch software: ${error.message}`);
    }
    throw new Error('Failed to fetch software');
  }
};

export const fetchTrademarks = async (): Promise<ApiItem[]> => {
  throw new Error('Trademarks API endpoint not yet implemented');
};

export const fetchIndustrialDesigns = async (): Promise<ApiItem[]> => {
  throw new Error('Industrial Designs API endpoint not yet implemented');
};

export const fetchHardwareCircuits = async (): Promise<ApiItem[]> => {
  throw new Error('Hardware Circuits API endpoint not yet implemented');
};

export const fetchSustainableTechnologies = async (): Promise<ApiItem[]> => {
  throw new Error('Sustainable Technologies API endpoint not yet implemented');
};
