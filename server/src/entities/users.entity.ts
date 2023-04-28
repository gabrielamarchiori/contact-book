import { hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contatc } from "./contacts.entity";

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    fullName: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    telefone: string

    @Column({default: true})
    isActive: boolean

    @Column({default: false})
    isAdmin: boolean

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(() => Contatc, (contact) => contact.user)
    contact: Contatc[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}

export {User}