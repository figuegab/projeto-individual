-- DROP DATABASE 360World;

CREATE DATABASE 360World;

USE 360World;

-- Criação da tabela Usuário:
CREATE TABLE Usuario (
  idUsuario INT primary key auto_increment,
  nome VARCHAR(45) NOT NULL,
  gamertag VARCHAR(45),
  email VARCHAR(60) NOT NULL,
  senha VARCHAR(255) NOT NULL
);

-- Criação da tabela Jogos:
CREATE TABLE Jogos (
  idJogo INT PRIMARY KEY auto_increment,
  nome VARCHAR(60) NOT NULL,
  genero VARCHAR(45) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  urlImagem VARCHAR(455) NOT NULL
);

-- Criação da tabela Comentário:
CREATE TABLE Comentario (
  idComentario INT primary key auto_increment,
  descricao VARCHAR(255) NOT NULL,
  fkUsuario INT NOT NULL,
  fkJogo INT NOT NULL,
  CONSTRAINT fk_Avaliacao_Usuario
    FOREIGN KEY (fkUsuario)
    REFERENCES Usuario (idUsuario),
  CONSTRAINT fk_Avaliacao_Jogos
    FOREIGN KEY (fkJogo)
    REFERENCES Jogos (idJogo)
);

INSERT INTO Usuario (nome, gamertag, email, senha) VALUES
('Alice Martins', 'AliMart', 'alice@email.com', 'senha123'),
('Bruno Souza', 'BSouza', 'bruno@email.com', 'senha456'),
('Gabriel', 'Gabriel', '123', '123'),
('Carla Dias', 'CDiasX', 'carla@email.com', 'senha789');

INSERT INTO Jogos (nome, genero, descricao, urlImagem) VALUES
('Minecraft', 'Sandbox', 'Construa e explore mundos infinitos com blocos.', 'https://tse3.mm.bing.net/th/id/OIP.e7MgPZ7G2J5jO952pg5_xQHaKt?rs=1&pid=ImgDetMain'),
('Halo 4', 'FPS', 'Lute contra forças alienígenas como Master Chief em uma guerra épica.', 'https://tse2.mm.bing.net/th/id/OIP.paOZSyZpMu-IisOLMGuLJgHaKh?rs=1&pid=ImgDetMain'),
('Kinect Sports', 'Esporte', 'Jogue esportes com movimentos do corpo usando o Kinect.', 'https://tse2.mm.bing.net/th/id/OIP.pwZTdgx2QdDaZrdrI3hhcwHaKe?rs=1&pid=ImgDetMain'),
('Call of Duty: Black Ops II', 'FPS', 'Combate futurista com narrativa envolvente em primeira pessoa.', 'https://tse1.mm.bing.net/th/id/OIP.Qa8F7FaEoQ7qkRQ7EVJtJAHaKb?w=600&h=845&rs=1&pid=ImgDetMain'),
('PES 2013', 'Esporte', 'Simulação de futebol com jogabilidade rápida e fluida.', 'https://tse1.mm.bing.net/th/id/OIP.bSkj7VNRduUdMU1sbzv5sAHaKf?rs=1&pid=ImgDetMain'),
('FIFA 15', 'Esporte', 'Futebol com gráficos realistas e jogabilidade refinada.', 'https://www.mobygames.com/images/covers/l/516601-fifa-15-xbox-360-front-cover.jpg'),
('FIFA Street', 'Esporte', 'Futebol de rua com dribles espetaculares e partidas rápidas.', 'https://www.lukiegames.com/assets/images/x360_fifa_street.jpg'),
('Cars 2', 'Corrida', 'Corridas emocionantes com os personagens do filme Carros 2.', 'https://images-na.ssl-images-amazon.com/images/I/91ztbGOktVL._AC_SL1500_.jpg'),
('Toy Story 3', 'Aventura', 'Jogo baseado no filme com missões cooperativas e ação divertida.', 'https://www.lukiegames.com/assets/images/Xbox-360/x360_toy_story_3_p_mo6yws.jpg'),
('GTA V', 'Ação', 'Mundo aberto com missões criminais e liberdade total de exploração.', 'https://tse2.mm.bing.net/th/id/OIP.gBMTsCNmshnOreFOMItMZAHaKd?rs=1&pid=ImgDetMain'),
('Rayman Origins', 'Plataforma', 'Jogo de plataforma com gráficos vibrantes e jogabilidade cooperativa.', 'https://tse3.mm.bing.net/th/id/OIP.OHzxzV2resF3CJ7Xn8lfbgHaKc?rs=1&pid=ImgDetMain');


