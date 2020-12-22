/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiGithub, FiSearch, FiLoader } from 'react-icons/fi';
import {
  SectionSearch,
  Form,
  ButtonSubmit,
  Error,
  Jobs,
  Avatar,
  JobDetails,
  Scroll,
} from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('Ops! Ocorreu um erro');

  async function handleAddJobs(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError(
        'OPS! Você precisa inserir o título/descrição da vaga para pesquisar',
      );
      return;
    }

    setLoading(true);

    try {
      console.log('alo');
    } catch (err) {
      if (err === 404) {
        setInputError('Limite da api atingido');
      } else {
        setInputError('Erro na busca por este termo');
      }
    }

    setLoading(false);
  }

  return (
    <>
      <SectionSearch>
        <h1>Oportunidades de emprego para desenvolvedores</h1>

        <Form hasError={!!inputError} onSubmit={handleAddJobs}>
          <input placeholder="Pesquise por uma tecnologia" />

          <ButtonSubmit
            disabled={loading}
            loading={loading}
            hasError={!!inputError}
          >
            <FiSearch size={20} />
          </ButtonSubmit>
        </Form>
        {inputError && <Error>{inputError}</Error>}
      </SectionSearch>

      <Scroll>
        <Jobs>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>

          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>

          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>

          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
          <Link to="www.google.com.br">
            <Avatar>
              <img
                src="https://zdnet4.cbsistatic.com/hub/i/r/2019/05/10/03a26c8c-5662-4ec5-aff7-e7e54a3737ba/thumbnail/770x578/46d0e13dacf65a790ee3e8aa7dad409d/github-package-registry.png"
                alt="companhiaLogo"
              />
            </Avatar>

            <JobDetails>
              <div>
                <strong>Vaga</strong>
                <span>Desenvolvedor Frontend</span>
              </div>
              <div>
                <strong>Empresa</strong>
                <span>Insight Lab</span>
              </div>
              <div>
                <strong>Tipo de contratação</strong>
                <span>Estágio Remoto</span>
              </div>
              <div>
                <strong>Dinponível desde</strong>
                <span>20/12/2020</span>
              </div>
            </JobDetails>
            <FiChevronRight size={25} />
          </Link>
        </Jobs>
      </Scroll>
    </>
  );
};

export default Home;
