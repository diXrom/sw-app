import { useNavigate } from 'react-router-dom';
import { StarshipList } from '../AllComponents';
import ErrorBoundry from '../ErrorBoundry';

export function StarshipsPage() {
  const history = useNavigate();
  const goToStarship = (item) => history(item.id);
  return (
    <ErrorBoundry>
      <StarshipList getPerson={goToStarship} />
    </ErrorBoundry>
  );
}

