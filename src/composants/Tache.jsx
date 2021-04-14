import './Tache.scss';

/* Ex3 - Point F)ii) */
import formaterDateEtHeure from '../services/utilitaires';
import { Check, Delete } from '@material-ui/icons';

export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) */}
      <Check/>
      {/* Ex3 - Point F)i) */}
      <span className="texte">Texte de la tâche</span>
      {formaterDateEtHeure(date)}
      <span className="date">(date formatée)</span>
      {/* Ex3 - Point F)iii) */}
      <Delete/>
    </div>
  );
}