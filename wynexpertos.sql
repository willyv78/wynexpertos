-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-04-2017 a las 00:14:09
-- Versión del servidor: 5.5.42
-- Versión de PHP: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `wynexpertos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wyn_contacto`
--

CREATE TABLE `wyn_contacto` (
  `wyn_contacto_id` int(8) NOT NULL COMMENT 'Id del registro',
  `wyn_contacto_nom` varchar(100) COLLATE latin1_general_ci NOT NULL COMMENT 'Nombre',
  `wyn_contacto_email` varchar(100) COLLATE latin1_general_ci NOT NULL COMMENT 'Email',
  `wyn_contacto_tel` int(15) NOT NULL COMMENT 'Telèfono',
  `wyn_contacto_men` longblob NOT NULL COMMENT 'Mensaje',
  `wyn_contacto_fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de ingreso'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Truncar tablas antes de insertar `wyn_contacto`
--

TRUNCATE TABLE `wyn_contacto`;
--
-- Volcado de datos para la tabla `wyn_contacto`
--

INSERT INTO `wyn_contacto` (`wyn_contacto_id`, `wyn_contacto_nom`, `wyn_contacto_email`, `wyn_contacto_tel`, `wyn_contacto_men`, `wyn_contacto_fecha`) VALUES
(1, 'Wilson Velandia', 'willyv78@gmail.com', 2147483647, 0x4e6563657369746f20756e6120636f74697a616369c3b36e, '2017-04-09 23:11:24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wyn_contacto`
--
ALTER TABLE `wyn_contacto`
  ADD PRIMARY KEY (`wyn_contacto_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wyn_contacto`
--
ALTER TABLE `wyn_contacto`
  MODIFY `wyn_contacto_id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id del registro',AUTO_INCREMENT=2;