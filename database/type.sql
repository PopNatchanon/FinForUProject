/*
 Navicat Premium Data Transfer

 Source Server         : finforu
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : localhost:3306
 Source Schema         : finforu

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 18/12/2019 10:48:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id_type` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_head` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `image_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status_delete` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (000001, 'เครื่องประดับ', 'diamond.png', 'upload', 'เครื่องประดับ.jpg', 'diamond.png', '0');
INSERT INTO `type` VALUES (000002, 'นาฬิกา', 'ring.png', 'upload', 'นาฬิกา.jpg', 'watch.png', '0');
INSERT INTO `type` VALUES (000003, 'พระ', 'necklace.png', 'upload', 'พระ.jpg', 'Stone.png', '0');
INSERT INTO `type` VALUES (000004, 'แว่น', 'bracelet.png', 'upload', 'แว่นตา.jpg', 'sunglasses.png', '0');
INSERT INTO `type` VALUES (000005, 'ทอง', 'diamond-sui.png', 'upload', 'ทอง.jpg', 'Gold.png', '0');
INSERT INTO `type` VALUES (000006, 'กระเป๋า', 'earing.png', 'upload', 'กระเป๋า.jpg', 'Bag.png', '0');
INSERT INTO `type` VALUES (000007, 'เข็มขัด', 'chain.png', 'upload', 'เข็มขัด.jpg', 'belt.png', '0');
INSERT INTO `type` VALUES (000008, 'ของตกแต่งบ้าน', 'gold.png', 'upload', 'ของตกแต่ง.jpg', 'lampade.png', '0');
INSERT INTO `type` VALUES (000009, 'รองเท้า', 'pearl.png', 'upload', 'รองเท้า.jpg', 'shoe.png', '0');
INSERT INTO `type` VALUES (000010, 'อื่นๆ', 'silver.png', 'upload', 'อื่นๆ.jpg', 'other.jpg', '0');

SET FOREIGN_KEY_CHECKS = 1;
