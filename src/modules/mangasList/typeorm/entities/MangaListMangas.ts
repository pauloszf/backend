import Manga from "@modules/mangas/typeorm/entities/Manga";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import MangaList from "./MangaList";

@Entity('mangasCap_list')
class MangaListMangas {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => MangaList, mangaList => mangaList.mangaListManga)
  @JoinColumn({name: 'mangaList_id'})
  mangaList: MangaList;

  @ManyToOne(() => Manga, manga => manga.mangaListManga)
  @JoinColumn({name: 'manga_id'})
  manga: Manga;

  @Column()
  mangaList_id: string;

  @Column()
  manga_id: string;

  @Column('decimal')
  cap: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MangaListMangas;
