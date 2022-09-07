import User from "@modules/users/typeorm/entities/User";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import MangaListMangas from "./MangaListMangas";

@Entity('mangas_list')
class MangaList {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'userL_id'})
  user: User;

  @OneToMany(() => MangaListMangas, mangaListManga => mangaListManga.mangaList, {
    cascade: true,
  })
  mangaListManga: MangaListMangas[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default MangaList;
