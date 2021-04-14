import './Utilisateur.scss';
import { Avatar, Button } from '@material-ui/core';
import * as crudUI from '../services/crud-utilisateurs';
/* Ex3 - Point C */

export default function Utilisateur({utilisateur}) {
  return (
    <div className="Utilisateur">
      {/* Ex3 - Point D)iii) */}
      <span className="nom">{utilisateur.displayName}</span>
      <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} />
      {/* Ex3 - Point C */}
      <Button 
        variant="outlined"
        size="small"
        className="btnDeconnexion"
        onClick={() => crudUI.deconnexion()}
      >
        Déconnexion
      </Button>
    </div>
  );
}