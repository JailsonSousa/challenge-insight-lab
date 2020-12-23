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
import { JobProps, useJob } from '../../hooks/job';
import {
  Loading,
  Container,
  Header,
  MoreDetails,
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
        <strong>{job.title}</strong>
        <span>{job.company}</span>

        <MoreDetails>
          <div>
            <FiClock size={18} />
            <span>{job.type}</span>
          </div>

          <div>
            <FiMapPin size={18} />
            <span>{job.location}</span>
          </div>

          <div>
            <FiExternalLink size={18} />
            <a href={job.company_url} target="_blank" rel="noreferrer">
              Site da Empresa
            </a>
          </div>

          <div>
            <FiCalendar size={18} />
            <span>
              {job.created_at
                ? formatDistanceToNow(new Date(job.created_at), {
                    addSuffix: true,
                  })
                : ''}
            </span>
          </div>
        </MoreDetails>
      </Header>

      <h2>Descrição da vaga</h2>
      <p>
        {job.description}
        <br />
        <br />
        Como participar da vaga?
        <br />
        {job.how_to_apply}
      </p>
      <Actions>
        <BackScreen to="/">Ver outras vagas</BackScreen>
      </Actions>
    </Container>
  );
};

export default JobDetails;
