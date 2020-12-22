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
import { toast } from 'react-toastify';
import { JobProps, noLogo, useJob } from '../../hooks/job';
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
  const { getJob } = useJob();

  useEffect(() => {
    async function fetchJob() {
      if (!params.id.length) return history.push('/');
      setLoading(true);
      try {
        const work = await getJob(params.id);

        setJob(work);
      } catch (err) {
        toast.error('Ops! ocorreu um erro. 👀');
        history.push('/');
      }

      return setLoading(false);
    }

    fetchJob();
  }, [params, history, getJob]);

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
        <p>{job.description}</p>
        <p>
          Como participar da vaga?
          <br />
          {job.how_to_apply}
        </p>
      </Scroll>
      <Actions>
        <BackScreen to="/">Ver outras vagas</BackScreen>
      </Actions>
    </Container>
  );
};

export default JobDetails;
