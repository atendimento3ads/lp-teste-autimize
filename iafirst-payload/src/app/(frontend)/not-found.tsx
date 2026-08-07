import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <span>ERRO 404</span>
      <h1>Página não encontrada.</h1>
      <p>O endereço informado não existe ou foi removido.</p>
      <Link className="button button-primary" href="/">
        Voltar ao início
      </Link>
    </div>
  )
}
