import '../produto/interface/produto'
import { Produto } from '../produto/interface/produto'


const produtos: Produto[] = [
    {
        id: 1,
        name: "Smartphone XYZ",
        description: "Um smartphone avançado com câmera de 48MP.",
        price: 1200.00,
        image: "https://m.media-amazon.com/images/I/416MG51rNgL.__AC_SY445_SX342_QL70_ML2_.jpg",
        categoria: "Eletrônicos",
        quantidade: 10
    },
    {
        id: 2,
        name: "Notebook ABC",
        description: "Notebook leve e potente com SSD de 512GB.",
        price: 3500.00,
        image: "https://m.media-amazon.com/images/I/416MG51rNgL.__AC_SY445_SX342_QL70_ML2_.jpg",
        categoria: "Eletrônicos",
        quantidade: 5
    },
    {
        id: 3,
        name: "Mesa de Escritório",
        description: "Mesa de madeira com design moderno.",
        price: 450.00,
        image: "https://m.media-amazon.com/images/I/416MG51rNgL.__AC_SY445_SX342_QL70_ML2_.jpg",
        categoria: "Móveis",
        quantidade: 15
    },
    {
        id: 4,
        name: "Cadeira Gamer",
        description: "Cadeira ergonômica para longas sessões de jogo.",
        price: 800.00,
        image: "https://m.media-amazon.com/images/I/416MG51rNgL.__AC_SY445_SX342_QL70_ML2_.jpg",
        categoria: "Móveis",
        quantidade: 8
    },
    {
        id: 5,
        name: "Fone de Ouvido Bluetooth",
        description: "Fone de ouvido com cancelamento de ruído.",
        price: 250.00,
        image: "https://m.media-amazon.com/images/I/416MG51rNgL.__AC_SY445_SX342_QL70_ML2_.jpg",
        categoria: "Acessórios",
        quantidade: 20
    }
];



export default produtos;