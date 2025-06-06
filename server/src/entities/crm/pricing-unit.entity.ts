import { BaseEntity, Column, Entity } from "typeorm";

@Entity('pricing-unit')
export class Pricing extends BaseEntity{
    @Column({ type: 'nvarchar', length: 60 })
    type:string;
    @Column({ type: 'nvarchar', length: 60 })
    desc:string;
    @Column()
    unitprice:number;
}