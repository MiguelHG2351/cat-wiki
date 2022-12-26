import Image from 'next/image'
import Header from './Header'

export default function Layout ({ children, className }) {
  return (
    <main className={className}>
        <Header />
        {children}
        <footer className="bg-black mt-7 py-4 px-4 rounded-t-[42px]">
          <Image className="w-24" src={ '/icons/CatwikiLogo3.svg' } width={ 128 } height={ 43 } alt="Imagen del gato" />
        <p className="text-white text-xs mt-4">
          <span className="inline-block align-middle mr-2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path fill="white" d="M8.5 13.5h3q.417 0 .708-.292.292-.291.292-.708V11H11v1H9V8h2v1h1.5V7.5q0-.417-.292-.708-.291-.292-.708-.292h-3q-.417 0-.708.292-.292.291-.292.708v5q0 .417.292.708.291.292.708.292ZM10 18q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.115.625-1.447 1.719-2.541Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.115.625 1.447.625 2.541 1.719 1.094 1.094 1.719 2.541Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.719 2.552t-2.541 1.719Q11.667 18 10 18Zm0-1.5q2.708 0 4.604-1.896T16.5 10q0-2.708-1.896-4.604T10 3.5q-2.708 0-4.604 1.896T3.5 10q0 2.708 1.896 4.604T10 16.5Zm0-6.5Z" /></svg></span>
          created by <a className="font-bold" target="_blank" href="https://github.com/MiguelHG2351" rel="noreferrer">MiguelHG2351</a> - devChallenge.io 2021
        </p>
      </footer>
    </main>
  )
}
