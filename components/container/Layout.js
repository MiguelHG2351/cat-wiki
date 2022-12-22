import Header from "./Header"

export default function Layout({ children, className }) {
  return (
    <main className={className}>
        <Header />
        {children}
    </main>
  )
}
