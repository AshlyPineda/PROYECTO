import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    categoria: string;
    precio: number;
    descripcion: string;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
