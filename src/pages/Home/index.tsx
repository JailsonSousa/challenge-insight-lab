/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiChevronRight, FiSearch, FiLoader } from 'react-icons/fi';
import { distanceToNow } from '../../utils/date';
import { JobProps, useJob } from '../../hooks/job';
import {
  Container,
  SectionSearch,
  Form,
  ButtonSubmit,
  Error,
  Jobs,
  Avatar,
  JobDetails,
} from './styles';

const noLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4n_pRWO25cP-syCiErDdSxj4fUQRTUWYGw&usqp=CAU';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [jobs, setJobs] = useState<JobProps[]>([] as JobProps[]);
  const [inputError, setInputError] = useState('');
  const { getJobs } = useJob();

  async function handleSearchJobs(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setInputError('');

    if (!keyword) {
      setInputError(
        'Ops! Você precisa informar alguma descrição da vaga para pesquisar',
      );
      return;
    }

    setLoading(true);

    try {
      const works = await getJobs(keyword);

      setJobs(works);

      setKeyword('');
      setInputError('');
      if (works.length) {
        toast.success('Oba! Achamos algumas vagas. 👩‍💻 🧑‍💻 ');
      } else {
        toast.info('Não temos nenhuma vaga com essa palavra chave. 😭');
      }
    } catch (err) {
      toast.error('Ops! ocorreu um erro.');
      setInputError('Ops! Ocorreu um erro. Tente novamente');
    }

    setLoading(false);
  }

  return (
    <Container>
      <SectionSearch>
        <h1>Oportunidades de emprego para desenvolvedores</h1>

        <Form hasError={!!inputError} onSubmit={handleSearchJobs}>
          <input
            placeholder="Pesquise por uma tecnologia"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />

          <ButtonSubmit
            disabled={loading}
            loading={loading}
            hasError={!!inputError}
          >
            {loading ? <FiLoader size={20} /> : <FiSearch size={20} />}
          </ButtonSubmit>
        </Form>
        {inputError && <Error>{inputError}</Error>}
      </SectionSearch>
      <Jobs>
        {jobs.map(job => (
          <Link to={`/details/${job.id}`} key={job.id}>
            <Avatar>
              <img
                src={job.company_logo ? job.company_logo : noLogo}
                alt="logotipo da empresa"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>{job.title}</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>{job.company}</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>{job.type}</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>{distanceToNow(job.created_at)}</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
        ))}
      </Jobs>
    </Container>
  );
};

export default Home;
