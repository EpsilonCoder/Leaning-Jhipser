export interface IPersonne {
  id: number;
  prenom?: string | null;
  nom?: string | null;
  addresse?: string | null;
}

export type NewPersonne = Omit<IPersonne, 'id'> & { id: null };
