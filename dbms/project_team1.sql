-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.31 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- project_team1 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `project_team1`;
CREATE DATABASE IF NOT EXISTS `project_team1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_team1`;

-- 테이블 project_team1.cart 구조 내보내기
DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id_cart` int NOT NULL,
  `id_user` varchar(45) NOT NULL,
  `id_class` int NOT NULL,
  PRIMARY KEY (`id_cart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.cart:~0 rows (대략적) 내보내기
DELETE FROM `cart`;

-- 테이블 project_team1.category 구조 내보내기
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id_category` int NOT NULL,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.category:~0 rows (대략적) 내보내기
DELETE FROM `category`;

-- 테이블 project_team1.class_dtl 구조 내보내기
DROP TABLE IF EXISTS `class_dtl`;
CREATE TABLE IF NOT EXISTS `class_dtl` (
  `id_class` int NOT NULL,
  `img` varchar(45) NOT NULL,
  `class_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `student_num` varchar(45) NOT NULL,
  `class_info_simple` varchar(45) NOT NULL,
  `class_info_dtl` varchar(45) NOT NULL,
  PRIMARY KEY (`id_class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.class_dtl:~0 rows (대략적) 내보내기
DELETE FROM `class_dtl`;

-- 테이블 project_team1.class_mst 구조 내보내기
DROP TABLE IF EXISTS `class_mst`;
CREATE TABLE IF NOT EXISTS `class_mst` (
  `id_class` int NOT NULL,
  `id_category` int NOT NULL,
  `id_difficulty` int NOT NULL,
  `id_instructor` int NOT NULL,
  `id_discount` int NOT NULL,
  PRIMARY KEY (`id_class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.class_mst:~0 rows (대략적) 내보내기
DELETE FROM `class_mst`;

-- 테이블 project_team1.curriculum 구조 내보내기
DROP TABLE IF EXISTS `curriculum`;
CREATE TABLE IF NOT EXISTS `curriculum` (
  `id_curriculum` int NOT NULL,
  `section` varchar(45) NOT NULL,
  `part` varchar(45) NOT NULL,
  `video` varchar(200) NOT NULL,
  `id_class` int NOT NULL,
  PRIMARY KEY (`id_curriculum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.curriculum:~0 rows (대략적) 내보내기
DELETE FROM `curriculum`;

-- 테이블 project_team1.difficulty 구조 내보내기
DROP TABLE IF EXISTS `difficulty`;
CREATE TABLE IF NOT EXISTS `difficulty` (
  `id_difficulty` int NOT NULL,
  `difficulty_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_difficulty`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.difficulty:~0 rows (대략적) 내보내기
DELETE FROM `difficulty`;

-- 테이블 project_team1.discount 구조 내보내기
DROP TABLE IF EXISTS `discount`;
CREATE TABLE IF NOT EXISTS `discount` (
  `id_discount` int NOT NULL,
  `discount_rate` int DEFAULT NULL,
  PRIMARY KEY (`id_discount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.discount:~0 rows (대략적) 내보내기
DELETE FROM `discount`;

-- 테이블 project_team1.instructor 구조 내보내기
DROP TABLE IF EXISTS `instructor`;
CREATE TABLE IF NOT EXISTS `instructor` (
  `id_instructor` int NOT NULL,
  `instructor_name` varchar(45) NOT NULL,
  `instructor_info` varchar(45) NOT NULL,
  `instructor_img` varchar(45) NOT NULL,
  PRIMARY KEY (`id_instructor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.instructor:~0 rows (대략적) 내보내기
DELETE FROM `instructor`;

-- 테이블 project_team1.order_dtl 구조 내보내기
DROP TABLE IF EXISTS `order_dtl`;
CREATE TABLE IF NOT EXISTS `order_dtl` (
  `id_order` int NOT NULL,
  `id_class` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_dtl:~0 rows (대략적) 내보내기
DELETE FROM `order_dtl`;

-- 테이블 project_team1.order_mst 구조 내보내기
DROP TABLE IF EXISTS `order_mst`;
CREATE TABLE IF NOT EXISTS `order_mst` (
  `id_order` int NOT NULL,
  `order_date` date NOT NULL,
  `id_user` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_mst:~0 rows (대략적) 내보내기
DELETE FROM `order_mst`;

-- 테이블 project_team1.review 구조 내보내기
DROP TABLE IF EXISTS `review`;
CREATE TABLE IF NOT EXISTS `review` (
  `id_review` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `id_user` varchar(45) NOT NULL,
  `contents` text NOT NULL,
  `id_class` int NOT NULL,
  `grade` float NOT NULL,
  PRIMARY KEY (`id_review`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.review:~0 rows (대략적) 내보내기
DELETE FROM `review`;

-- 테이블 project_team1.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(20) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `profile` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telnum` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.user:~0 rows (대략적) 내보내기
DELETE FROM `user`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