INSERT INTO Comentario (descricao, fkUsuario, fkJogo) VALUES
-- Minecraft
('Melhor jogo para liberar a criatividade!', 4, 1),
('As atualizações deixam o jogo cada vez melhor.', 3, 1),

-- Halo 4
('Campanha muito emocionante, trilha sonora perfeita.', 2, 2),
('Multiplayer equilibrado e viciante.', 1, 2),

-- Kinect Sports
('Muito legal jogar com a família, pura diversão!', 2, 3),
('Cansa rápido, mas é divertido com amigos.', 4, 3),

-- Call of Duty: Black Ops II
('O modo zumbi é simplesmente incrível!', 3, 4),
('Um dos melhores CoDs já feitos.', 1, 4),

-- PES 2013
('Jogabilidade fluida, senti nostalgia jogando!', 3, 5),
('Muito melhor que o FIFA dessa época.', 1, 5),

-- FIFA 15
('Gráficos bons, mas IA ainda deixa a desejar.', 2, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),('Gráficos bons, mas IA ainda deixa a desejar.', 2, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),
('Um clássico! Voltei a jogar depois de anos.', 4, 6),

-- FIFA Street
('Dribles insanos, muito divertido!', 3, 7),
('Estilo arcade que diverte bastante.', 2, 7),
('Estilo arcade que diverte bastante.', 2, 7),

-- Cars 2
('Ótimo para crianças, controles simples.', 1, 8),
('Me surpreendeu, bem mais divertido do que esperava.', 3, 8),

-- Toy Story 3
('Jogo leve e com bastante conteúdo para explorar.', 4, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),
('Perfeito para jogar em família.', 2, 9),

-- GTA V
('História envolvente e mundo aberto gigantesco!', 1, 10),
('O melhor sandbox da geração.', 2, 10),
('História envolvente e mundo aberto gigantesco!', 1, 10),
('O melhor sandbox da geração.', 2, 10),

-- Rayman Origins
('Plataforma divertido com arte lindíssima!', 3, 11),
('Jogo desafiador e viciante, trilha sonora top.', 4, 11);



SELECT nome, genero, descricao, urlImagem FROM jogos;

SELECT 
    j.nome,
    j.genero,
    j.descricao,
    j.urlImagem,
    COUNT(c.idComentario) AS qtdComentarios
FROM 
    Jogos j
LEFT JOIN 
    Comentario c ON j.idJogo = c.fkJogo
GROUP BY 
    j.idJogo, j.nome, j.genero, j.descricao
ORDER BY 
    qtdComentarios DESC;
    
SELECT 
    j.nome,
    COUNT(c.idComentario) AS qtdComentarios
FROM 
    Jogos j
LEFT JOIN 
    Comentario c ON j.idJogo = c.fkJogo
GROUP BY 
    j.idJogo, j.nome, j.genero, j.descricao
ORDER BY 
    qtdComentarios DESC
LIMIT 8;

SELECT 
  j.nome AS nomeJogo,
  c.descricao AS comentario,
  u.nome AS autor
FROM Comentario c
JOIN Usuario u ON c.fkUsuario = u.idUsuario
JOIN Jogos j ON c.fkJogo = j.idJogo;
