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
  getJobs(technologyName: string): Promise<JobProps[]>;
}

const JobContext = createContext<JobContextData>({} as JobContextData);

const JobProvider: React.FC = ({ children }: any) => {
  const getJobs = useCallback(async (technologyName: string) => {
    return [] as JobProps[];
  }, []);

  return (
    <JobContext.Provider
      value={{
        getJobs,
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
