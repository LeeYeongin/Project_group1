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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.cart:~4 rows (대략적) 내보내기
DELETE FROM `cart`;
INSERT INTO `cart` (`id_cart`, `id_user`, `id_class`) VALUES
	(1, 'aaa', 13),
	(2, 'bbb', 2),
	(3, 'aaa', 5),
	(4, 'aaa', 30);

-- 테이블 project_team1.class 구조 내보내기
DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `id_class` int DEFAULT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `class_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `student_count` int DEFAULT '0',
  `class_info_simple` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `class_info_dtl` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `difficulty` varchar(50) DEFAULT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `discount_rate` int DEFAULT NULL,
  `instructor` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.class:~85 rows (대략적) 내보내기
DELETE FROM `class`;
INSERT INTO `class` (`id_class`, `img`, `class_name`, `price`, `student_count`, `class_info_simple`, `class_info_dtl`, `difficulty`, `category`, `discount_rate`, `instructor`) VALUES
	(1, 'https://cdn.inflearn.com/public/courses/329963/cover/d2bd8295-0f8c-4947-9555-68785b871a67/329963-original.png', '[인프런x코드캠프] 부트캠프에서 만든 고농축 프론트엔드 코스', 20000, 0, '초급자를 위해 준비한\n[프론트엔드] 강의입니다.', '1년간 300여명의 개발자를 배출한 ‘진짜’ 부트캠프의 고농축 커리큘럼 입니다. 이 강의 하나로 여러분은 현업 주니어 개발자 수준까지 성 장 가능하며, 프론트엔드 기술스택의 활용 능력과 지식을 얻게 될거에요. 누구나 사회적, 경제적, 교육적 배경에 상관없이 커리어를 쌓을 수 있도록, [인 프런X코드캠프]가 준비했습니다 :)', 'easy', 'front', 0, '1'),
	(2, 'https://cdn.inflearn.com/public/courses/329913/cover/eee923cc-911b-4c2d-a445-9fddee8e5992/thumbnail-precamp.png', '[인프런x코드캠프] 시작은 프리캠프', 10000, 0, '입문자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '코딩 부트캠프의 독보적인 커리큘럼으로 만든 강의입니다. 가장 기초적이고 실무에서 꼭 필요한 내용들로 구성되어 있어요. 누구나 가능한 개발자로의 커리어 전환 이 강의로 시작하세요.', 'middle', 'front', 1, '1'),
	(3, 'https://cdn.inflearn.com/public/courses/329347/cover/5b9bcc16-210e-4655-b727-7625cda008a8/329347-eng.png', '따라하며 배우는 노드, 리액트 시리즈 - 레딧 사이트 만들기(NextJS)', 20000, 0, '초급자를 위해  준비한\n[풀스택, 프론트엔드] 강의입니다.', '이 강의를 통해서 레딧 웹사이트를 처음부터 하나하나 만들어 보실 수 있습니다.', 'easy', 'front', 0, '2'),
	(4, 'https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png', '따라하며 배우는 리액트 A-Z', 20000, 0, '초급자를 위해 준비한\n[프론트엔드, 웹  개발] 강의입니다.', '이 강의를 통해 리액트 기초부터 중급까지 배우게 됩니다. 하나의 강의로 개념도 익히고 실습도 하며, 리액트를 위해 필요한 대부분의 지식을 한번에 습득할 수 있도록 만들었습니다.', 'easy', 'front', 1, '2'),
	(5, 'https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d', '비전공자를 위한 진짜 입문 올인원 개발 부트캠프', 10000, 0, '입문자를 위해 준비한\n[웹 개발, 취업 · 이직] 강의입니다.', '왕초보도 할 수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요. Javascript 하나로 진행합 니다!', 'middle', 'front', 1, '3'),
	(6, 'https://cdn.inflearn.com/public/courses/325450/course_cover/a15141ac-4d33-4f6d-a38b-3a0b5773031c/webdesign-cover-03.png', 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌1)', 20000, 0, '초급자를 위해 준비한\n[웹 퍼블리싱, 프론트엔드] 강의입니다.', 'HTML+CSS+JQUERY 초중급 퍼블리싱으로 다양한 실전 예제 학습 을 통해 퍼블리싱 중급 실력을 위한 퍼블리싱 기본기를 익히시게 됩니다. 특히, 다양한 실전 예제를 통해 충분한 설명과 실전 작업으로 경험하고 퍼블리싱에 자신감을 생깁니다. 35시간이 넘는 충분한 학습량을 제공하는 퍼블리싱 수업입니다. (코딩웍스 유튜브 퍼블리싱 채널에 CSS 중급이론 학습을 병행하시 면 더욱 효과적입니다.)', 'easy', 'front', 1, '4'),
	(7, 'https://cdn.inflearn.com/public/courses/329186/cover/a63c6c95-2318-4e7a-a4f0-34d4512b3ae6/329186-eng.png', 'GraphQL 완전정복 (가상의 키오스크를 구현하며 배우는 풀스택 과정)', 20000, 0, '초급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '차세대 API 제어 기술인 GraphQL의 기본과 고 급 사용법 그리고 GraphQL로 만들어 가는 가상의 키오스크 서비스를 통해서 실제 프로젝트 경험을 학습하게 됩니다.', 'easy', 'front', 0, '5'),
	(8, 'https://cdn.inflearn.com/public/courses/327839/cover/94dacdb8-a662-47ef-8b46-184920ba0844/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png', 'three.js로 시작하는 3D 인터랙티브 웹', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 웹 퍼블리싱] 강의입니다.', '웹에서 3D를 구현할 수 있는 자바스크립트 라이브러리, three.js의 핵심 개념들을 익히고 응용 예제까지 만들어 보면서 3D 웹 개발에 대한 감을 익혀봅니다.', 'easy', 'front', 0, '6'),
	(9, 'https://cdn.inflearn.com/public/course-326278-cover/e6243ef9-cc62-4a94-a359-7317e235dfab', 'Svelte.js SPA  영화 검색 프로젝트', 30000, 0, '중급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', 'Svelte 기반의 SPA 영화  검색 사이트를 만들어 배포합니다!', 'hard', 'front', 0, '7'),
	(10, 'https://cdn.inflearn.com/public/courses/329477/cover/80fb90fb-0212-4eec-8fb0-7875622b198e/329477-eng.png', '모바일 웹 퍼블리싱 포트폴리오 with Figma', 20000, 0, '초급자를 위해 준비한\n[웹 퍼블리싱, UX/UI] 강의입니다.', '퍼블리셔 취업과 퍼블리셔 실무에서 가장 경쟁력이 있는 모바일 웹 제작 능력을 향상할 수 있습니다. 퍼블리셔로서 모바일 웹을 제작하기 위한 거의 모든 제작 방법과 노하우를 다질 수 있습니다. 특히 요즘 퍼블리셔와 개발자에게 요구되는 디자인 능력을 피그마(Figma) 학습으로 많은 부분 커버할 수 있도록 피그마(Figma)로 모바일 웹 UI 디자인 작업을 하는 과정 도 상세하게 설명하였습니다. 모바일 웹 퍼블리싱 수업에서 가장 강점인 부분인 HTML 와이어프레임 상세한 작성법을 모든 페이지 하나하나 상세하게 설명 합니다. 강의를 통해 HTML 와이어프레임 제작 능력이 크게 향상될 것입니다. 모바일 웹 퍼블리싱은 CSS 변수(Var) 활용한 모바일과 태블릿에 맞춘 레이아 웃을 완벽하게 맞추는 학습을 통해서 실무 작업과 대동소이한 정도의 작업 능력을 갖추게 됩니다. Flex 레이아웃을 중심으로 중상급 CSS 실전 능력을 충분히 갖추시게 됩니다.', 'easy', 'front', 0, '4'),
	(11, 'https://cdn.inflearn.com/public/courses/328728/cover/ef23a863-115b-4847-b219-5a37983beb7e/thumb.png', 'Three.js 3D 인터랙티브 바로 시작하기', 20000, 0, '초급자 를 위해 준비한\n[프론트엔드, 웹 개발] 강의입니다.', '실무에서 Three.js를 바로 사용할 수 있도록 커리큘럼을 구성했습니다!', 'easy', 'front', 0, '8'),
	(12, 'https://cdn.inflearn.com/public/courses/328132/cover/c9a31d84-9d9c-451d-bd47-58d20bd05b40/328132-eng.png', '최고의 프론트엔드 CSS Frameworks, UIkit', 20000, 0, '초급자를 위해 준비한\n[프론트엔드, 웹 퍼블리싱] 강의입니다.', '부트스트랩(Bootstrap)과 함께 대표적인 CSS Frameworks인 UIkit을 기초부터 활용까지 체계적 으로 배우실 수 있습니다. 퍼블리셔 취업을 위해 잘 만들어진 개인 포트폴리오 홈페이지가 반드시 필요합니다. 개인 포트폴리오 홈페이지에서 포트폴리오 결과물을 세련되게 보여주기 위해 Slideshow, Slider, Lightbox, Full Screen Modal, Filter 등 UIkit 컴포넌트의 상세한 사용법과 실전 제작에 활용하는 퍼블리싱 스킬과 노하우를 배울 수 있습니다.', 'easy', 'front', 0, '4'),
	(13, 'https://cdn.inflearn.com/public/courses/327991/cover/e3589cbb-7502-4c72-a665-72ec33d59173/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B3%E1%84%85%E1%85%A5%E1%86%AB%20%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png', '하루만에 Cypress로 작성하는 자바스크립트 E2E 테스트 코드', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '프론트엔드는 사용자와의 접점이 이루어지는 곳이기 때문에 개발자의 입장이 아닌, 사용자의 입장에서의 테스트가 매우 중요합니다. E2E테스트를 통해 사용자 시나리오가 정상적으로 동작하 는지 검증해보고 내 코드에 대해 두려움에서 자신감을 가지는 경험을 해보세요!', 'easy', 'front', 1, '9'),
	(14, 'https://cdn.inflearn.com/public/courses/327302/cover/ef0ecc86-6007-44bf-8363-bb1ec4d776e0/327302-eng.png', '풀스택  리액트 토이프로젝트 - REST, GraphQL (for FE개발자)', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 백엔드] 강의입니다.', 'React 기반의 간단한 SNS 서비스를 만들면서 REST API 및 GraphQL을 연습합니다. 프론트엔드 개발을 위한 백엔드 환경을 쉽고 간단하게 만드는 방법을 소개합니다.', 'easy', 'front', 1, '10'),
	(15, 'https://cdn.inflearn.com/public/courses/326905/cover/739f7b4b-1a9f-478f-a6a8-1a13bf58cae3/326905-eng.png', '만들고 비교하며 학습하는 리액트 (React)', 20000, 0, '초급 자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '리액트는 실무에서 가장 많이 찾는 인기있는 프론트엔드 기술입니다. 리액트 기술을 이용해 어플리케이션을 빠르게 개발하고 유지 보수 가능한 코드를 만들어 보세요.', 'easy', 'front', 1, '11'),
	(16, 'https://cdn.inflearn.com/public/courses/327571/cover/0ff6093b-49cf-4041-9da2-9ede2b8ef1ff/327571-eng.png', 'Vue-Django-Bootstrap 뚝딱 블로그', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '인기 3총사 (Vue + Django + Bootstrap) 를 활용하여, 쉬우면서도 멋진 나의 블로그를 만들 수 있습니다. 반응형은 기본, 스마트폰으로도 볼 수 있습니다.', 'easy', 'front', 0, '12'),
	(17, 'https://cdn.inflearn.com/public/courses/327403/cover/1481786d-7831-4f89-9c8a-2ac6d866e21e/327403-eng-resize.png', 'Nuxt.js 시작하기', 30000, 0, '중급자를 위해 준비한\n[프론트엔드, 웹 개발] 강의입니다.', '내가 만든 Vue.js 사이트가 더 많은 사람들에게 노출 되기를 원한다면? 캡틴판교의 Vue.js 시리즈를 다 듣고 이제는 서버 사이드 렌더링도 해보고 싶은 분들이 듣기 좋은 강좌입니다. Nuxt.js 시작하기 강의!', 'hard', 'front', 0, '13'),
	(18, 'https://cdn.inflearn.com/public/courses/327348/cover/1bcbc86c-d3cb-444a-9d03-4c0597b2e642/%EC%8D%B8%EB%84%A4%EC%9D%BC_Sass_fin.png', '[초급] 40분만에 훑어보는 Sass', 20000, 0, '초급자를 위해 준비한\n[프론트엔드, 프로그래밍 언어] 강의입니다.', '복잡하고 낯설기에 뒷전으로 미뤄진 Sass를 40분 컷! 빠른 시간내에 훑어보세요! :)', 'easy', 'front', 0, '14'),
	(19, 'https://cdn.inflearn.com/public/courses/327297/cover/4e8558bc-8f7a-4e83-9c7a-2be15eefbc06/practical-season-2-cover.png', 'HTML+CSS+JS 포트폴리오 실전 퍼블리싱(시즌2)', 20000, 0, '초급자를 위해 준비한\n[프론트엔드, 웹 퍼블 리싱] 강의입니다.', 'HTML+CSS+JS 실전 포트폴리오(시즌2)는 중급 퍼블리싱으로 다양한 실전 예제 학습을 통해 퍼블리싱 중급 실력을 위한 퍼블리싱 기본기를 익히시게 됩니다. 특히, 다양한 실전 예제와 전체 반응형 웹사이트 제작을 통해 중급 퍼블리싱에 자신감이 생기고 수업한 작업물 을 통해 취업을 위한 개인 포트폴리오로 귀중한 자료가 툅니다. 38시간 가까운 충분한 학습량과 실전 예제를 통한 중급 퍼블리시 노하우를 익히게 되는 퍼블리싱 수업입니다.', 'easy', 'front', 0, '4'),
	(20, 'https://cdn.inflearn.com/public/courses/327246/cover/16122223-0df0-4605-afa9-5d4eb2680db8/Screenshot-main.jpeg', '부트스트랩 5(Bootstrap 5) - 기초부터 웹 프로젝트 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '부트스트랩5 (Bootstrap5)의 클래스, 컴포넌트  등 개념을 이해하고 이를 바탕으로 응용, 변형하고 실습으로 3개의 프로젝트를 제작해봅니다.', 'easy', 'front', 0, '15'),
	(21, 'https://cdn.inflearn.com/public/courses/327079/cover/4c1c5f21-b3bf-4d18-bcf3-97495e16d146/007.png', 'Vuetify Admin Template 만들기 - 실전편 (Based Vue2)', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', 'Vue&Vuetify로 실무에서 개발하시는 분들을 위한 유용한 팁! 😃', 'easy', 'front', 1, '16'),
	(22, 'https://cdn.inflearn.com/public/course-326083-cover/c9e79ef3-3591-4e7e-a501-0c0fc315c105', '실전 자바스크립트', 30000, 0, '중급자를 위해 준비한\n[프로그래밍 언어] 강의입니다.', '자바스크립트에 대한 깊이 있는 이해를 원하시는 분에게 적합한 강의입니다. 2020년 기준 자바스크립트 최신 문법을 다룹니다.', 'hard', 'front', 1, '17'),
	(23, 'https://cdn.inflearn.com/public/course-325531-cover/ffcf09d8-0f0c-459a-8f34-769a5178d840', 'Svelte 입문 강의 - A부터 Z까지', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', 'React와 Vue, Angular 프론트엔드 3대장의 자리를 위 협하는 Svelte 입문 강의입니다. Svelte 공식 문서를 토대로 Svelte 문법을 A부터 Z까지 모두 다룹니다.', 'easy', 'front', 1, '18'),
	(24, 'https://cdn.inflearn.com/public/courses/324959/course_cover/10b37838-44cc-4833-ac1c-18c22bad5a25/1.png', '프론트엔드 개발자를 위한 웹팩', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '1000명이 선택한 웹팩 강의! 새롭게 나온 웹팩 버전에 맞춰 리뉴얼된 강좌입니다. 실습 중심으로 더 쉽게 웹팩을 배워보세요 :)', 'easy', 'front', 1, '13'),
	(25, 'https://cdn.inflearn.com/wp-content/uploads/es6-1.jpg', 'Javascript ES6+ 제대로 알아보기 - 초급', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', 'ES6+ 제대로 알 아보기 강좌는 Javascirpt의 ES6 및 이후의 표준 ECMAScript 명세에 대하여 이론을 바탕으로 ES5와 달라진 점 및 개념과 동작 원리를 깊이 있게 알려드립 니다.', 'easy', 'front', 1, '10'),
	(26, 'https://cdn.inflearn.com/public/courses/329130/cover/99c5a76f-a0c0-4c7d-8667-1ec13bf9b0cb/329130-eng-resize.png', '30분 요약강좌 시즌5 : 알잘딱깔센 flex & grid', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '알아서! 잘! 딱! 깔끔하고! 센스있게! 정리하는 flex & grid 책의 무료 강의입니다. 오픈소스 링크, 해당 책과 Notion 링크도 무료로 이용하실 수 있습니다. 비영리 프로젝트로 교재 활용도 허락 없이 가능합니다.', 'easy', 'front', 1, '19'),
	(27, 'https://cdn.inflearn.com/public/courses/326541/cover/a13f7fc2-2f67-4ff8-ac28-802c3b70fcf0', '<M.B.I.T> 테스트 페이지 만들기! with Django', 20000, 0, '초급자를 위해 준비한\n[풀스택] 강의입니다.', '개발 유형을 테스트하는 웹 페이지를 만들어보세요! MBTI아닌 MBIT(My Best IT personalities)! MBIT 테스트 페이지를 직접 만 들어보며 웹 개발의 전반적인 프로세스를 익혀볼 수 있습니다. (Django 3.1 버전을 사용합니다.)', 'easy', 'front', 1, '19'),
	(28, 'https://cdn.inflearn.com/public/course-325931-cover/fa4e4140-cd14-4792-9015-d3f40424f7c7', '만들면 서 배우는 Svelte', 20000, 0, '초급자를 위해 준비한\n[프론트엔드, 웹 개발] 강의입니다.', '최신 프론트엔드 프레임워크 Svelte(스벨트)를 배워보는 강좌입니다. Svelte 기본 사용법을 익힌 후 Todo 앱을 함께 만들면서 실제 프로젝트에서 어떻게 Svelte를 사용할 수 있는지  익혀보는 강좌입니다.', 'easy', 'front', 0, '5'),
	(29, 'https://cdn.inflearn.com/public/courses/324800/course_cover/df1a57d9-dfcf-4471-9e06-5c41aac294bb/egoing-redux.png', '생활코딩 - Redux', 30000, 0, '중급자를 위 해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '생활코딩에서 제공하는 Redux 강의로, 자바스크립트를 중급 이상 다루는 분들을 대 상으로 리덕스를 이용해 더 단순한 코드로 더 복잡한 애플리케이션을 만드는 방법에 대한 수업입니다.', 'hard', 'front', 0, '20'),
	(30, 'https://cdn.inflearn.com/public/courses/328606/cover/b7a541f1-a587-4c1b-b333-a5969a331c84/328606-eng.png', '자바 개발자를 위한 코틀린 입문(Java to Kotlin Starter Guide)', 20000, 0, '초급자를 위해 준비한\n[프로그래밍 언어, Kotlin] 강의입니다.', '이 강의를 통해 Kotlin 언어의 특성과 배경, 문법과 동작 원리, 사용 용례, Java와 Kotlin을 함께 사용할 때에 주 의할 점 등을 배울 수 있습니다.', 'easy', 'back', 0, '21'),
	(31, 'https://cdn.inflearn.com/public/courses/324176/course_cover/12334f28-c29e-4eff-8460-7cae5bf82304/whiteship_security.jpg', '스프링 시큐리티', 30000, 0, '중급자를 위해 준비한\n[웹 개발, 백엔드] 강의입니다.', '스프링 시큐리티 구동 원리 및 구조를 이해하고 스프링 시큐리티가 제공하는 다양한 기능을 활용하여 웹 애플리케이션에 필요한 인증 및 인가 기능을 설정하는 방법을 살펴봅니다.', 'hard', 'back', 0, '22'),
	(32, 'https://cdn.inflearn.com/wp-content/uploads/API-1.jpg', '스프링 기반 REST API 개발', 30000, 0, '중급자를 위해 준비한\n[백엔드] 강의입니다.', '다양한 스프링 기술을 사용하여 Self-Descriptive Message와 HATEOAS(Hypermedia as the engine of application state)를 만족하는 REST API를 개발하는 강의입니다.', 'hard', 'back', 0, '22'),
	(33, 'https://cdn.inflearn.com/wp-content/uploads/springboot-1-2-1.jpg', '스프링 부트 개념과 활용', 30000, 0, '중급자를 위해 준비한\n[백엔드] 강의입니다.', '스프링 부트의 원리 및 여러 기능을 코딩을 통해 쉽게 이해하고 보다 적극적으로 사용할 수 있는 방법을 학습합니다.', 'hard', 'back', 0, '22'),
	(34, 'https://cdn.inflearn.com/public/courses/330150/cover/e5888ae0-f23a-4edc-8519-98d0f4c396d7/330150-eng.png', '습관부터 바꿔주는 Node.js & Express 기초', 20000, 0, '초급자를 위해 준비한\n[백엔드, 웹 개발] 강의입니다.', '개발 공부를 어떻게 해야할 지 모르고, 실력이 좀처럼 늘지 않으시는 분들을 위해 웹에 대한 전반적인 원리, 기초를 잡아드리며 실제 개발에 필요한 부분을 위주로 개발의 기반을 다질 수 있습니다.', 'easy', 'back', 0, '23'),
	(35, 'https://cdn.inflearn.com/public/courses/330016/cover/e66621ef-45ed-48b5-9139-62e60246ab53/330016-eng.jpg', '카프카 완벽 가이드 - 커넥트(Connect) 편', 30000, 0, '중급자를 위해 준비한\n[데이터 수집 · 처리, 데브옵스 · 인프라] 강의입니다.', '카프카 커넥트(Kafka Connect)에 대한 깊이 있는 이론 설명과 현업에서 바로 사용될 수 있 는 수준의 상세한 실습을 통해 여러분을 현장에서 필요로 하는 카프카 커넥트 기반의 데이터 연동 및 데이터 파이프라인 구축 전문가로 성장시켜 드릴 것 입니다.', 'hard', 'back', 0, '24'),
	(36, 'https://cdn.inflearn.com/public/courses/328995/cover/6e7cabd6-e4d1-4634-a7d0-93b6dbb830c0/328995-eng.png', '재고시스템으로 알아보는 동시성이슈 해결방법', 20000, 0, '초급자를  위해 준비한\n[백엔드, 웹 개발] 강의입니다.', '동시성 이슈란 무엇인지 알아보고 처리하는 방법들을 학습합니다.', 'easy', 'back', 1, '25'),
	(37, 'https://cdn.inflearn.com/public/courses/328721/cover/d924844a-dfab-4906-8d26-701a1ca9fc11/328721-eng.png', '비전공자를 위한 풀스택 맛집지도 만들기 프로젝트!: Front, Back-end 그리고 배포까지', 20000, 0, '초급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '내가 좋아하는 유튜버의 맛집지도를 만들면서 프론트엔드, 백엔드, 카카오맵 API 사용법, 배포까지 한번에 배울 수 있는 풀스택 맛집지도 강의입니다.', 'easy', 'back', 1, '26'),
	(38, 'https://cdn.inflearn.com/public/courses/328717/cover/2a8f81d2-dbcb-4397-a134-56a7ee9c78d3/328717-eng.png', 'RDBMS Modeling 실습', 30000, 0, '중급자를 위해 준비한\n[데이터베이스, 백엔드] 강의입니다.', '데이터베이스 설계 기초편에 이은 두  번째 강의입니다. 실전 프로젝트를 대상으로 처음부터 끝까지 만들어보는 실전 위주의 수업이며, 강의 내용을 모두 이해하고 나면 자유자재로 데이터베이 스 설계를 하실 수 있는 능력을 갖출 수 있습니다.', 'hard', 'back', 1, '27'),
	(39, 'https://cdn.inflearn.com/public/courses/328556/cover/b0534cc6-0457-4970-b7b0-bb3ac8c14651/328556-eng.png', 'AWS Certified Advanced Networking - Specialty 자격증 준비하기', 20000, 0, '초급자를 위해 준비한\n[클라우드, 자격증] 강의입니다.', '이 강의를 통해 AWS Certified Advanced Networking - Specialty 자격증 준비와 AWS 및 하이브리드 IT 네트워크 아키텍처의 설계 및 구현에 대한 이론을 배울 수 있습니다.', 'easy', 'back', 1, '28'),
	(40, 'https://cdn.inflearn.com/public/courses/327444/cover/0f7e22c4-638e-4c8c-9b47-ed4edd59fcb6/327444-eng-original-b.png', '그림으로 배우는 쿠버네티스(v1.22-v1.24)', 30000, 0, '중급자를 위해 준비한\n[데브옵스 · 인프라, 클라우드] 강의입니다.', '쿠버네티스(☸)의 많은 부분을 그림으로 배울 수 있도록 구성되어 있습니다. 🧭  특히 이미 검증된 베스트셀러 컨테이너 인프라 환경 구축을 위한 쿠버네티스/도커에서 검증된 내용을 더욱 확장해서 쿠버네티스 자체를 더 깊이 학습하 도록 작성하였습니다. 💯 또한 실무적인 내용들이 보강 수업에 주기적으로 추가되어 있습니다. 👉 꼭 다른 강의와 비교해 보세요 :)', 'hard', 'back', 1, '29'),
	(41, 'https://cdn.inflearn.com/public/courses/326624/cover/a47f727f-a67b-476b-9d23-fefb0db9a954', '[NarP Series] MVC 프레임워크는 내 손에 [나프1탄]', 20000, 0, '초급자를 위해 준비한\n[백엔드] 강의입니다.', '본 과정은 WEB MVC 프레임워크가 무엇이고 WEB MVC 프레임워크가 어떻게 변형이 되면서 Spring WEB MVC 프레임워크로 넘어가는지 TPC( 생각하고-표현하고-코딩하고) 기법을 통해 단계적으로 학습하고 이해 할 수 있는 과정입니다.', 'easy', 'back', 1, '30'),
	(42, 'https://cdn.inflearn.com/public/course-325598-cover/493b8680-7652-4ea8-8e57-a53e58b1622f', '더 자바, Java 8', 20000, 0, '초급자를 위해 준비한\n[백엔드, 프로그래밍 언어] 강의입니다.', '자바 8에 추가된 기능들은 자바가 제공 하는 API는 물론이고 스프링 같은 제 3의 라이브러리 및 프레임워크에서도 널리 사용되고 있습니다. 이 시대의 자바 개발자라면 반드시 알아야 합니다. 이 강의를 통해 쉽고 빠르게 자신의 기술로 만드세요.', 'easy', 'back', 0, '22'),
	(43, 'https://cdn.inflearn.com/wp-content/uploads/nodetdd.png', '테스트주도개발(TDD)로 만드는 NodeJS API 서버', 20000, 0, '초급자를 위해 준 비한\n[웹 개발, 백엔드] 강의입니다.', '이 강의에서는 Javascript 언어로 백엔드 개발을 할 수 있는 NodeJS를 학습하고, 테스트 주도 개발(TDD) 방법으로 NodeJS를 이용해 API 서버 개발을 할 수 있습니다. 또한 NodeJS의 대표적인 웹 프레임워크 ExpressJS의 기초 원리를 이해하고, 모바 일과 웹 서비스에서 사용하는 REST API 개발 방법을 학습할 수 있습니다.', 'easy', 'back', 1, '11'),
	(44, 'https://cdn.inflearn.com/public/courses/329980/cover/7687ff1a-6346-4e04-b2be-ceac51d6a1cc/329980-eng.jpg', '[DevOps 정석 1] Monolith to Microservice 전환 with Spring/Python/Node.js와 Strangler Fig 패턴', 20000, 0, '초급자를 위해 준비한\n[데브옵스 · 인프라,  백엔드] 강의입니다.', '기존 레거시 모놀리스 시스템을 마이크로서비스 아키텍처로 전환하는 과정을 실습을 통해 알아봅니다. 총 2회 까지 지식공유자의 코드 리뷰도 함께 받아보실 수 있습니다!', 'easy', 'back', 0, '31'),
	(45, 'https://cdn.inflearn.com/public/courses/329905/cover/124598fe-be39-4faa-9345-fbae4277d879/329905-eng.png', 'Java/Spring 주니어 개발자를  위한 오답노트', 20000, 0, '초급자를 위해 준비한\n[백엔드, 개발 · 프로그래밍] 강의입니다.', '스프링이랑 JPA를 조금  다룰 줄 알게 된 당신, 앞으로 성장하기 위해 무엇을 어떻게 공부해야 할까요? 혹시 설계 공부를 해보겠다고 디자인 패턴을 공부하면서 패턴들을 무작정  암기하고 계시진 않으신가요? 제가 도와드릴게요!', 'easy', 'back', 1, '32'),
	(46, 'https://cdn.inflearn.com/public/courses/329767/cover/daa0cab1-368a-4c67-9d9a-f08a3d10e45c/329767-eng.png', '초보자를 위한 IT 인프라의 이해', 10000, 0, '입문자를 위해 준비한\n[데브옵스 · 인프라, 백엔드] 강의입니다.', '혹시, IT 인프라(서버, 네트워크, 스토리지 등) 기술에 대해 이해를 못하여 여러움을 겪은 적은 없으신가요? IT 인프라가 어떻게 구성되고 어떤 기술이 적용되었는지 이해하고 싶으신가요? IT 인프라를  구성하는 다양한 기술에 대해서 설명하는 국내 유일의 강의입니다!', 'middle', 'back', 0, '33'),
	(47, 'https://cdn.inflearn.com/public/courses/329351/cover/8726d996-7730-420c-a566-ffe43574c448/329351-eng.png', 'AZ-900 Microsoft Azure Fundamentals 자격증 준비하기', 20000, 0, '초급자를 위해 준비한\n[클라우드, 자격증] 강의입니다.', '이 강의를 통해 AZ-900 Microsoft Azure Fundamentals 자격증 준비와 클라우드의 개념 및 Azure 서비스에 대한 전반적인 내용을 배울 수 있습니다.', 'easy', 'back', 1, '28'),
	(48, 'https://cdn.inflearn.com/public/courses/328898/cover/856ad748-de37-4076-9b46-c19efb982cf7/328898-eng.png', 'AWS Certified Cloud Practitioner 자격증 준비하기', 20000, 0, '초급자를 위해 준비한\n[클라우드, 데 브옵스 · 인프라] 강의입니다.', '이 강의를 통해 AWS Certified Cloud Practitioner 자격증 준비와 클라우드의 개념 및 AWS 서비스에 대한 전반적인 내용을 배울 수 있습니다.', 'easy', 'back', 0, '28'),
	(49, 'https://cdn.inflearn.com/public/courses/327519/cover/eba1be31-f2f0-47c4-a067-0b7f37345a61/326318-eng.png', 'C# Xamarin Forms 자마린 폼즈 API 강의 + 간단한 API 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 백엔드] 강의입니다.', '자마린(Xamarin)에서 SQL의 데이터를  어떻게 접근해서 수정, 삭제, 추가, 조회할 수 있는지 설명하는 강의입니다. WEB API도 같이 만들면서 API를 어떻게 활용하는지 알수 있습니다.', 'easy', 'back', 1, '34'),
	(50, 'https://cdn.inflearn.com/public/course-326039-cover/ecb85367-3f9d-4ae8-b523-eea21aef4e58', '스프링 부트 업데이트', 30000, 0, '중급자를 위해 준비한\n[웹 개발, 백엔드] 강의입니다.', '이 강의는 스프링 부트 개념과 활용 강의 확장팩으로 지난 2년간 있었던 스프링 부트 업데이트를 다루고 있습니다. 스프링 부트 2.1부터 2.4까지의 새로운 기능 및 변경 내역을 확인하시고 스프링 부트 최신 버전으로 업데이트 하세요.', 'hard', 'back', 0, '22'),
	(51, 'https://cdn.inflearn.com/public/course-326014-cover/0c4219dd-4a84-4ceb-9169-6912c706a278', '파이썬 플라스크(Flask)로 웹 서비스 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 백엔드] 강의입니다.', '이 강의에서는 플라스크 프레임워크에 대해 이야기합니다. 웹 페이지 사전 지식과 플라스크를 살핀 뒤 파일을 업로드, 다운로드, 삭제하는 파일 업로드 서버와 몽고(Mongo) 데이터베이스를 사용해 할 일을 관리하는 할 일 메모 페이지 등을 만들어봅니다.', 'easy', 'back', 1, '35'),
	(52, 'https://cdn.inflearn.com/public/courses/329347/cover/5b9bcc16-210e-4655-b727-7625cda008a8/329347-eng.png', '따라하며 배우는 노드, 리액트 시리즈 - 레딧 사이트 만들기(NextJS)', 20000, 0, '초급자를 위해 준비한\n[풀스택, 프론트엔드] 강의입니다.', '이 강의를 통해서 레딧 웹사이트를 처음부터 하나하나 만들어 보실 수 있습니다.', 'easy', 'database', 0, '2'),
	(53, 'https://cdn.inflearn.com/public/courses/326174/cover/b0536120-7de3-4aa8-8266-97cf3881e87d', '비전공자를 위한 진짜 입문 올인원 개발 부트캠프', 10000, 0, '입문자를 위해 준비한\n[웹 개발, 취업 · 이직] 강의입니다.', '왕초보도  할 수 있는 웹, 서버, 모바일 앱, 머신러닝까지 익히는 끝판왕 풀스택 강의!! 개발을 어디서부터 시작할지 막막했다면 이 강의를 강력 추천할게요. Javascript 하나로 진행합니다!', 'middle', 'database', 1, '3'),
	(54, 'https://cdn.inflearn.com/public/courses/329186/cover/a63c6c95-2318-4e7a-a4f0-34d4512b3ae6/329186-eng.png', 'GraphQL 완전정복 (가상의 키오스크를 구현하며 배우는 풀스 택 과정)', 20000, 0, '초급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '차세대 API 제어 기술인 GraphQL의 기본 과 고급 사용법 그리고 GraphQL로 만들어 가는 가상의 키오스크 서비스를 통해서 실제 프로젝트 경험을 학습하게 됩니다.', 'easy', 'database', 0, '5'),
	(55, 'https://cdn.inflearn.com/public/courses/327705/cover/30a2336f-1f50-4741-8e68-866c03cad32d/%EC%9D%B8%ED%94%84%EB%9F%B0_%EA%B0%95%EC%A2%8C%EB%B0%B0%EB%84%88.png', '파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트', 20000, 0, '초급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '파이썬/장고 웹서비스 개발의 기초를 탄탄히 다져보세요. 리액트를 통해 최신 트렌드의 웹 프론트엔드를 경험해보세요. 파이썬만 아시면 시작하실 수 있습니다. 여러분의 상상을 현실로 만들어보세요.', 'easy', 'database', 1, '36'),
	(56, 'https://cdn.inflearn.com/public/course-326181-cover/d012cab3-58e1-45cd-899e-03f86c7b1df1', '따라하며 배우는 리액트, 파이어베이스 - 채팅 어플리케이션 만들기', 20000, 0, '초급자를 위해 준비 한\n[웹 개발, 풀스택] 강의입니다.', '이 강의를 통해서 리액트와 파이어베이스를 이용해서 채팅 어플리케이션을 만들수 있습니다.', 'easy', 'database', 0, '2'),
	(57, 'https://cdn.inflearn.com/public/courses/329381/cover/92fb432a-465d-46db-9ac4-fffc3b3f4cb1/329381-eng.png', '너네 백엔드 하고 싶은 거 있으면 얼마든지 해 난 괜찮어 왜냐면 나는 파이어베이스가 있어', 20000, 0, '초급자를 위해 준비한\n[풀스택, 백엔드] 강의입니다.', '프론트엔드 개발자인데 로그인 기능을 구현하지 못해 아쉬웠던 적 있으신가요? DB를 이용해 데이터를 저장하고 불러오는 기능을 구현하고 싶지만 쿼리를 공부하기는 부담스러우셨나요? 파이어베이스라면 쉽게 가능합니다! 리액트와 파이어베이스의 힘으로 유저 인증, 데이터 저장, 호스팅 등 웹 개발에 필수적인 기능들을 같이 구현해봅시다! (해당 강의는 22년 8월 녹화로 파이어베이스의 메이저 업데이트를 반영한 강의입니다.)', 'easy', 'database', 1, '19'),
	(58, 'https://cdn.inflearn.com/public/courses/326317/cover/b07dfd4a-a0c8-4fc5-a885-40c5cbb5e325/doitdj.png', 'Do It! 장고+부트 스트랩: 파이썬 웹개발의 정석', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '만들면서 배우는 파이썬 웹개발 A to Z! 웹 기초부터 블로그 개발, 배포까지 한 번에 배워요.', 'easy', 'database', 0, '37'),
	(59, 'https://cdn.inflearn.com/public/courses/325240/course_cover/d5d7e9a9-2d6f-4a81-84da-5e9cde3f39a4/nodereactecommerce-eng.png', '따라하며 배우는 노드, 리액트 시리즈 - 쇼핑몰 사이트 만들기', 30000, 0, '중급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '이 강의를 통해서 쇼핑몰 웹사이트를 처음부터 하나하나 만들어 보실 수 있습니다.', 'hard', 'database', 1, '2'),
	(60, 'https://cdn.inflearn.com/public/courses/328721/cover/d924844a-dfab-4906-8d26-701a1ca9fc11/328721-eng.png', '비전공자를 위한 풀스택 맛집지도 만들기 프로젝트!: Front, Back-end 그리고 배포까지', 20000, 0, '초급자를 위해 준비 한\n[풀스택, 웹 개발] 강의입니다.', '내가 좋아하는 유튜버의 맛집지도를 만들면서 프론트엔드, 백엔드, 카카오맵 API 사용법, 배포 까지 한번에 배울 수 있는 풀스택 맛집지도 강의입니다.', 'easy', 'database', 0, '26'),
	(61, 'https://cdn.inflearn.com/public/courses/324031/course_cover/9404bff2-89f1-4784-8a74-49b0fa51f13a/fullstack_jeju%28%EC%88%98%EC%A0%95%29.png', '코알못에서 웹서비스 런칭까지 : 2021 제주 코딩 베이스캠프(Django)', 10000, 0, '입문자를 위해 준비한\n[웹 개발, 풀스택] 강의입 니다.', '제주에서 진행하는 부트캠프를 온라인으로! 빠르게 자신만의 서비스를 만들어보세요! :)', 'middle', 'database', 1, '19'),
	(62, 'https://cdn.inflearn.com/public/courses/327571/cover/0ff6093b-49cf-4041-9da2-9ede2b8ef1ff/327571-eng.png', 'Vue-Django-Bootstrap 뚝딱 블로그', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '인기 3총사 (Vue + Django + Bootstrap) 를 활용하여, 쉬우면서도 멋진 나의 블로그를 만들 수 있습니다. 반응형은 기본, 스마트폰으로도 볼 수 있습니다.', 'easy', 'database', 0, '12'),
	(63, 'https://cdn.inflearn.com/public/course-326045-cover/101c0b65-770a-454e-a959-14a7fdd99f8f', '[Django] 장고로 인프런 따라만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '장고(Django)를 이용하여 인프런을 따라 만들어 봅니다. 인프런을 따라 만들면서 장고의 기능을 하나씩 알아봅니다.', 'easy', 'database', 1, '38'),
	(64, 'https://cdn.inflearn.com/public/courses/325634/cover/ac3a9b93-1df2-4db9-845d-6fc3023f70d1', '코로나맵 개발자와 함께하는 지도서비스 만들기 1', 20000, 0, '초급자 를 위해 준비한\n[웹 개발, 프론트엔드] 강의입니다.', '코로나맵 개발자가 알려주는 지도서비스 만들기 강의입니다.', 'easy', 'database', 0, '39'),
	(65, 'https://cdn.inflearn.com/public/course-325739-cover/a4e6265c-cc99-4f2b-b3fe-085d1e7c1a2a', '시간의 마법사 RxJS - setTimeout 은 No! 모든 비동기 작업들을 한방에 해결하자', 20000, 0, '초급자를 위 해 준비한\n[풀스택, 개발 · 프로그래밍] 강의입니다.', 'Javascript를 비롯한 많은 프로그래밍 언어에서 비동기작업은 가장 까다롭고 소프트웨어의 복잡도를 올리는 요소 중 하나입니다. setTimeout, setInterval 과 같은 원시적인 비동기 프로그래밍은 버리고 RxJS 를 통해 복잡했던 비동 기작업들을 손쉽게 처리할 수 있습니다.', 'easy', 'database', 1, '40'),
	(66, 'https://cdn.inflearn.com/public/courses/325053/course_cover/b5fb69d7-2957-4023-82f1-76f3ff0b8860/nodeReactchatbot.png', '따라하며 배우는 노드, 리액트 시리즈 - 챗봇 사이트 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '이 강의를 통해서 Google에서 제공하는 API를 사용해서 챗봇을 만들어 볼 수 있습니다.', 'easy', 'database', 0, '2'),
	(67, 'https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png', '따라하 며 배우는 노드, 리액트 시리즈 - 기본 강의', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '이 강의를 통해서 리액트와 노드를 어떻게 사용하는지 기본적인 내용들을 배울 수 있습니다.', 'easy', 'database', 1, '2'),
	(68, 'https://cdn.inflearn.com/public/courses/330024/cover/e0c50a08-c7c3-4002-9e20-9a8be326bdf6/thumb6.png', '조 코딩의 코딩 기초와 웹 풀스택 개발', 10000, 0, '입문자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '코딩 1위 유튜버 조코딩의 실전 압축! 쉽고 재미있는 웹 풀스택 개발 강의', 'middle', 'database', 0, '41'),
	(69, 'https://cdn.inflearn.com/public/courses/326487/cover/40f8cec7-b12d-4a50-8f1a-376430d3845c', '코로나맵 개발자와 함께하는 지도서비스 만들기 2', 30000, 0, '중급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '코로나맵 개발자가 알려주는 지도 서비스 제작 심화 강의입니다.', 'hard', 'database', 1, '39'),
	(70, 'https://cdn.inflearn.com/public/course-326010-cover/693ab4d4-6030-490b-a3c5-ae35de0dcfa2', 'Svelte 실전 강의 - 스도쿠 만들기', 30000, 0, '중급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', 'Svelte, Express, JWT, MongoDB를 사용해서 웹 게임을 만들어 볼 수 있습니다. FrontEnd와 BackEnd 모두 다루어 보고 싶으신 분들 환영합니다!', 'hard', 'database', 0, '18'),
	(71, 'https://cdn.inflearn.com/public/courses/324906/course_cover/63e47a67-f188-41a1-94a0-1ffecc7734c0/nodeReact-film.png', '따라하며 배우는 노드, 리액트 시리즈 - 영화 사이트 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '이 강의를 통해 리액트와 노드등의 개념만이 아닌, 실질적으로 어떻게 웹 사이트를 만드는지를 배울 수 있습니다.', 'easy', 'database', 1, '2'),
	(72, 'https://cdn.inflearn.com/public/courses/327495/cover/f32e7dc5-ed1f-42d4-b4d2-08d3b497d839/327495-eng-original.jpg', 'iOS/Android 앱 개발을 위한 실전 React Native - Intermediate', 30000, 0, '중급자를 위해 준비한\n[풀스택, 모바 일 앱 개발] 강의입니다.', 'React Native 기반 모바일 앱 개발을 위한 중급 강의입니다. 프론트엔드의 심화내용 학습 뿐만 아니라 Firebase 기반의 백엔드 내용까지 함께 배우면서, 서버 연동/ 로그인/ 데이터 송수신/ 공공API 활용 등이 가능한 하나의 완벽한 앱을 개발할 수 있도록 제작 된 강의입니다.', 'hard', 'database', 0, '42'),
	(73, 'https://cdn.inflearn.com/public/courses/324582/course_cover/1ead1042-97cc-41f2-bc73-a6e86ae86a4d/nodeReact.png', '따라하며 배우는 노드, 리액트 시리즈  - 유튜브 사이트 만들기', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니다.', '이 강의를 통해 리액트와 노드의 개념을 익히는  것뿐만이 아닌 실질적으로 어떻게 웹사이트를 만들 수 있는지를 배울 수 있습니다.', 'easy', 'database', 1, '2'),
	(74, 'https://cdn.inflearn.com/public/courses/329577/cover/bf69febb-8d06-4148-8245-557b092bdfae/329577-eng.png', '코 틀린 멀티플랫폼, 미지와의 조우', 30000, 0, '중급자를 위해 준비한\n[풀스택, 웹 개발] 강의입니다.', '코틀린 멀티플랫 폼과 함께 리액트와 스프링으로 하나의 완전한 웹 애플리케이션을 만들어 봅니다. 이 과정에서 코틀린 멀티플랫폼 프로젝트를 이해하고, 더 나아가 클라이언트와 서버의 공유 로직 작성, Kotlin/JS 기반 리액트 및 Kotlin/JVM 기반 스프링 웹 프로그래밍을 경험 할 수 있습니다!', 'hard', 'database', 0, '43'),
	(75, 'https://cdn.inflearn.com/public/courses/326549/cover/b034f564-42f8-492c-8bf2-828ecc2a143c', 'vue.js 실전 프로젝트(트위터 클론)', 20000, 0, '초급자를 위해 준비한\n[풀스택] 강의입니다.', 'vue.js + firebase + tailwindcss 를 통해 실전 프로젝트를 만들어보세요. 이 강의를 수강하신다면 어떤 사이트든 만들 수 있습니다.', 'easy', 'database', 1, '44'),
	(76, 'https://cdn.inflearn.com/public/course-325859-cover/9a20ad00-e499-4739-abcb-6dd8aaee4e0a', 'Vue.js - Django 연동 웹 프로그래밍 (실전편)', 20000, 0, '초급자를 위해 준비한\n[웹 개발, 풀스택] 강의입니 다.', '클라이언트 전문 FW인 Vue.js와 서버 전문 FW인 Django를 같이 활용하여, 업그레이드된 웹 프로그래밍을 해보자. Vue 쪽의 VueRouter와 Vuex를 사용하지 않고도, Django 쪽의 DRF를 사용하지 않고도, 쉽게 할 수 있다.', 'easy', 'database', 0, '12'),
	(77, 'https://cdn.inflearn.com/public/courses/328644/cover/4afb5f07-cd68-453b-9641-efdb42628d2b/328644-eng.png', '데이터 분석 SQL Fundamentals', 20000, 0, '초급자를 위해 준비한\n[데이터 분석, 데이터베이스] 강의입니다.', 'SQL 의 핵심 요소에 대한 상세한 강의와 실습을 통해, 여러분이 SQL 분석 전문가로 성장할 수 있도록 흔들리지 않는 뼈대를 만들어 드리겠습니다.', 'easy', 'fullstack', 1, '24'),
	(78, 'https://cdn.inflearn.com/public/courses/329643/cover/a5747a03-97cd-400d-adba-82f5952a40bd/329643-eng.png', '[관리코스 #2] DBA (ERD, 데이터베이스 설계)', 30000, 0, '중급자를 위해 준비한\n[데이터 베이스] 강의입니다.', '해당 강의에서는 ERD를 작성하는 방법을 배우게됩니다. 데이터베이스 설계를 배우게 됩니다. (국내유일 빅데이터 설계 강의)', 'hard', 'fullstack', 0, '45'),
	(79, 'https://cdn.inflearn.com/public/courses/329013/cover/e2788c1d-eb3b-4d91-adb0-5fbfc1ddeae2/%ED%91%9C%EC%A7%80%ED%99%94%EB%A9%B4-STEP1.jpg', '49회만에 실무 SQL 완전정복 I - 기본 과정 (실습자료 및 문제풀이 포함)', 10000, 0, '입문자를 위해 준비한\n[데이터베이스] 강의입니다.', '49회만에 실무 SQL 완전정복 I - 기본 과정은 SQL을 위해서 반드시 알아야 할 필수 내용을 담고 있습니다. 실무형 데이터베이스를 사용하여 학습을 진행함으로써 바로 현업에 서 응용이 가능하고, 이론 설명, 실습과 더불어 총 200여개의 응용 문제 풀이를 통해 학습 내용을 충분히 익힐 수 있게 구성되어 있습니다. 직관적인 이해를 위해 한글로 구성된 데이터베이스로 실습을 진행합니다.', 'middle', 'fullstack', 1, '46'),
	(80, 'https://cdn.inflearn.com/public/course-325916-cover/232a79c6-fc4a-4491-80c1-ffd0b33f0e87', '[소프데이터] 예제로 배우는 기초 SQL', 10000, 0, '입문자를 위해 준비한\n[데이터 분석, 마케팅] 강의입니다.', '마케팅/기획/CRM에서 자주 추출하는 지표들을 SQL을 이용해 직접 뽑아봅니다.', 'middle', 'fullstack', 0, '47'),
	(81, 'https://cdn.inflearn.com/public/course-325822-cover/6dc2e340-cba4-4d88-b313-3233d3e5c3a0', '[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part8: Entity Framework Core', 20000, 0, '초급자를 위해 준비한\n[게임 프로그래밍, 데이터베이스] 강의입니다.', '원활한 데이터베이스 연동을 위해 .NET ORM인 Entity Framework Core에 대해 학습하는 강의입니다.', 'easy', 'fullstack', 1, '48'),
	(82, 'https://cdn.inflearn.com/public/courses/325731/cover/e850d94c-cae2-47bc-8758-f7aa3a33982b/sql_intermediate_practices.png', '[백문이불여일타] 데이터 분석을 위한 중급 SQL 문제풀이', 20000, 0, '초급자를 위해 준비한\n[데이터 분석, 데이터 사이언스] 강의입니다.', '인프런 누적 수강생 10,000명 이상, 풍부한 온/오프라인 강의 경험을 가진 데이터리안의 SQL 중급 문제풀이 강의. SQL 중급 이론 내용을 연습해 볼 수 있는 여러 문제를 함께 풀어봅니다.', 'easy', 'fullstack', 0, '49'),
	(83, 'https://cdn.inflearn.com/public/course-325341-cover/1f4c7788-510d-4a81-b019-08a8e5899f70', '생애 첫 SQL With 제코베', 10000, 0, '입문자를 위해 준비 한\n[데이터베이스, 데이터 분석] 강의입니다.', '왕 기초🐥, 더이상 날 설명할 단어가 없다 하시는 분들만 들어주세요.👂 개념은 우주로🚀, 왕기초 실습만 주야장천✍, 손으로 익히는 SQL!✋ 설치 없이 합니다.🔥 여깁니다 강의 맛집 제코베!🎉', 'middle', 'fullstack', 1, '19'),
	(84, 'https://cdn.inflearn.com/public/courses/324188/cover/8a27f112-0280-4bbb-8f66-653451d224b2/324188-eng.png', 'RDBMS Modeling 기초', 20000, 0, '초급자를 위해 준비한\n[데이터베이스, 백엔드] 강의입니다.', '본 강좌는 데이터베이스 설계 이론을 실습 위주로 쉽게 풀어냈습니다. 책 등을 통해서 경험하신 분들은 대부분 데이터베이스 이론이 어렵다고 느끼고 포기하신 경험들이 있을 겁니다. 저도 그랬습니다. 그러나 알고보면 쉬우면서도 매우 흥미로운 분야라는 것을 알게 됩니다. 본 강좌에서는 아주 쉽게 보고만 있어도  이해가 될 수 있도록 설계 내용을 구성하였습니다.', 'easy', 'fullstack', 0, '27'),
	(85, 'https://cdn.inflearn.com/public/courses/328573/cover/b91b0710-bbcb-4ee6-8027-dcc1b807b3db/328573-eng.png', 'RDBMS Modeling 프로그래밍 실습(C#)', 30000, 0, '중급자를 위해 준비한\n[데이터베이스, 백엔드] 강의입니다.', '본 수업은 C#의 문법을 강의하지는 않습니다. 다만 객체지향 프로그램 설계의 툴로 C#을 사용할 뿐입니다. 본 수업은 중급 이상의 프로그래머가 알아야 하는 필수 내용들과, 데이터베이스와 연동하여 프 로그램을 개발할 때 꼭 알아야 하는 내용들을 깊이 있게 다루고 있습니다.', 'hard', 'fullstack', 1, '27');

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
  `id_instructor` int DEFAULT NULL,
  `instructor_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `instructor_info` text,
  `instructor_img` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.instructor:~49 rows (대략적) 내보내기
