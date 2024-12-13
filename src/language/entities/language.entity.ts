import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Translation } from 'src/language/entities/translation.entity';
@Entity()
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @OneToMany(() => Translation, (translation) => translation.product)
  translation: Translation[];
}
