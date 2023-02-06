export class ShopModel {
  shopItems: any;

  constructor() {
    this.shopItems = [
      {
        title: 'Camiseta Paisaje',
        desc: 'Camiseta con ilustaciones paisajisticas',
        picture: 'assets/camiseta1.jpg',
        price: '164',
      },
      {
        title: 'Camiseta retrato',
        desc: 'Retrato de tu personaje favorito',
        picture: 'assets/camiseta2.jpg',
        price: 220,
      },
      {
        title: 'Camiseta personalizada',
        desc: 'Muñecos realizados a mano con las características que te gusten',
        picture: 'assets/camiseta3.jpg',
        price: 420,
      },
    ];
  }
}
