import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('mangas')
class Manga {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  mangaName: String;

  @Column('decimal')
  cap: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Manga;

