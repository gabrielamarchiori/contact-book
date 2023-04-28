import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity('contacts')
class Contatc {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    fullName: string

    @Column({unique: true})
    email: string

    @Column()
    telefone: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (user) => user.contact, {eager:true, onDelete: 'CASCADE'})
    user: User
}

export {Contatc}