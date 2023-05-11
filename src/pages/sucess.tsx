import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/sucess'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego fernandes</strong>, sua
        <strong>Camiseta blabla</strong> já está em camisa da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
