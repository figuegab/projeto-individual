DROP DATABASE 360World;

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
('Gabriel', 'gabileeu', 'gabriel.figueiredo@sptech.school', md5('123')),
('Frizza', 'claudinho_games_hd', 'frizza@sptech.school', MD5('123')),
('Paula', 'paulinha_FPS', 'paula@sptech.school', MD5('123'));

SELECT * FROM Usuario;

INSERT INTO Jogos (nome, genero, descricao, urlImagem) VALUES
('Minecraft', 'Sandbox', 'Um jogo de construção e aventura em mundo aberto', 'https://tse3.mm.bing.net/th/id/OIP.e7MgPZ7G2J5jO952pg5_xQHaKt?rs=1&pid=ImgDetMain'),
('Halo 4', 'FPS', 'A continuação da saga do Master Chief', 'https://tse2.mm.bing.net/th/id/OIP.paOZSyZpMu-IisOLMGuLJgHaKh?rs=1&pid=ImgDetMain'),
('Call of Duty: Black Ops 2', 'FPS', 'Jogo de tiro em primeira pessoa da famosa série Call of Duty', 'https://tse1.mm.bing.net/th/id/OIP.Qa8F7FaEoQ7qkRQ7EVJtJAHaKb?w=600&h=845&rs=1&pid=ImgDetMain'),
('PES 2013', 'Esporte', 'Pro Evolution Soccer 2013 - simulador de futebol', 'https://tse1.mm.bing.net/th/id/OIP.bSkj7VNRduUdMU1sbzv5sAHaKf?rs=1&pid=ImgDetMain'),
('FIFA 15', 'Esporte', 'Jogo de futebol da EA Sports', 'https://www.mobygames.com/images/covers/l/516601-fifa-15-xbox-360-front-cover.jpg'),
('GTA V', 'Ação/Aventura', 'Grand Theft Auto V - mundo aberto com diversas atividades', 'https://tse2.mm.bing.net/th/id/OIP.gBMTsCNmshnOreFOMItMZAHaKd?rs=1&pid=ImgDetMain'),
('Cars 2', 'Corrida', 'Jogo baseado no filme da Disney/Pixar', 'https://images-na.ssl-images-amazon.com/images/I/91ztbGOktVL._AC_SL1500_.jpg'),
('Toy Story 3', 'Aventura', 'Jogo baseado no filme da Disney/Pixar', 'https://www.lukiegames.com/assets/images/Xbox-360/x360_toy_story_3_p_mo6yws.jpg'),
('Rayman Origins', 'Plataforma', 'Jogo de plataforma 2D com visuais impressionantes', 'https://tse3.mm.bing.net/th/id/OIP.OHzxzV2resF3CJ7Xn8lfbgHaKc?rs=1&pid=ImgDetMain'),
('Mortal Kombat 9', 'Luta', 'Jogo de luta com violência extrema e fatalities', 'https://m.media-amazon.com/images/I/61sHkx-vLlL._AC_UF1000,1000_QL80_.jpg'),
('Skate 3', 'Esporte', 'Simulador de skate com física realista', 'https://store-images.s-microsoft.com/image/apps.18720.68005754082254855.39795a60-73cf-4461-87d9-7f112c30c43c.46888afa-996b-4016-b5b4-c2e0b78171e2'),
('Midnight Club: Los Angeles', 'Corrida', 'Jogo de corrida em mundo aberto', 'https://acdn-us.mitiendanube.com/stores/001/450/384/products/midnigth-club-f6caa74b9d3203309717384385263591-480-0.jpg'),
('Forza Horizon', 'Corrida', 'Jogo de corrida em mundo aberto com gráficos impressionantes', 'https://http2.mlstatic.com/D_NQ_NP_915345-MLA80112762630_112024-O.webp'),
('Lego Batman', 'Aventura', 'Jogo de aventura com tema do Batman em universo Lego', 'https://m.media-amazon.com/images/I/61kH8EaZ+BL._AC_UF1000,1000_QL80_.jpg'),
('Lego Marvel Super Heroes', 'Aventura', 'Jogo de aventura com heróis da Marvel em universo Lego', 'https://m.media-amazon.com/images/I/61GWlP9kknL.jpg'),
('Kinect Sports', 'Esporte', 'Jogo de esportes que utiliza o sensor Kinect', 'https://tse2.mm.bing.net/th/id/OIP.pwZTdgx2QdDaZrdrI3hhcwHaKe?rs=1&pid=ImgDetMain'),
('Just Dance', 'Ritmo', 'Jogo de dança com músicas populares', 'https://m.media-amazon.com/images/I/91pEyUmTd8L.jpg'),
('Dance Central 2', 'Ritmo', 'Jogo de dança desenvolvido para o Kinect', 'https://m.media-amazon.com/images/I/81aG4Bf3iRL._AC_UF1000,1000_QL80_.jpg');

