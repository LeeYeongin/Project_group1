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
  `id_cart` int NOT NULL AUTO_INCREMENT,
  `id_user` varchar(45) NOT NULL,
  `id_class` int NOT NULL,
  PRIMARY KEY (`id_cart`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.cart:~3 rows (대략적) 내보내기
DELETE FROM `cart`;
INSERT INTO `cart` (`id_cart`, `id_user`, `id_class`) VALUES
	(1, 'aaa', 1),
	(2, 'bbb', 2),
	(3, 'aaa', 2);

-- 테이블 project_team1.class 구조 내보내기
DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `id_class` int NOT NULL AUTO_INCREMENT,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `class_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `student_count` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `class_info_simple` varchar(45) NOT NULL,
  `class_info_dtl` varchar(45) NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `difficulty` varchar(50) NOT NULL,
  `discount_rate` int DEFAULT '0',
  `instructor` varchar(50) NOT NULL,
  PRIMARY KEY (`id_class`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.class:~2 rows (대략적) 내보내기
DELETE FROM `class`;
INSERT INTO `class` (`id_class`, `img`, `class_name`, `price`, `student_count`, `class_info_simple`, `class_info_dtl`, `category`, `difficulty`, `discount_rate`, `instructor`) VALUES
	(1, 'data:image/jpeg;base64,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', 'aa', 8000, '2', 'asf', 'assd', 'front', 'aaa', 0, 'aaa'),
	(2, 'data:image/jpeg;base64,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', 'bb', 9000, '2', 'asf', 'assd', 'front', 'aaa', 0, 'bbb'),
	(3, 'data:image/jpeg;base64,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', 'cc', 10000, '2', 'asf', 'assd', 'front', 'aaa', 0, 'ccc');

-- 테이블 project_team1.curriculum 구조 내보내기
DROP TABLE IF EXISTS `curriculum`;
CREATE TABLE IF NOT EXISTS `curriculum` (
  `id_curriculum` int NOT NULL AUTO_INCREMENT,
  `section` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `part` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `video` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `id_class` int DEFAULT NULL,
  PRIMARY KEY (`id_curriculum`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.curriculum:~0 rows (대략적) 내보내기
DELETE FROM `curriculum`;

-- 테이블 project_team1.instructor 구조 내보내기
DROP TABLE IF EXISTS `instructor`;
CREATE TABLE IF NOT EXISTS `instructor` (
  `id_instructor` int NOT NULL AUTO_INCREMENT,
  `instructor_name` varchar(45) NOT NULL,
  `instructor_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `instructor_img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id_instructor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.instructor:~0 rows (대략적) 내보내기
DELETE FROM `instructor`;

-- 테이블 project_team1.order_dtl 구조 내보내기
DROP TABLE IF EXISTS `order_dtl`;
CREATE TABLE IF NOT EXISTS `order_dtl` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `id_class` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_dtl:~0 rows (대략적) 내보내기
DELETE FROM `order_dtl`;

-- 테이블 project_team1.order_mst 구조 내보내기
DROP TABLE IF EXISTS `order_mst`;
CREATE TABLE IF NOT EXISTS `order_mst` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `id_user` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_mst:~0 rows (대략적) 내보내기
DELETE FROM `order_mst`;

-- 테이블 project_team1.review 구조 내보내기
DROP TABLE IF EXISTS `review`;
CREATE TABLE IF NOT EXISTS `review` (
  `id_review` int NOT NULL AUTO_INCREMENT,
  `id_user` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contents` text NOT NULL,
  `id_class` int NOT NULL,
  `grade` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_review`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.review:~4 rows (대략적) 내보내기
DELETE FROM `review`;
INSERT INTO `review` (`id_review`, `id_user`, `contents`, `id_class`, `grade`) VALUES
	(1, 'aaa', '1', 1, 1),
	(2, 'aaa', '1', 2, 2),
	(3, 'bbb', '1', 3, 3),
	(4, 'bbb', '1', 1, 3);

-- 테이블 project_team1.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `nickname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telnum` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.user:~1 rows (대략적) 내보내기
DELETE FROM `user`;
INSERT INTO `user` (`id`, `password`, `name`, `profile`, `nickname`, `email`, `telnum`) VALUES
	('aaa', 'aaa123', '가나다', NULL, 'aaa', 'aaa@naver.com', '010-1234-5678');

-- 트리거 project_team1.order_mst_after_insert 구조 내보내기
DROP TRIGGER IF EXISTS `order_mst_after_insert`;
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `order_mst_after_insert` AFTER INSERT ON `order_mst` FOR EACH ROW BEGIN
	INSERT into

		order_dtl

		(id_order)

	values

		(NEW.id_order);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
