import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiLoader } from 'react-icons/fi';
import AnyChart from 'anychart-react';

import { useJob, JobsChart } from '../../hooks/job';

import { Loading, Container, WrapperCharts } from './styles';

const Charts: React.FC = () => {
  const { getJobsInMonth, loadingDataChart } = useJob();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<JobsChart>({} as JobsChart);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const jobsForCharts = await getJobsInMonth();
        setJobs(jobsForCharts);
      } catch (error) {
        toast.error('Ops, ocorreu um erro. 👀');
      }
      setLoading(false);
    }
    fetchData();
  }, [getJobsInMonth]);

  if (loading)
    return (
      <Loading loading={loading}>
        <FiLoader size={20} />
        <h3>Isso pode demorar um pouco...</h3>
        <h1>{loadingDataChart}</h1>
      </Loading>
    );

  return (
    <Container>
      <div>
        <h1>Gráfico comparativo de vagas do mês atual</h1>
        <h2>Javascript, Java, PHP e Python</h2>
      </div>
      <WrapperCharts>
        <AnyChart
          id="pieChart"
          width={500}
          height={350}
          type="pie"
          data={`JavaScript,${jobs.javascript?.length}\nJava,${jobs.java?.length}\nPHP,${jobs.php?.length}\nPython,${jobs.python?.length}`}
          title="Comparativo de vagas - PIE"
        />
        <AnyChart
          id="columnChart"
          width={500}
          height={350}
          type="column"
          data={`JavaScript,${jobs.javascript?.length}\nJava,${jobs.java?.length}\nPHP,${jobs.php?.length}\nPython,${jobs.python?.length}`}
          title="Comparativo de vagas - Column"
        />
      </WrapperCharts>
    </Container>
  );
};

export default Charts;