DELETE FROM `instructor`;
INSERT INTO `instructor` (`id_instructor`, `instructor_name`, `instructor_info`, `instructor_img`) VALUES
	(1, '코드캠프', 'Try anything, Try everything!\n\n코드캠프는 유능한 개발자를 양성하며 개발의 미래를 바꾸고자 하는 목표를 가지고 있습니다. 사회적, 경제적, 교육적 배경에 상관없이 누구에게나 커리어 전환의 기회를 제공하기 위해 인프런 에 나타났답니다. 코캠과 함께 커리어 점프에 도전하세요!', 'https://cdn.inflearn.com/public/users/thumbnails/637552/b28465f8-d3ea-4d24-aeb2-3ec60f953d5a'),
	(2, 'John Ahn', '안녕하세요. ', 'https://cdn.inflearn.com/public/users/thumbnails/217966/3101e7e4-8573-4a08-988e-e03659bf9447'),
	(3, '그랩', '학습과 성장에 관심이 많은 개발자&크리에이터 그랩입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/8620/2d95c269-9571-44a8-8ab5-c59dad6f2894'),
	(4, '코딩웍스(Coding Works)', '■ [현재] 국비 퍼블리 싱 & 프론트엔드 강사 \n■ [현재] 프리랜서 프론트엔드 퍼블리셔\n■ [현재] HTML+CSS+JQUERY 퍼블리싱 유튜브 채널 코딩웍스 운영\n■ 그린 컴퓨터 아카 데미 웹 퍼블리싱 강사\n■ 더조은 컴퓨터 아카데미 웹 퍼블리싱 강사\n■ 이젠 컴퓨터 아카데미 웹 퍼블리싱 강사\n■ 프론트엔드 퍼블리셔, 프론트엔드 퍼 블리싱 전문강사\n■ UI/UX 웹 디자인 포트폴리오 강의\n■ 웹디자인 기능사 실기 자격증반 강의\n■ 이지앤에듀프론트엔드 UI/UX 디자인 및 퍼블리싱', 'https://cdn.inflearn.com/public/users/thumbnails/87148/ddfac9e2-d7c4-4a23-a6af-0e0b8299f487'),
	(5, 'Hollo Coding(홀로코딩)', '2000년도 중반부터 본격적으로 웹개발을 시작하여 현재까지 프리랜서 개발자로 활동하고 있습니다. 약5년간 Amplix BI 솔루션 실무자 교육을 진행하고 개발을 지원하며 새로운 기술을 효율적으로 전달하는 것에 대한 많은 경험과 고민을 했습니다. ', 'https://cdn.inflearn.com/public/users/thumbnails/29401/918006ee-20b7-42a6-b743-825d4407af5c'),
	(6, '1분코딩', '서울에서 웹 개발자/디자이너로 일했고 지금은 제주에서 웹사이트 만드는 일, 강의, 영상 만드는 일, 컨텐츠 만드는 일 등 해보고 싶은거 이것저것 해보며 살고 있습니다 :)\n비주얼 임팩트가 있는 인터랙티브 웹 개발에 특히 관심이 많고 페이스북과 유튜브 1분코딩 에서 관련 기술들을 공유하고 있어요.', 'https://cdn.inflearn.com/public/users/thumbnails/22632/28555c53-dae0-4460-a9d6-83495c9dfeaa'),
	(7, 'HEROPY', '안녕하세요 heropy입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/14789/af394450-e1ca-4170-90d6-a5c767d5c0a6'),
	(8, '코딩일레븐', '15년 이상 기업과 언론사에서 프론트개발 및', 'https://cdn.inflearn.com/public/users/thumbnails/258264/8accd420-28c2-461a-a1b4-dea8a2e8fdb3'),
	(9, '메이커준', '안녕하세요 메이커준입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/633694/786d835c-6358-4334-9773-02eef4e13e91'),
	(10, '정재남', 'Naver 프론트엔드 개발자입니다.\n지식공유를 좋아하며\n꾸준히 멘토링 및 스터디를 진행하고 있습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/46840/79cbcc48-e95a-4987-b6b3-a7f36a476ffa'),
	(11, '김정환', '수업 중 궁금한 사항은 질문 사 항에 올려주세요.\n매일 한 번씩 확인하고 답변 드리겠습니다.', 'https://cdn.inflearn.com/wp-content/uploads/avatars/7238/5bd0017bf304e-bpfull.jpg'),
	(12, '김석훈', '프로그램 개발은 C 언어로 시작했으며, 자바를 거쳐 최 근에는 주로 파이썬을 사용하고 있다.\nKT ucloud 서비스의 백엔드 서버 개발 프로젝트에 참여하여, 자바로 고객의 폴더/파일에 대한 메타 정보 처리 엔진을, 파이썬으로 클라이언트 푸시 서비스를 개발하였다.\n\n또한 KT인터넷 회선의 속도 측정 프로그램, 네트워크 장비에 대한 운용관리 프로그램, 방대한  양의 트래픽 데이터 분석 프로그램을 개발한 바 있다. 개인적으로는 파이썬의 매력에 푹 빠져 되도록이면 파이썬으로 코딩하기를 즐겨하고 있다.\n\n그 일환으로 요즘은 Django를 활용한 웹 프로그래밍, Django Rest Framework를 활용한 JSON 연동, Pandas를 활용한 데이터 분석, Scikit-learn/Tensorflow를 활용한 AI 솔루션 개발 등의 프로젝트를 개발하면서 파이썬의 활용도를 넓혀가고 있다.\n\n< 저서 >', 'https://cdn.inflearn.com/public/users/thumbnails/139101/31a12cae-345c-4544-873e-561a76f74007'),
	(13, '장기효(캡틴판교)', '인프런에서 7년째 지식을 공유하고 있습니다. 지금까지 많은 응원과 격려를 보내주신 만큼 앞으로도 더 좋은 컨텐츠로 찾아뵙겠습니다. 감사합니다 😄  프런트엔드 개발 상담소 바로가기(매주 토요일 오후 9시 30분 유튜브 생방송 진행)', 'https://cdn.inflearn.com/public/users/thumbnails/54224/2bae5879-335e-47d7-9331-31e9bec5e340'),
	(14, 'The Oreum', '더 오름은 제주코딩베이스캠프의 프리미엄 브랜드로 주로 실무, 취업과 연관된 강의를 제작하고 있습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/200714/4756a3e4-1e22-4f8d-9a68-3fc956b23780'),
	(15, 'Self-coding', '소개가 없습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(16, '짐코딩 GYM CODING', '안녕하세요~!!', 'https://cdn.inflearn.com/public/users/thumbnails/432199/0126f7c5-eca4-4dd9-848f-5e094c7a0e00'),
	(17, '이재승', '- [실전 리액트 프로그래밍] 저자', 'https://cdn.inflearn.com/public/users/thumbnails/113211/3ac1cac6-3836-4617-9519-4734127eb054'),
	(18, '이효범(Beomy)', '소개가 없습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/338213/c5e54c0f-32f2-4815-b111-9c1044e41131'),
	(19, '제주코딩베이스캠프', '안녕하세요.', 'https://cdn.inflearn.com/public/users/thumbnails/170213/155ac622-ac3d-4876-856c-0e48c33a5b23'),
	(20, 'Egoing Lee', '소개가 없습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(21, '최태현', '안녕하세요 😊', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(22, '백기선', '네이버와 아마존을 거쳐 현재 Microsoft에서 시니어 소프트웨어 엔지니어로 일하고 있습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/20183/4e3da005-b0f6-4f2d-a9f9-93d8d14202af'),
	(23, 'MayB', '여러분은 야심차게 개발 강의를 수강하고 나서', 'https://cdn.inflearn.com/public/users/thumbnails/1075588/9daddbab-3bd6-4492-8e02-21c98efa63e6'),
	(24, '권 철민', '( 전) 엔코아 컨설팅', 'https://cdn.inflearn.com/public/users/thumbnails/190123/4dc91a49-355e-4774-a116-1342aa7fc9a0'),
	(25, '최상용', '안녕하세요. 지식공유자 최상용입니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(26, 'Jiwoon Jeong', '웹, 서버, 데이터를 다루는 개발자입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/206218/45982123-1c7a-4d9f-bd7b-a7081cdb1f0e'),
	(27, '이교준', '대략적인 학력  경력을 소개드리겠습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/137894/bdc65078-7824-443d-ac6c-ef00be0f6546'),
	(28, '코드바나나', '소개가 없습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(29, '조훈(Hoon Jo)', '[ 클라우드☁️솔루션_아키택처 ]', 'https://cdn.inflearn.com/public/users/thumbnailss/82032/88c10ea5-285d-4d71-b3fd-0cba52e20a63'),
	(30, '박매일', '소프트웨어 교육센터를 운영중이며 대학, 관공서, 기업체에 컨설팅 및 SW위탁교육을 진행하고 있습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(31, 'JeongSuk Lee', '한국/호주/영국에서 Full-stack developer, DevOps Engineer/Consultant로 15년 정도 일을 하고 있는 Digital Nomad IT Engineer 입니다. IT 조직 운영의 최적화를 위해 끊임 없이 새로운 주제에 대해서 공부 를 하고 있으며, 은퇴할 때까지 Engineer로 생활하고 싶다는 꿈을 가지고 있습니다. 현재는 호주 Melbourne에 있는 한 은행의 Developer Experience 팀에 서 DevOps로 활동하고 있습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(32, '김우근', ' 안녕하세요 heropy입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/1064545/3e817d41-67f6-444d-a590-b81bf0b4cf9a'),
	(33, '계영수', '안녕하세요 계영수 강사입니다. 인프라, 네트워크, AWS, DevOps등을 강의하는 전문강사입니다. ', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(34, '깊알못nodeep', '생산 및 품질 관리 프로그램, POP, 스마트 팩토리, PMS 등 컴퓨터 프로그램 개발자로 활동하다가 강의를  시작하게 되었습니다. 프로그램 개발이라는 것이 생각보다 어려운 영역은 아닙니다. 공부방법을 터득하시면 누구나 접근 할수가 있습니 다.', 'https://cdn.inflearn.com/public/users/thumbnails/443776/2fad5d90-3924-4444-a48b-24949a3f532b'),
	(35, '보안프로젝트', '보안프로젝트 ( www.boanproject.com )는 IT보안, 빅데이터, 머신러닝, IoT 등 다양한 분야의 온라인 강의, 그룹 강의를 진행하고 있습니다. ', 'https://cdn.inflearn.com/public/users/thumbnails/20967/a187680c-cca0-4a15-ab50-6b294fbe237d'),
	(36, '이진석', '파이썬과 장고에 진심인 소프트웨어 개발자', 'https://cdn.inflearn.com/public/users/thumbnails/25058/07785985-402c-49ac-bea4-33cc769709df'),
	(37, 'SungYong Lee', '소개가 없습니다.', 'https://cdn.inflearn.com/public/main/profile/default_profile.png'),
	(38, '개복치개발자', '2015년 스타트업 창업을 계기로 다양한 개발 프로젝트를 진행하였습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/177207/b8853f07-1e01-4959-9283-26f84f125777'),
	(39, '이동훈', '안녕하세요 개발자 이동훈입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/120035/3fd5a753-ff7c-41ed-97ca-9853ac4f5267'),
	(40, '나무', '모바일 서비스 스타트업을 운영 하다 블록체인 기술에 매료되어 블록체인 스타트업과 유명 가상화폐 거래소에서 백엔드 엔지니어로 근무했습니다.', 'https://cdn.inflearn.com/public/users/thumbnails/138275/ab54795d-0af2-48d9-bf8a-1f5cabba945c'),
	(41, '조코딩', '조코딩 유튜브 채널', 'https://cdn.inflearn.com/public/users/thumbnails/181806/bff57ae0-7948-4a8f-b1c2-72d4625069ed'),
	(42, 'Wintho', '안녕하세요. 여러분들께 React Native 지식을 공유해드릴 Wintho 입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/368538/3b6f352c-b0b6-4e46-8c77-b4abcc8b57a2'),
	(43, 'SpringRunner', '스프링러너는 스프링 기반 애플리케이션을 개발하는데 필요한 지식과 경험을 쌓을 수 있도록 돕는 트레이 닝 팀입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/383563/c6d8963d-0463-4f6d-9112-51784b439e90'),
	(44, '진슈', '실용주의 프로그래밍을 지향하는 프리랜서 개발자 입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/17404/24b09cad-8898-49a1-af4d-06f01e394f93'),
	(45, '개발자Park', '안녕하세요!', 'https://cdn.inflearn.com/public/users/thumbnails/259835/dcaef53d-59a9-4a95-9443-25b886c30d66'),
	(46, '비박', '학력)', 'https://cdn.inflearn.com/public/users/thumbnails/651150/b3a15c49-e03e-4379-a74b-c42b1b200124'),
	(47, '소프데이터', '소프데이터는 데이터 관 련 교육 컨텐츠 제작 팀입니다.', 'https://cdn.inflearn.com/public/users/thumbnails/335979/1ca6bf2c-e3aa-4b8f-b647-4fbe06d1b018'),
	(48, 'Rookiss', '학력', 'https://cdn.inflearn.com/public/users/thumbnails/230375/184691e8-185e-477e-9daf-aa4edc5aac38'),
	(49, '데이터리안', '실무 경험이 탄탄한 현업 분석가들이 데이터 분석 교육을 기획하고, 직접 강의합니다.', 'https://cdn.inflearn.com/public/users/thumbnails/438942/ddcc06c1-9f88-43a6-899a-33dfe59f66c3');

-- 테이블 project_team1.order_dtl 구조 내보내기
DROP TABLE IF EXISTS `order_dtl`;
CREATE TABLE IF NOT EXISTS `order_dtl` (
  `id_order_dtl` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(50) NOT NULL DEFAULT '0',
  `id_class` int NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id_order_dtl`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_dtl:~7 rows (대략적) 내보내기
DELETE FROM `order_dtl`;
INSERT INTO `order_dtl` (`id_order_dtl`, `order_number`, `id_class`, `price`) VALUES
	(1, 'H20230207121', 1, 8000),
	(2, 'H20230207121', 7, 20800),
	(3, 'H20230207121', 15, 44000),
	(4, 'H20230207142', 2, 9000),
	(5, 'H20230207142', 5, 1000),
	(6, 'H20230207893', 2, 9000),
	(7, 'H20230207893', 5, 1000);

-- 테이블 project_team1.order_mst 구조 내보내기
DROP TABLE IF EXISTS `order_mst`;
CREATE TABLE IF NOT EXISTS `order_mst` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `id_user` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(45) NOT NULL,
  `order_number` varchar(45) NOT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.order_mst:~3 rows (대략적) 내보내기
DELETE FROM `order_mst`;
INSERT INTO `order_mst` (`id_order`, `order_date`, `id_user`, `status`, `order_number`) VALUES
	(1, '2023-02-06', 'aaa', '결제 완료', 'H20230207121'),
	(2, '2023-02-07', 'aaa', '결제 완료', 'H20230207142'),
	(3, '2023-02-07', 'bbb', '결제 완료', 'H20230207893');

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
  `user_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(45) NOT NULL,
  `profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `nickname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `telnum` varchar(45) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 project_team1.user:~1 rows (대략적) 내보내기
DELETE FROM `user`;
INSERT INTO `user` (`user_id`, `password`, `name`, `profile`, `nickname`, `email`, `telnum`, `description`) VALUES
	('aaa', 'aaa123', '가나다', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=', 'aaa', 'aaa@naver.com', '010-1234-5678', 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ'),
	('aaa@naver.com', '$2a$10$FrAYiI399.fT7CpZKjZ2b.Dwy.adjDL996wcM0hOHcA7QzY7jK8lG', 'aaaa', NULL, 'aaa', 'aaa@naver.com', '10123456', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
