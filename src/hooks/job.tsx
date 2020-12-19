import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface JobProps {
  name: string;
}

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
        getJobs
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
