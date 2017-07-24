/*
Navicat MySQL Data Transfer

Source Server         : Rotary
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : moko

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-30 17:37:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `model_img` varchar(255) DEFAULT NULL,
  `model_type` varchar(255) DEFAULT NULL,
  `model_name` varchar(255) DEFAULT NULL,
  `watch` varchar(255) DEFAULT NULL,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('16', 'http://img1qn.moko.cc/2017-06-23/8c707726-6737-433d-b6c2-e4aeb5a4e9bb.jpg', '北京平面模特金佐', '平面模特儿', '20989', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('17', 'http://img.mb.moko.cc/2017-06-13/aeb0c5d5-4000-4bfa-b93b-a2189952f930.jpg', 'Abby啊', '平面模特儿', '28972', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('18', 'http://img1qn.moko.cc/2017-06-21/3e91d7ca-c5a8-4e47-8f0c-b19ff700b88b.jpg', '摄影师汤度野', '时装摄影', '15883', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('19', 'http://img1qn.moko.cc/2017-06-17/8bb4a692-2202-4888-853f-2dddac7c2e08.jpg', '摄影师卢永强', '时装摄影', '16164', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('20', 'http://img1qn.moko.cc/2017-06-21/fdbb7f02-6934-4d59-b1a2-69cbc9e38220.jpg', '丽丽Lee', '平面模特儿', '19657', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('21', 'http://img1qn.moko.cc/2017-06-21/38c46dc9-1952-4ae4-a728-95ee8def3ca5.jpg', 'Derek6Dong', '其他职业', '13731', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('22', 'http://img1qn.moko.cc/2017-06-21/27485d93-2a72-4dc7-841e-1f863535fa04.jpg', 'E-WORK鬼刃', '图片后期', '13659', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('23', 'http://img1qn.moko.cc/2017-06-19/1e223ae7-ba24-4041-998b-eb362607ed68.jpg', '摄影师汤度野', '时装摄影', '16586', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('24', 'http://img1qn.moko.cc/2017-06-20/771d96db-536f-4509-82aa-13de51259f44.jpg', '何书荣', '时装摄影', '21099', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('25', 'http://img1qn.moko.cc/2017-06-20/bf74d97e-6eac-4653-9ec7-d61cb63eadd7.jpg', '婷婷Sun', '图片后期', '12609', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('26', 'http://img1qn.moko.cc/2017-06-21/3b19bf2b-94d4-4ecb-ab41-486e0b3d0d57.jpg', '丁o丁', '图片后期', '12055', '2017-06-30 14:11:28');
INSERT INTO `home` VALUES ('27', 'http://img1qn.moko.cc/2017-06-21/30b4b7c6-efe5-4959-b0ea-9f3abaaa1505.jpg', '向日葵Arquette', '广告摄影', '9661', '2017-06-30 14:11:28');
