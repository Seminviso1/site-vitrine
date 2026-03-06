import axios, { AxiosError } from 'axios';

export const API_BASE_URL = 'https://simcc.uesc.br/v3/api';

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

interface SoftwareApiResponse {
  title: string;
  year: number;
  has_image: boolean;
  relevance: boolean;
  name: string;
  id: string;
  stars: number;
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

const mapSoftwareToItem = (software: SoftwareApiResponse): ApiItem => ({
  id: software.id,
  image: software.has_image
    ? `${API_BASE_URL}/images/software/${software.id}.jpg`
    : 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: software.title,
  description: `Year: ${software.year} | Stars: ${software.stars}`,
});

const mapPatentToItem = (patent: PatentApiResponse): ApiItem => ({
  id: patent.id,
  image: patent.has_image
    ? `${API_BASE_URL}/images/patents/${patent.id}.jpg`
    : 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
  title: patent.title,
  description: `Researcher: ${patent.researcher} | Year: ${patent.year} | Stars: ${patent.stars}`,
});

export const fetchSoftware = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<SoftwareApiResponse[]>('/software');
    return response.data.map(mapSoftwareToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch software: ${error.message}`);
    }
    throw new Error('Failed to fetch software');
  }
};

export const fetchPatents = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/patent');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch patents: ${error.message}`);
    }
    throw new Error('Failed to fetch patents');
  }
};

export const fetchTrademarks = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/trademark');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch trademarks: ${error.message}`);
    }
    throw new Error('Failed to fetch trademarks');
  }
};

export const fetchIndustrialDesigns = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/industrial-design');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch industrial designs: ${error.message}`);
    }
    throw new Error('Failed to fetch industrial designs');
  }
};

export const fetchHardwareCircuits = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/hardware-circuit');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch hardware circuits: ${error.message}`);
    }
    throw new Error('Failed to fetch hardware circuits');
  }
};

export const fetchSustainableTechnologies = async (): Promise<ApiItem[]> => {
  try {
    const response = await apiClient.get<PatentApiResponse[]>('/sustainable-technology');
    return response.data.map(mapPatentToItem);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(`Failed to fetch sustainable technologies: ${error.message}`);
    }
    throw new Error('Failed to fetch sustainable technologies');
  }
};
