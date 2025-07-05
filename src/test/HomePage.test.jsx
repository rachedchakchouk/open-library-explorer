import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'

// Mock du module next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    // autres méthodes si besoin
  }),
  useSearchParams: () => ({
    get: () => '', // ou 'test' pour simuler un paramètre
  }),
}))

test('renders homepage heading', () => {
  render(<HomePage />)
  expect(screen.getByText(/Open Library Explorer/i)).toBeInTheDocument()
})
