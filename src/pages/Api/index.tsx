import React from 'react';

import { Container, Subtitle, Description, Route, Scroll } from './styles';

const Api: React.FC = () => {
  return (
    <Scroll>
      <Container>
        <h1>Github Jobs API</h1>

        <Description>
          A API de trabalhos do GitHub permite que você pesquise e visualize
          trabalhos com JSON sobre HTTP. Para obter a representação JSON de
          qualquer resultado de pesquisa ou lista de empregos, anexe .json ao
          URL que você usaria no site HTML de empregos do GitHub. Por exemplo,
          ao pesquisar empregos em Python perto de Nova York no site, sou levado
          a este url:
        </Description>

        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://jobs.github.com/positions?description=python&location=new+york"
          >
            https://jobs.github.com/positions?description=python&location=new+york
          </a>
        </div>

        <Description>
          Para obter a representação JSON dessas tarefas, usei apenas o
          settings.json:
        </Description>

        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://jobs.github.com/positions.json?description=python&location=new+york"
          >
            https://jobs.github.com/positions.json?description=python&location=new+york
          </a>
        </div>

        <Subtitle>Paginação</Subtitle>
        <Description>
          A API também oferece suporte à paginação. /positions.json, por
          exemplo, irá retornar apenas 50 posições por vez. Você pode paginar os
          resultados adicionando um parâmetro de página para suas consultas. A
          paginação começa por padrão em 0.
        </Description>

        <Subtitle>Exemplo</Subtitle>

        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions.json?description=ruby&page=1"
            >
              https://jobs.github.com/positions.json?description=ruby&page=1
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions.json?page=1&search=code"
            >
              https://jobs.github.com/positions.json?page=1&search=code
            </a>
          </li>
        </ul>

        <Route>GET /positions.json</Route>
        <Description>
          Pesquise empregos por termo, localização, tempo integral versus tempo
          parcial ou qualquer combinação dos três. Todos os parâmetros são
          opcionais.
        </Description>

        <Subtitle>Parametros</Subtitle>
        <ul>
          <li>
            descrição - um termo de pesquisa, como ruby ou java. Este parâmetro
            tem um alias para pesquisar.
          </li>
          <li>
            localização - o nome de uma cidade, código postal ou outro termo de
            pesquisa de localização.
          </li>
          <li>
            lat - uma latitude específica. Ou usado, você também deve enviar por
            muito tempo e não deve enviar localização.
          </li>
          <li>
            long - uma longitude específica. Normalmente, você deve enviar lat e
            não deve enviar localização.
          </li>
          <li>
            tempo integral - Se você deseja limitar os resultados a posições de
            tempo integral, defina este parâmetro como verdadeiro.
          </li>
        </ul>

        <Subtitle>Exemplo</Subtitle>

        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions.json?description=python&full_time=true&location=sf"
            >
              https://jobs.github.com/positions.json?description=python&full_time=true&location=sf
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions.json?search=node"
            >
              https://jobs.github.com/positions.json?search=node
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"
            >
              https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
            </a>
          </li>
        </ul>

        <Route>GET /positions/ID.json</Route>
        <Description>
          Recupere a representação JSON de um único anúncio de emprego.
        </Description>

        <Subtitle>Parametros</Subtitle>
        <ul>
          <li>
            markdown - Defina como true para obter os campos de descrição e
            how_to_apply como Markdown.
          </li>
        </ul>

        <Subtitle>Exemplo</Subtitle>

        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions/21516.json"
            >
              https://jobs.github.com/positions/21516.json
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://jobs.github.com/positions/21516.json?markdown=true"
            >
              https://jobs.github.com/positions/21516.json?markdown=true
            </a>
          </li>
        </ul>
      </Container>
    </Scroll>
  );
};

export default Api;
