import React, { createContext, useCallback, useContext, useState } from 'react';
import { isThisMonth } from 'date-fns';
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

export interface JobsChart {
  javascript: JobProps[];
  java: JobProps[];
  php: JobProps[];
  python: JobProps[];
}

export const noLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4n_pRWO25cP-syCiErDdSxj4fUQRTUWYGw&usqp=CAU';

interface JobContextData {
  loadingDataChart: string;
  getJobs(keyword: string): Promise<JobProps[]>;
  getJob(idJob: string): Promise<JobProps>;
  getJobsInMonth(): Promise<JobsChart>;
}

const JobContext = createContext<JobContextData>({} as JobContextData);

const JobProvider: React.FC = ({ children }: any) => {
  const [loadingDataChart, setLoadingDataChart] = useState('');
  const getJobs = useCallback(async (keyword: string) => {
    const response = await api.get(`positions.json?description=${keyword}`);
    const jobs = response.data;
    return jobs;
  }, []);

  const getJob = useCallback(async (idJob: string) => {
    const response = await api.get(`/positions/${idJob}.json?markdown=true`);
    const job = response.data;
    return job;
  }, []);

  const getJobsInMonth = useCallback(async () => {
    const responseJavaScript = await api.get(
      `positions.json?description=javascript`,
    );

    const responsePython = await api.get(`positions.json?description=python`);
    setLoadingDataChart('25%');
    const responsePHP = await api.get(`positions.json?description=php`);
    setLoadingDataChart('50%');
    const responseJava = await api.get(`positions.json?description=Java`);
    setLoadingDataChart('75%');
    const jobsJavaScript = responseJavaScript.data.filter((current: JobProps) =>
      isThisMonth(new Date(current.created_at)),
    );
    setLoadingDataChart('100%');

    const jobsPython = responsePython.data.filter((current: JobProps) =>
      isThisMonth(new Date(current.created_at)),
    );

    const jobsPHP = responsePHP.data.filter((current: JobProps) =>
      isThisMonth(new Date(current.created_at)),
    );

    const jobsJava = responseJava.data.filter((current: JobProps) =>
      isThisMonth(new Date(current.created_at)),
    );
    setLoadingDataChart('');

    return {
      javascript: jobsJavaScript,
      python: jobsPython,
      php: jobsPHP,
      java: jobsJava,
    } as JobsChart;
  }, []);

  return (
    <JobContext.Provider
      value={{
        loadingDataChart,
        getJobs,
        getJob,
        getJobsInMonth,
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
