import MangaListMangas from '@modules/mangasList/typeorm/entities/MangaListMangas';
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity('mangas')
class Manga {

  @PrimaryGeneratedColumn('uuid')
  id: String;

  @OneToMany(() => MangaListMangas, mangaListManga => mangaListManga.manga)
  mangaListManga: MangaListMangas[];

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

