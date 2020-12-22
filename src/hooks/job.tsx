import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

export interface JobProps {
  id: string;
  title: string;
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  location: string;
  type: string;
  how_to_apply?: string;
  description?: string;
}

export const noLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4n_pRWO25cP-syCiErDdSxj4fUQRTUWYGw&usqp=CAU';

interface JobContextData {
  getJobs(keyword: string): Promise<JobProps[]>;
  getJob(idJob: string): Promise<JobProps>;
}

const JobContext = createContext<JobContextData>({} as JobContextData);

const JobProvider: React.FC = ({ children }: any) => {
  const getJobs = useCallback(async (keyword: string) => {
    const response = await api.get(`positions.json?description=${keyword}`);
    const jobs = response.data;
    return jobs;
  }, []);

  const getJob = useCallback(async (idJob: string) => {
    const response = await api.get(`/positions/${idJob}.json`);
    const job = response.data;
    return job;
  }, []);

  return (
    <JobContext.Provider
      value={{
        getJobs,
        getJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

function useJob(): JobContextData {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error('useJob must be used within an JobProvider');
  }

  return context;
}

export { JobProvider, useJob };
