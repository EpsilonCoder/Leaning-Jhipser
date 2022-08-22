import { IPersonne, NewPersonne } from './personne.model';

export const sampleWithRequiredData: IPersonne = {
  id: 7936,
};

export const sampleWithPartialData: IPersonne = {
  id: 83708,
  prenom: 'Sommerard',
  addresse: 'Adolphe Malte c',
};

export const sampleWithFullData: IPersonne = {
  id: 50257,
  prenom: 'exploit navigate',
  nom: 'copy',
  addresse: 'turquoise',
};

export const sampleWithNewData: NewPersonne = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
