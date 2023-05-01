import { Contact, Header, Overlay, Presentation } from './components';

function App() {
  return (
    <>
      <section className="absolute flex min-h-screen w-full flex-col items-center justify-between px-0 py-1 md:flex-row md:px-20 md:py-10">
        <Header />
        <Overlay />
        <Presentation />
        <Contact />
      </section>
    </>
  );
}
export default App;
