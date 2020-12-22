import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  FiLoader,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
  FiClock,
} from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';
import { JobProps, noLogo } from '../../hooks/job';
import api from '../../services/api';
import {
  Loading,
  Container,
  Header,
  Logotipo,
  MoreDetails,
  Scroll,
  Actions,
  BackScreen,
} from './styles';

const JobDetails: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<JobProps>({} as JobProps);
  const params = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    async function fetchJob() {
      if (!params.id.length) return history.push('/');
      setLoading(true);
      try {
        const response = await api.get(`/positions/${params.id}.json`);
        const works = response.data;
        console.log(works);
        setJob(works);
      } catch (err) {
        history.push('/');
      }

      return setLoading(false);
    }

    fetchJob();
  }, [params, history]);

  if (loading)
    return (
      <Loading loading={loading}>
        <FiLoader size={20} />
      </Loading>
    );
  return (
    <Container>
      <Header>
        <Logotipo>
          <img
            src={job.company_logo ? job.company_logo : noLogo}
            alt="logotipo_empresa"
          />
        </Logotipo>
        <div>
          <strong>{job.title}</strong>
          <span>{job.company}</span>
        </div>
      </Header>
      <MoreDetails>
        <span>
          <FiClock size={25} />
          {job.type}
        </span>
        <span>
          <FiMapPin size={25} />
          {job.location}
        </span>
        <a href={job.company_url} target="_blank" rel="noreferrer">
          <span>
            <FiExternalLink size={25} />
            site da empresa
          </span>
        </a>
        <span>
          <FiCalendar size={25} />
          {job.created_at
            ? formatDistanceToNow(new Date(job.created_at), {
                addSuffix: true,
              })
            : ''}
        </span>
      </MoreDetails>

      <h2>Descrição da vaga</h2>
      <Scroll>
        <p>{job.description?.replace(/<.*?>/g, '')}</p>
      </Scroll>
      <Actions>
        <BackScreen to="/">Ver outras vagas</BackScreen>

        <a
          target="_blank"
          rel="noreferrer"
          href={job.how_to_apply?.replace(/<.*?>/g, '')}
        >
          Quero essa vaga
        </a>
      </Actions>
    </Container>
  );
};

export default JobDetails;
