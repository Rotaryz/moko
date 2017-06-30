/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : moko111

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-30 16:25:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for memberslist
-- ----------------------------
DROP TABLE IF EXISTS `memberslist`;
CREATE TABLE `memberslist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `phone` int(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memberslist
-- ----------------------------
INSERT INTO `memberslist` VALUES ('1', 'manzer', '55555', 'manzerpan', '2017-06-30 15:07:14');
INSERT INTO `memberslist` VALUES ('2', '1', '1', '1', '2017-06-30 15:30:54');
INSERT INTO `memberslist` VALUES ('3', '111111', '1', '1', '2017-06-30 15:36:18');
