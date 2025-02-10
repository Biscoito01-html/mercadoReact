export interface Produto {
    id?: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categoria: string;
    quantidade: number;

    onClick: () => void
}