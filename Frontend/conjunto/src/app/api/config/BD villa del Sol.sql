CREATE DATABASE villaDelSol;
use  villaDelSol;

SET SQL_SAFE_UPDATES = 0;

SHOW TABLES;

DESCRIBE Propietarios;
DESCRIBE Administradores;
DESCRIBE Residentes;
DESCRIBE Apartamentos;
DESCRIBE Mensajes;
DESCRIBE Notificaciones;
DESCRIBE Pagos;
DESCRIBE Visitantes;

SELECT * FROM Administradores;
SELECT * FROM Apartamentos;
SELECT * FROM Propietarios;
SELECT * FROM Residentes;
SELECT * FROM Visitantes;
SELECT * FROM SequelizeMeta;

SELECT * FROM Residentes WHERE email = 'vasquezdianakatherine@gmail.com';


DELETE FROM Apartamentos;
DELETE FROM Propietarios;
DELETE FROM Residentes;

ALTER TABLE Residentes 
ADD COLUMN propietarioId INT NULL;


DESC Propietarios;
DESC Residentes;
DESC Administradores;

DELETE FROM Propietarios;

DELETE FROM Propietarios
WHERE idPropietario = 39;

DELETE FROM Residentes
WHERE idResidente = 22;

INSERT INTO Administrador (nombre, apellido, email, cc, telefono, rol, sexo, contraseña, createdAt, updatedAt)
VALUES ('kath', 'Vasquez', 'vasquezdianakatherine@gmail.com', '123456789', '3001234567', 'Administrador', 'Masculino', SHA2('kathe', 256), NOW(), NOW());

INSERT INTO Administradores (nombre, apellido, email, cc, telefono, rol, sexo, contraseña)
VALUES ('NombreAdmin', 'ApellidoAdmin', 'admin@example.com', '123456789', '1234567890', 'Administrador', 'otro', '$2b$10$anMFXFygz5izU1QATErdEOgZM/hOxomJeUeqGImYnevE.eHEF0xJS');