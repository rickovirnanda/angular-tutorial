export class Barang{
    id: number;
    name: string;
    cratedDate:string;
    stock:number;
    description:string;
    price:number;
    imgUrl:string

    constructor()
    {
        this.id = 0;
        this.name = "";
        this.cratedDate = "";
        this.stock = 0;
        this.description = "";
        this.price = 0;
        this.imgUrl = "";
    }
}