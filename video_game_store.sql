/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.6.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: video_game_store
-- ------------------------------------------------------
-- Server version	10.6.18-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Games`
--

DROP TABLE IF EXISTS `Games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Games` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `year` bigint(20) unsigned NOT NULL,
  `console_id` bigint(20) unsigned NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `console_id` (`console_id`),
  CONSTRAINT `Games_ibfk_1` FOREIGN KEY (`console_id`) REFERENCES `console` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Games`
--

LOCK TABLES `Games` WRITE;
/*!40000 ALTER TABLE `Games` DISABLE KEYS */;
INSERT INTO `Games` VALUES (1,'The Last of Us Part II',2020,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(2,'Spider-Man: Miles Morales',2020,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(3,'God of War',2018,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(4,'Uncharted 4: A Thief\'s End',2016,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(5,'Horizon Zero Dawn',2017,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(6,'Bloodborne',2015,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(7,'Gran Turismo Sport',2017,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(8,'Red Dead Redemption 2',2018,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(9,'Final Fantasy VII Remake',2020,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(10,'Days Gone',2019,7,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(11,'Demon\'s Souls',2020,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(12,'Ratchet & Clank: Rift Apart',2021,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(13,'Returnal',2021,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(14,'Astro\'s Playroom',2020,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(15,'Resident Evil Village',2021,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(16,'Final Fantasy XVI',2023,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(17,'Gran Turismo 7',2022,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(18,'Spider-Man: Remastered',2020,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(19,'Sackboy: A Big Adventure',2020,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(20,'The Pathless',2020,8,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(21,'Super Mario Galaxy',2007,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(22,'The Legend of Zelda: Twilight Princess',2006,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(23,'Super Smash Bros. Brawl',2008,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(24,'Mario Kart Wii',2008,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(25,'Metroid Prime 3: Corruption',2007,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(26,'Donkey Kong Country Returns',2010,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(27,'Super Mario Galaxy 2',2010,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(28,'Xenoblade Chronicles',2010,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(29,'New Super Mario Bros. Wii',2009,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(30,'Skyward Sword',2011,9,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(31,'The Legend of Zelda: Breath of the Wild',2017,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(32,'Super Mario Odyssey',2017,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(33,'Animal Crossing: New Horizons',2020,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(34,'Mario Kart 8 Deluxe',2017,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(35,'Splatoon 2',2017,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(36,'Super Smash Bros. Ultimate',2018,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(37,'Fire Emblem: Three Houses',2019,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(38,'Xenoblade Chronicles 2',2017,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(39,'Luigi\'s Mansion 3',2019,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(40,'Pokémon Sword and Shield',2019,10,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(41,'Halo 5: Guardians',2015,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(42,'Forza Horizon 4',2018,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(43,'Gears 5',2019,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(44,'Minecraft',2011,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(45,'Sea of Thieves',2018,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(46,'State of Decay 2',2018,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(47,'Cuphead',2017,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(48,'Ori and the Blind Forest',2015,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(49,'The Witcher 3: Wild Hunt',2015,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(50,'Titanfall 2',2016,11,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(51,'Halo Infinite',2021,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(52,'Forza Horizon 5',2021,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(53,'Gears Tactics',2020,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(54,'Fable',2024,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(55,'Senua\'s Saga: Hellblade II',2024,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(56,'The Medium',2020,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(57,'Psychonauts 2',2021,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(58,'Elden Ring',2022,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(59,'Call of Duty: Modern Warfare II',2022,12,'2024-12-09 00:05:12','2024-12-09 00:05:12'),(60,'Starfield',2023,12,'2024-12-09 00:05:12','2024-12-09 00:05:12');
/*!40000 ALTER TABLE `Games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `birthdate` datetime NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'daevidpaerez@gmail.com','Christopher Fall','1990-10-02 00:00:00','Colombia','Ibagué','2024-12-09 00:21:37','2024-12-09 00:21:37');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Sony','2024-12-08 23:50:37','2024-12-08 23:50:37'),(2,'Nintendo','2024-12-08 23:50:37','2024-12-08 23:50:37'),(3,'Microsoft','2024-12-08 23:50:37','2024-12-08 23:50:37');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `console`
--

DROP TABLE IF EXISTS `console`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `console` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `company_id` bigint(20) unsigned NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `console_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `console`
--

LOCK TABLES `console` WRITE;
/*!40000 ALTER TABLE `console` DISABLE KEYS */;
INSERT INTO `console` VALUES (7,'Play 4',1,'2024-12-08 23:52:12','2024-12-08 23:52:12'),(8,'Play 5',1,'2024-12-08 23:52:12','2024-12-08 23:52:12'),(9,'Wiu',2,'2024-12-08 23:52:12','2024-12-08 23:52:12'),(10,'Nintendo Switch',2,'2024-12-08 23:52:12','2024-12-08 23:52:12'),(11,'Xbox One ',3,'2024-12-08 23:52:12','2024-12-08 23:52:12'),(12,'Xbox Series X|S',3,'2024-12-08 23:52:12','2024-12-08 23:52:12');
/*!40000 ALTER TABLE `console` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-08 20:09:35
