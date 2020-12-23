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

const workex = {
  id: '40612355-9b00-4b4c-b395-ba66499a448d',
  type: 'Full Time',
  url: 'https://jobs.github.com/positions/40612355-9b00-4b4c-b395-ba66499a448d',
  created_at: 'Mon Dec 21 10:31:13 UTC 2020',
  company: 'Connected Health Solutions BV',
  company_url: 'http://www.carexs.com',
  location: 'Greater Amsterdam Metropolitan Area',
  title: 'React Native Mobile Developer',
  description:
    '**Are you a React Native Mobile Developer who would like to make a significant contribution to improving healthcare for patients and care providers? Do you like to see your mobile apps to be used on a daily basis in an innovative eHealth solution and work in a socially responsible environment? Then we would like to meet you!**\r\n\r\n\r\n**Your goal**\r\n\r\nAs a React Native Developer your mobile apps will be used on a daily base by patients and care providers to prevent medical issues. You will design, develop and improve the quality and delivery of new components of our CareXS mobile applications, sometimes in an iterative way. You are combining your technical knowledge with your experience about the mobile landscape both in iOS and Android to make the best applications.  \r\n\r\n\r\n**To be successful in this position:**\r\n\r\n- A minimum of 3 years of developing experience with React Native\r\n- Experience working with Redux, RxJS and TypeScript\r\n- Understanding of Agile/Scrum practices\r\n- Experience with automated testing and continuous delivery\r\n- Fluent English (verbally and written)\r\n- You are already living in The Netherlands\r\n\r\n\r\n**What can you expect from us?**\r\n\r\n- A socially concerned, equal-opportunity, international and multi-cultural work environment\r\n- A focus on team-spirit and possibilities for personal and professional growth\r\n- Full travel allowance\r\n- An informal workplace located in Amsterdam-North near the ferry to Amsterdam CS\r\n- The possibility to work 32-40 hours\r\n- Flexible working hours and ability to work from home\r\n- A good salary with 8% holiday pay\r\n- 25 days of paid holiday per year on a fulltime basis\r\n- A solid pension plan\r\n\r\n\r\n**Our selection procedure in a nutshell:**\r\n\r\nPlease send your resume and motivation letter to hr@carexs.com. We will make sure to contact you within 5 working days. Our recruiter Cynthia will contact you to find out more about you and tell you more about CareXS.\r\n\r\nThe second step in your application is meeting the hiring manager and your future team (online). We focus on the team fit and your experience and knowledge. If there is a match, we will offer you a job!\r\n\r\nAcquisition in response to this vacancy is not appreciated. Thank you!',
  how_to_apply:
    'Please send your resume and motivation letter to hr@carexs.com. We will make sure to contact you within 5 working days. Our recruiter Cynthia will contact you to find out more about you and tell you more about CareXS.',
  company_logo:
    'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXVUIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1e1bc51ba1fc4036f9887740f4ce0106f6d85eb8/carexs-corporate-payoff-600.png',
};

const JobDetails: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState<JobProps>(workex);
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

    // fetchJob();
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
      <p>{job.description}</p>
      <p>
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
