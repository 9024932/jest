import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    expect(screen.getByText('Jan')).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30} />);
    expect(screen.getByText('Leeftijd: 30')).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    render(<ProfileCard name="Klaas" age={40} bio="Ik hou van programmeren" />);
    expect(screen.getByText('Ik hou van programmeren')).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Sophie" age={22} />);
    expect(screen.getByText('Geen bio beschikbaar')).toBeInTheDocument();
  });
});