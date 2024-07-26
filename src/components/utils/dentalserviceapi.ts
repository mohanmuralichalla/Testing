import axios from 'axios';
import  DentalService  from '../types/dentalservicelist';

const api = axios.create({
  baseURL: 'https://api.ewns.in/api/Services/kjsdentalhospital/list?skip=0&limit=9',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDentalServices = async (): Promise<DentalService[]> => {
  try {
    const response = await api.get<DentalService[]>('');
    return response.data;
  } catch (error) {
    console.error('Error fetching dental services:', error);
    throw error;
  }
};