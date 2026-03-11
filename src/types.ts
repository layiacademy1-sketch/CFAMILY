export interface Branch {
  id: string;
  name: string;
  description: string;
  slogan: string;
  icon: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'choppy',
    name: 'ChoppyFamily',
    description: 'La branche ChoppyFamily, c’est :',
    slogan: '« Unis pour le meilleur et pour le prix. »',
    icon: 'ShoppingBag'
  },
  {
    id: 'connection',
    name: 'ConnectionFamily',
    description: 'La branche ConnectionFamily, c’est :',
    slogan: '« Unis pour le meilleur et pour la vie. »',
    icon: 'Share2'
  },
  {
    id: 'champion',
    name: 'ChampionFamily',
    description: 'La branche ChampionFamily, c’est :',
    slogan: '« Unis pour le meilleur et pour le rire. »',
    icon: 'Trophy'
  },
  {
    id: 'cantine',
    name: 'CantineFamily',
    description: 'La branche CantineFamily, c’est :',
    slogan: '« Unis pour le meilleur et pour le goût. »',
    icon: 'Utensils'
  },
  {
    id: 'cellule',
    name: 'CelluleFamily',
    description: 'La branche CelluleFamily, c’est :',
    slogan: '« Unis pour le meilleur et pour la vie. »',
    icon: 'Heart'
  }
];
