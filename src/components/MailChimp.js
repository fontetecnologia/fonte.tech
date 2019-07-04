import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 1024px;
  padding: 16px;

  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;

  @media (min-width: 900px) {
    flex-direction: row;

    padding: 48px;
  }
`

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    width: 45%;
  }
`

const Line = styled.div`
  margin: 32px 0;
  height: 2px;
  width: auto;

  @media (min-width: 900px) {
    margin: 0;
    height: auto;
    width: 2px;
  }

  background-color: rgb(255, 255, 255);
`

const MailChimpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    width: 45%;
  }
`

const MailChimpInput = styled.input`
  margin-bottom: 32px;
  width: 100%;
  padding: 8px;

  border: none;
  border-radius: 8px;
  font-weight: 700;
`

const MailChimpButton = styled.button`
  margin-bottom: 32px;
  padding: 8px 16px;

  border: 4px solid rgb(0, 52, 107);
  border-radius: 999px;
  background-color: rgb(47, 124, 192);
  color: rgb(255, 255, 255);
  font-size: 1.2em;
  font-weight: 700;
`

const MailChimpAnnotation = styled.span`
  width: 100%;

  font-size: 0.8em;
`

const MailChimp = ({children}) => {
  return (
    <Root>
      <CallToAction>
        <h3>Não perca mais tempo!!!</h3>
        <p>
          Coloque o seu nome e mail no formulário que entraremos em contato com
          você o mais rápido possível.{' '}
          <span role="img" aria-label="Grinning Face With Smiling Eyes">
            😄
          </span>
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46">
          <g fill="none">
            <path
              fill="#104471"
              d="M23 36a1 1 0 0 1-.537-.156l-22-14a1.002 1.002 0 0 1 .09-1.739L23 6l22.447 14.105a1.002 1.002 0 0 1 .09 1.739l-22 14A1 1 0 0 1 23 36z"
            />
            <path
              fill="#fff"
              d="M38 37H8V1a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v36z"
            />
            <path
              fill="#2f7cc0"
              d="M45 46a1.03 1.03 0 0 1-.252-.032l-23-6L22 33l24-12v24a1.002 1.002 0 0 1-1 1z"
            />
            <path
              fill="#85a6c3"
              d="M45 46H1a1 1 0 0 1-1-1V21l45.479 23.122A.999.999 0 0 1 45 46z"
            />
            <path
              fill="#2f7cc0"
              d="M19 20.414l-4.707-4.707a.999.999 0 0 1 0-1.414L19 9.586 20.414 11l-4 4 4 4L19 20.414zm8 0L25.586 19l4-4-4-4L27 9.586l4.707 4.707a.999.999 0 0 1 0 1.414L27 20.414z"
            />
          </g>
        </svg>
      </CallToAction>
      <Line />
      <MailChimpForm
        action="https://tech.us20.list-manage.com/subscribe/post?u=3edc5711ac5e5a119aa292992&id=26ebd6fee6"
        method="post"
        target="_blank"
      >
        <MailChimpInput
          type="text"
          name="NAME"
          placeholder="Como gostaria de ser chamado?"
        />
        <MailChimpInput
          type="email"
          name="EMAIL"
          placeholder="Digite aqui o seu melhor e-mail"
        />
        <MailChimpButton type="submit">Vamos conversar</MailChimpButton>
        <MailChimpAnnotation>
          * Fique tranquilo, seu e-mail não será usado para envio de SPAM
        </MailChimpAnnotation>
        <MailChimpAnnotation>
          ** A qualquer momento você pode cancelar qualquer envio de e-mail de
          nossa parte
        </MailChimpAnnotation>
      </MailChimpForm>
    </Root>
  )
}

export default MailChimp