SELECT * FROM Jogos;

INSERT INTO Comentario (descricao, fkUsuario, fkJogo) VALUES
('GTA V continua sendo o melhor jogo de mundo aberto', 2, 6),
('Minecraft é viciante! Passei 10 horas construindo hoje', 3, 1),
('Halo 4 tem uma história emocionante', 3, 2),
('FIFA 15 envelheceu mal, mas na época foi revolucionário', 2, 5),
('Dance Central 2 é o melhor jogo de dança que já joguei', 3, 18),
('Mortal Kombat 9 é violento demais pra mim', 2, 10),
('Rayman Origins tem os visuais mais bonitos do 360', 3, 9),
('COD BO 2 tem o melhor modo zombies', 2, 3),
('Forza Horizon mudou minha visão sobre jogos de corrida', 3, 13),
('Kinect Sports é bom pra jogar em família', 2, 16),
('Midnight Club LA tem customização incrível', 3, 12),
('Cars 2 é melhor do que eu esperava', 2, 7),
('PES 2013 tem um controle de bola incrível', 3, 4),
('Lego Marvel Super Heroes é cheio de easter eggs', 2, 15),
('Just Dance é divertido mas cansa rápido', 3, 17),
('Toy Story 3 me fez sentir criança de novo', 2, 8),
('Lego Batman tem um humor incrível', 3, 14),
('Skate 3 tem a melhor física da série', 2, 11);

SELECT * FROM Comentario;

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

-- --------------------------------------------------------------------------- Insert de criar comentário ------------------------------------------------------------------------------------------------
INSERT INTO Comentario (descricao, fkUsuario, fkJogo) VALUES
('Descrição do comentário', 1, 1); -- '${descricao}', ${fkUsuario}, ${fkJogo}

-- PÁGINA PERFIL
-- --------------------------------------------------------------------------- Select de buscar 3 últimmos comentários do usuário ------------------------------------------------------------------------------------------------
SELECT 
	j.nome AS nome_jogo,
	c.descricao AS comentario,
	u.nome AS autor,
	u.gamertag AS gamertag
FROM Comentario c
JOIN Usuario u ON c.fkUsuario = u.idUsuario
JOIN Jogos j ON c.fkJogo = j.idJogo
WHERE fkUsuario = 1 -- ${fkUsuario}
ORDER BY c.idComentario DESC
LIMIT 3;
-- --------------------------------------------------------------------------- Select de buscar quantidade de comentários ------------------------------------------------------------------------------------------------
SELECT 
    COUNT(*) AS total_comentarios
FROM Comentario
WHERE fkUsuario = 1; -- {fkUsuario}

-- --------------------------------------------------------------------------- Select de buscar jogo mais comentado ------------------------------------------------------------------------------------------------
SELECT 
    COUNT(c.idComentario) AS total_comentarios,
    j.nome AS nome_jogo
FROM Comentario c
JOIN Jogos j ON c.fkJogo = j.idJogo
WHERE c.fkUsuario = 1 -- {fkUsuario}
GROUP BY j.nome
ORDER BY total_comentarios DESC
LIMIT 1;