import React from 'react'
import { Card } from '../components/Card'
import styled from 'styled-components'
import avatar from '../images/about-photo 1.png'

const Info = styled.div`
  display: flex;
  justify-content: space-between;

  && div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const TextBlock = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GridLayout = styled.section`
  display: grid;
  grid-template-columns: 35% 35% 30%;
  grid-template-rows: 1fr 3.5fr 3.5fr;
  height: 100%;
`

const Header = styled.header`
  color: white;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  font-size: 8rem;
  font-family: 'Russo One', sans-serif;
  margin-left: 4rem;
`

export const Homepage = () => {
  return (
    <GridLayout>
      <Header>
        <h1>Homepage</h1>
      </Header>
      <Card heading="Обо мне" className="card-info">
        <Info>
          <div>
            <span>Имя: Артём</span>
            <span>Возраст: 19</span>
            <span>Локация: Санкт-Петербург</span>
            <span>Место работы: "Самокат"</span>
            <span>Должность: Курьер</span>
          </div>
          <img src={avatar} alt="Моё фото"/>
        </Info>
        <TextBlock>
          <p>Привет! Я из маленького посёлка городского типа Нижнего Одеса, республика Коми. В Питер перебрался в 2017 году после окончания школы.</p>
          <p>Тогда же я и занялся программированием. Помимо компьютера в моей жизни присутствует весомая доля спорта. Я занимаюсь футболом, играю за молодежную команду футбольного клуба “Олимп”.</p>
          <p>Также я изучаю иностранные языки, свободно говорю на английском. На изучении - французский и немецкий.</p>
          <p>В данный момент времени сдаю на водительские права и подыскиваю себе машинку.</p>
          <p>Данный сайт создал сам, так как хотелось уже наконец оставить собственную частичку в DNS-пространстве.</p>
          <p>Ах да, еще по клубам люблю ходить, так что зовите;)</p>
        </TextBlock>
      </Card>
      <Card heading="Чем я занимаюсь?" className="card-hobbies">

      </Card>
      <Card heading="Свяжись со мной" className="card-contacts">

      </Card>
      <Card heading="Что нового?" className="card-news">

      </Card>
    </GridLayout>
  )
}