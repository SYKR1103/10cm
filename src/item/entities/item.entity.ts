import {  Entity, Column, PrimaryColumn } from "typeorm";


@Entity()


export class Item {


    @PrimaryColumn("uuid")
    public id:string;

    @Column()
    public desc : string;

    @Column()
    public name : string;

    @Column()
    public price : number;

    @Column({default:true})
    public isSealed : Boolean







}
