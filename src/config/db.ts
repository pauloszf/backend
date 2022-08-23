import { AppDataSource } from '../shared/typeorm/data-source';

export const conectarServidorNoBD = async () => {
  const conexao = await AppDataSource.initialize();
  console.log(`App conectado ao BD ${conexao.options.database}`);

  process.on('SIGINT', () => {
    conexao.destroy().then(() => console.log('Conexão com o BD fechada'));
  });
};
