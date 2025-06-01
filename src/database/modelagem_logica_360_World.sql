CREATE DATABASE 360World;

USE 360World;

-- Criação da tabela Usuário:
CREATE TABLE Usuario (
  idUsuario INT primary key auto_increment,
  nome VARCHAR(45) NOT NULL,
  gamertag VARCHAR(45),
  email VARCHAR(60) NOT NULL,
  senha VARCHAR(20) NOT NULL
);

-- Criação da tabela Jogos:
CREATE TABLE Jogos (
  idJogo INT PRIMARY KEY auto_increment,
  nome VARCHAR(60) NOT NULL,
  genero VARCHAR(45) NOT NULL,
  descricao VARCHAR(255) NOT NULL
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

SHOW TABLES;