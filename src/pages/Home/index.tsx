/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { FiChevronRight, FiSearch, FiLoader } from 'react-icons/fi';
import { JobProps } from '../../hooks/job';
import api from '../../services/api';
import {
  SectionSearch,
  Form,
  ButtonSubmit,
  Error,
  Jobs,
  Avatar,
  JobDetails,
  Scroll,
  Wrapper,
} from './styles';

const noLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4n_pRWO25cP-syCiErDdSxj4fUQRTUWYGw&usqp=CAU';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [jobs, setJobs] = useState<JobProps[]>([] as JobProps[]);
  const [inputError, setInputError] = useState('');

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
      const response = await api.get(`positions.json?description=${keyword}`);

      const works = response.data;

      setJobs(works);

      setKeyword('');
      setInputError('');
    } catch (err) {
      setInputError('Ops! Ocorreu um erro. Tente novamente');
    }

    setLoading(false);
  }

  return (
    <>
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
      <Wrapper>
        <Scroll>
          <Jobs>
            {jobs.map(job => (
              <Link to={`/details/${job.id}`}>
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
                    <span>
                      {formatDistanceToNow(new Date(job.created_at), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </JobDetails>
                <FiChevronRight size={25} />
              </Link>
            ))}
          </Jobs>
        </Scroll>
      </Wrapper>
    </>
  );
};

export default Home;
