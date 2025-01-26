"use client"
type ErrorPageProps = {
  erro: Error
}
export default function ErrorPage({ erro }: ErrorPageProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold">Aconteceu algo!</h3>
      <span> {erro.message}</span>
    </div>
  )
}