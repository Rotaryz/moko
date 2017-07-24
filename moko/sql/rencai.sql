/*
Navicat MySQL Data Transfer

Source Server         : Rotary
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : moko

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-30 17:37:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for rencai
-- ----------------------------
DROP TABLE IF EXISTS `rencai`;
CREATE TABLE `rencai` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `rencai_img` varchar(255) NOT NULL,
  `rencai_name` varchar(255) NOT NULL,
  `addtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rencai
-- ----------------------------
INSERT INTO `rencai` VALUES ('2', 'http://img.mb.moko.cc/2017-06-07/96cf0f85-51d6-406f-9183-2dd30393642b.jpg', '/郑珉宇', '2017-06-30 14:24:18');
INSERT INTO `rencai` VALUES ('3', 'http://img1qn.moko.cc/2017-06-19/8c50f84a-2c0d-4ade-b677-3ba2dda61288.jpg', '/男模高铭', '2017-06-30 14:24:18');
INSERT INTO `rencai` VALUES ('4', 'http://img1qn.moko.cc/2017-06-28/b996fdfe-1a80-4698-a7b0-c4e8e1bd9a81.jpg', '黑马秀/馨菲Iris', '2017-06-30 14:24:18');
INSERT INTO `rencai` VALUES ('5', 'http://img1qn.moko.cc/2017-06-27/e08b206c-67a4-41ff-800d-315a5f5d3f66.jpg', '/模特小阿庆', '2017-06-30 14:24:18');
