export class Training {
    id : number;
    name : string;
    description: string;
    price : number;
    quantity:number;
    

    constructor(id:number, name:string, description:string,price:number, quantity:number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity= quantity;
    }
};


export class Cart {
    id : number;
    name : string;
    quantity:number;
    price : number;
   
    constructor(id:number, name:string, description:string,price:number, quantity:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity= quantity;
    }
};

