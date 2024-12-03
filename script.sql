DO $$
BEGIN
	--Creacion de bse de datos
	CREATE DATABASE postgres;

    -- Creacion del esquema
    CREATE SCHEMA IF NOT EXISTS grupotc;

    -- Creación de la tabla Ciudad
    CREATE TABLE IF NOT EXISTS grupotc.Ciudad (
        idCiudad SERIAL,
        nombre VARCHAR(100) NOT NULL,
        PRIMARY KEY (idCiudad)
    );

    -- Creación de la tabla MetodoPago
    CREATE TABLE IF NOT EXISTS grupotc.MetodoPago (
        idMetodo SERIAL,
        tipo VARCHAR(50) NOT NULL,
        PRIMARY KEY (idMetodo)
    );

    -- Creación de la tabla Categoria
    CREATE TABLE IF NOT EXISTS grupotc.Categoria (
        idCategoria SERIAL,
        nombre VARCHAR(100) NOT NULL,
        PRIMARY KEY (idCategoria)
    );

    -- Creación de la tabla Cliente
    CREATE TABLE IF NOT EXISTS grupotc.Cliente (
        idCliente int,
        cedula VARCHAR(20) UNIQUE NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellido VARCHAR(100) NOT NULL,
        direccion VARCHAR(255),
        telefono object(20),
        email VARCHAR(100),
        ciudad_id INT,
		fechaNac date not null,
        PRIMARY KEY (idCliente),
        FOREIGN KEY (ciudad_id) REFERENCES grupotc.Ciudad(idCiudad)
    );

    -- Creación de la tabla Empleado
    CREATE TABLE IF NOT EXISTS grupotc.Empleado (
        idEmpleado SERIAL,
        cedula VARCHAR(20) UNIQUE NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellido VARCHAR(100) NOT NULL,
        especialidad VARCHAR(50),
        PRIMARY KEY (idEmpleado)
    );

    -- Creación de la tabla Producto
    CREATE TABLE IF NOT EXISTS grupotc.Producto (
        idProducto SERIAL,
        nombre VARCHAR(100) NOT NULL,
        descripcion VARCHAR(255),
        precio DECIMAL(10,2),
        stock INT,
        categoria_id INT,
        PRIMARY KEY (idProducto),
        FOREIGN KEY (categoria_id) REFERENCES grupotc.Categoria(idCategoria)
    );

    -- Creación de la tabla Compra
    CREATE TABLE IF NOT EXISTS grupotc.Compra (
        idCompra SERIAL,
        cliente_id INT,
        fecha DATE,
        metodo_pago_id INT,
        PRIMARY KEY (idCompra),
        FOREIGN KEY (cliente_id) REFERENCES grupotc.Cliente(idCliente),
        FOREIGN KEY (metodo_pago_id) REFERENCES grupotc.MetodoPago(idMetodo)
    );

    -- Creación de la tabla CompraProducto para relación muchos a muchos entre Compra y Producto
    CREATE TABLE IF NOT EXISTS grupotc.CompraProducto (
        idCompra INT,
        idProducto INT,
        cantidad INT,
        PRIMARY KEY (idCompra, idProducto),
        FOREIGN KEY (idCompra) REFERENCES grupotc.Compra(idCompra),
        FOREIGN KEY (idProducto) REFERENCES grupotc.Producto(idProducto)
    );

    -- Creación de la tabla CitaTecnica
    CREATE TABLE IF NOT EXISTS grupotc.CitaTecnica (
        idCita SERIAL,
        idEmpleado INT,
        idCliente INT,
        fecha DATE,
        descripcion VARCHAR(255),
        PRIMARY KEY (idCita),
        FOREIGN KEY (idEmpleado) REFERENCES grupotc.Empleado(idEmpleado),
        FOREIGN KEY (idCliente) REFERENCES grupotc.Cliente(idCliente)
    );

/*
    -- Ejemplo de inserciones en la tabla Ciudad
    INSERT INTO grupotc.Ciudad (nombre) VALUES ('Ciudad A'), ('Ciudad B'), ('Ciudad C');

    -- Ejemplo de inserciones en la tabla MetodoPago
    INSERT INTO grupotc.MetodoPago (tipo) VALUES ('Tarjeta de Crédito'), ('Efectivo'), ('Transferencia');

    -- Ejemplo de inserciones en la tabla Categoria
    INSERT INTO grupotc.Categoria (nombre) VALUES ('Electrónica'), ('Ropa'), ('Alimentos');

    -- Ejemplo de inserciones en la tabla Cliente
    INSERT INTO grupotc.Cliente (cedula, nombre, apellido, direccion, celular, email, ciudad_id)
    VALUES 
        ('1234567890', 'Juan', 'Pérez', 'Calle 1', '123456789', 'juan.perez@example.com', 1),
        ('0987654321', 'Ana', 'López', 'Calle 2', '987654321', 'ana.lopez@example.com', 2);

    -- Ejemplo de inserciones en la tabla Empleado
    INSERT INTO grupotc.Empleado (cedula, nombre, apellido, especialidad)
    VALUES 
        ('1122334455', 'Carlos', 'Martínez', 'Técnico de Reparación'),
        ('5566778899', 'Laura', 'García', 'Atención al Cliente');

    -- Ejemplo de inserciones en la tabla Producto
    INSERT INTO grupotc.Producto (nombre, descripcion, precio, stock, categoria_id)
    VALUES 
        ('Laptop', 'Laptop de última generación', 1200.00, 10, 1),
        ('Camiseta', 'Camiseta de algodón', 20.00, 50, 2),
        ('Cereal', 'Cereal de desayuno', 5.00, 100, 3);

    -- Ejemplo de inserciones en la tabla Compra
    INSERT INTO grupotc.Compra (cliente_id, fecha, metodo_pago_id)
    VALUES 
        (1, '2024-01-01', 1),
        (2, '2024-01-02', 2);

    -- Ejemplo de inserciones en la tabla CompraProducto
    INSERT INTO grupotc.CompraProducto (idCompra, idProducto, cantidad)
    VALUES 
        (1, 1, 1),
        (1, 2, 3),
        (2, 3, 2);

    -- Ejemplo de inserciones en la tabla CitaTecnica
    INSERT INTO grupotc.CitaTecnica (idEmpleado, idCliente, fecha, descripcion)
    VALUES 
        (1, 1, '2024-02-01', 'Revisión técnica de laptop'),
        (2, 2, '2024-02-02', 'Atención en servicio al cliente');
 */ 
END $$;
