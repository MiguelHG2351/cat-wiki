import Image from 'next/image'

export default function Header () {
  return (
    <header className="py-3">
        <Image src={'/icons/CatwikiLogo.svg'} width={128} height={43} alt="Imagen del gato" />
    </header>
  )
}
