import { Counter } from './components/Counter/Counter'
import { FilterableList } from './components/FilterableList/FilterableList'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='text-center'>
        <h1>Reactive Varibles</h1>
      </header>

        <main>
          <section>
            <h2>Counter Component</h2>
            <Counter />
          </section>

          <section>
            <h2>Reactive Filter</h2>
            <FilterableList />
          </section>
        </main>

      <footer className='text-center'>
        <p>Modul D</p>
      </footer>
    </div>
  )
}

export default App
