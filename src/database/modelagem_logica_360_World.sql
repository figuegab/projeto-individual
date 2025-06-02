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
('Gabriel', 'gabileeu', 'gabriel.figueiredo@sptech.school', md5('123'));

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

-- -------------------------------------------------------------------------------------- SELECTS ----------------------------------------------------------------------------------------------------------

-- AUTENTICAÇÃO
-- --------------------------------------------------------------------------- Select de buscar as informações do usuários ------------------------------------------------------------------------------------------------
SELECT idUsuario, nome, gamertag, email FROM usuario WHERE email = '${email}' AND senha = MD5('${senha}');

-- CARDS DOS JOGOS / BIBLIOTECA
-- --------------------------------------------------------------------------- Select de exibir os cards dos jogos ------------------------------------------------------------------------------------------------
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

-- GRÁFICO
-- --------------------------------------------------------------------------- Select de exibir quantidade de comentarios no grafico ------------------------------------------------------------------------------------------------
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

-- PÁGINA COMENTÁRIOS
-- --------------------------------------------------------------------------- Select de buscar comentarios ------------------------------------------------------------------------------------------------
SELECT 
	j.nome AS nome_jogo,
	c.descricao AS comentario,
	u.nome AS autor,
	u.gamertag AS gamertag
FROM Comentario c
JOIN Usuario u ON c.fkUsuario = u.idUsuario
JOIN Jogos j ON c.fkJogo = j.idJogo;