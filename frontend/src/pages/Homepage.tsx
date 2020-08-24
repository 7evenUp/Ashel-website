import React from 'react'
import { Header } from '../components/Header'
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

const Text = styled.div`
  margin-top: 24px;
`

export const Homepage = () => {
  return (
    <>
      <Header heading="Homepage" />
      <section>
        <Card heading="Обо мне">
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
          <Text>
            <p>Привет! Я из маленького посёлка городского типа Нижнего Одеса, республика Коми. В Питер перебрался в 2017 году после окончания школы.</p>
            <p>Тогда же я и занялся программированием. Помимо компьютера в моей жизни присутствует весомая доля спорта. Я занимаюсь футболом, играю за молодежную команду футбольного клуба “Олимп”.</p>
            <p>Также я изучаю иностранные языки, свободно говорю на английском. На изучении - французский и немецкий.</p>
            <p>В данный момент времени сдаю на водительские права и подыскиваю себе машинку.</p>
            <p>Данный сайт создал сам, так как хотелось уже наконец оставить собственную частичку в DNS-пространстве.</p>
            <p>Ах да, еще по клубам люблю ходить, так что зовите;)</p>
          </Text>
        </Card>
      </section>
    </>
  )
}