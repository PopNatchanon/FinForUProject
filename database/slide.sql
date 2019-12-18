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

 Date: 18/12/2019 10:53:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for slide
-- ----------------------------
DROP TABLE IF EXISTS `slide`;
CREATE TABLE `slide`  (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name_brand` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `note_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `url_banner` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type_icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status_active` enum('0','1','','') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `upload_by` int(11) NULL DEFAULT NULL,
  `upload_time` datetime(0) NULL DEFAULT NULL,
  `update_by` int(11) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  `start_period` datetime(0) NULL DEFAULT NULL,
  `end_period` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 105 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of slide
-- ----------------------------
INSERT INTO `slide` VALUES (000016, '', '', NULL, NULL, 'brand1.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000017, '', '', NULL, NULL, 'brand2.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000018, '', '', NULL, NULL, 'brand1.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000019, '', '', NULL, NULL, 'brand2.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000020, '', '', NULL, NULL, 'brand3.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000021, '', '', NULL, NULL, 'brand4.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000022, '', '', NULL, NULL, 'brand5.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000023, '', '', NULL, NULL, 'brand6.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000024, '', '', NULL, NULL, 'brand7.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000025, '', '', NULL, NULL, 'brand8.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000028, '', '', NULL, NULL, 'brand9.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-12-07 10:54:23', NULL, NULL);
INSERT INTO `slide` VALUES (000029, '', '', NULL, NULL, 'brand10.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000030, '', '', NULL, NULL, '01.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:13:20', NULL, NULL);
INSERT INTO `slide` VALUES (000031, '', '', NULL, NULL, '02.png', '', 'icon_brand', '0', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000032, '', '', NULL, NULL, '03.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:28:13', NULL, NULL);
INSERT INTO `slide` VALUES (000033, '', '', NULL, NULL, '04.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:12:59', NULL, NULL);
INSERT INTO `slide` VALUES (000034, '', '', NULL, NULL, '05.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:12:37', NULL, NULL);
INSERT INTO `slide` VALUES (000035, '', '', NULL, NULL, '06.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:32:40', NULL, NULL);
INSERT INTO `slide` VALUES (000036, '', '', NULL, NULL, '07.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:13:01', NULL, NULL);
INSERT INTO `slide` VALUES (000037, '', '', NULL, NULL, '08.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:28:29', NULL, NULL);
INSERT INTO `slide` VALUES (000038, '', '', NULL, NULL, '09.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:24:27', NULL, NULL);
INSERT INTO `slide` VALUES (000039, '', '', NULL, NULL, '10.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:12:56', NULL, NULL);
INSERT INTO `slide` VALUES (000040, '', '', NULL, NULL, '11.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:24:30', NULL, NULL);
INSERT INTO `slide` VALUES (000041, '', '', NULL, NULL, '12.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:14:37', NULL, NULL);
INSERT INTO `slide` VALUES (000042, '', '', NULL, NULL, '13.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:32:55', NULL, NULL);
INSERT INTO `slide` VALUES (000043, '', '', NULL, NULL, '14.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:12:30', NULL, NULL);
INSERT INTO `slide` VALUES (000044, '', '', NULL, NULL, 'brand25.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000045, '', '', NULL, NULL, 'brand26.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000046, '', '', NULL, NULL, 'brand27.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000047, '', '', NULL, NULL, 'brand28.png', '', 'icon_brand', '1', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000048, '', '', NULL, NULL, 'brand29.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:32:10', NULL, NULL);
INSERT INTO `slide` VALUES (000055, '', '', NULL, NULL, '15.png', '', 'icon_brand', '1', NULL, NULL, 10, '2019-10-18 15:12:28', NULL, NULL);
INSERT INTO `slide` VALUES (000073, 'adwdadw', 'adwadwa', NULL, NULL, '2019-10-17_banner-adwdadw.jpg', 'uploads/slide', 'banner', '1', 6, '2019-10-17 14:47:52', 6, '2019-11-19 12:04:44', NULL, NULL);
INSERT INTO `slide` VALUES (000075, 'Green Sale', 'Green Sale', NULL, NULL, '2019-10-17_16-50-00_banner.jpg', 'uploads/slide', 'banner', '1', 6, '2019-10-17 14:49:21', 6, '2019-11-19 12:04:51', NULL, NULL);
INSERT INTO `slide` VALUES (000077, 'White Sale', '20% FLAT', NULL, NULL, '2019-10-17_14-51-05_banner.jpg', 'uploads/slide', 'banner', '1', 6, '2019-10-17 14:51:05', 6, '2019-11-19 12:04:46', NULL, NULL);
INSERT INTO `slide` VALUES (000078, 'Amazing DEALS', '60 Percent', NULL, NULL, '2019-10-17_14-51-49_banner.jpg', 'uploads/slide', 'banner', '1', 6, '2019-10-17 14:51:49', 6, '2019-11-19 12:04:43', NULL, NULL);
INSERT INTO `slide` VALUES (000079, 'Red Brand', 'Grand OFFER BUY 1 GET 3', NULL, NULL, '2019-10-17_14-52-19_banner.jpg', 'uploads/slide', 'banner', '1', 6, '2019-10-17 14:52:19', 6, '2019-11-19 12:04:48', NULL, NULL);
INSERT INTO `slide` VALUES (000080, 'cacascsac', 'ascasas', NULL, NULL, '2019-10-17_15-18-03_banner.png', 'uploads/slide', 'banner', '1', 6, '2019-10-17 15:18:03', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000081, 'wadwadwa', 'dwadwa', NULL, NULL, '2019-10-17_15-22-19_banner.png', 'uploads/slide', 'banner', '1', 6, '2019-10-17 15:22:19', 6, '2019-10-17 17:18:34', NULL, NULL);
INSERT INTO `slide` VALUES (000082, 'sdfdsfds', '', NULL, NULL, '2019-10-17_15-25-02_banner.png', 'uploads/slide', 'banner', '1', 6, '2019-10-17 15:25:02', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000083, 'BN1', 'AWAD', NULL, NULL, '2019-10-17_16-53-57_banner.png', 'uploads/slide', 'banner', '1', 6, '2019-10-17 16:53:57', 6, '2019-10-17 16:54:54', NULL, NULL);
INSERT INTO `slide` VALUES (000085, 'wadwadwadwa', 'dwadwad', NULL, NULL, '2019-10-18_14-11-54_icon.png', 'uploads/slide', 'icon_brand', '1', 6, '2019-10-18 14:11:54', 6, '2019-10-18 14:32:13', NULL, NULL);
INSERT INTO `slide` VALUES (000086, 'Oakley', 'Oakley', NULL, NULL, '2019-10-18_15-14-31_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:14:31', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000087, 'test', 'test', NULL, NULL, '2019-10-18_15-29-20_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:29:20', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000088, 'test', 'test', NULL, NULL, '2019-10-18_15-29-37_icon.png', 'uploads/icon_brand', 'icon_brand', '1', 10, '2019-10-18 15:29:37', 10, '2019-10-18 15:30:07', NULL, NULL);
INSERT INTO `slide` VALUES (000089, 'test', 'test', NULL, NULL, '2019-10-18_15-29-56_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:29:56', 10, '2019-12-07 10:54:28', NULL, NULL);
INSERT INTO `slide` VALUES (000090, 'test', 'test', NULL, NULL, '2019-10-18_15-31-21_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:31:21', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000091, 'test', 'test', NULL, NULL, '2019-10-18_15-31-36_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:31:36', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000092, 'test', 'test', NULL, NULL, '2019-10-18_15-31-50_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:31:50', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000093, 'test', 'test', NULL, NULL, '2019-10-18_15-32-06_icon.png', 'uploads/icon_brand', 'icon_brand', '0', 10, '2019-10-18 15:32:06', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000094, 'test', 'test', NULL, NULL, '2019-10-18_15-50-14_banner.jpg', 'uploads/slide', 'banner', '1', 10, '2019-10-18 15:50:14', 10, '2019-10-18 15:50:40', NULL, NULL);
INSERT INTO `slide` VALUES (000095, 'King1', 'King1', NULL, NULL, '2019-11-19_12-04-36_banner.jpg', 'uploads/slide', 'banner', '0', 6, '2019-11-19 12:04:36', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000096, 'King2', 'King2', NULL, NULL, '2019-11-19_12-05-04_banner.jpg', 'uploads/slide', 'banner', '0', 6, '2019-11-19 12:05:04', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000097, 'King3', 'King3', NULL, NULL, '2019-11-19_12-05-17_banner.jpg', 'uploads/slide', 'banner', '0', 6, '2019-11-19 12:05:17', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000098, 'King4', 'King4', NULL, NULL, '2019-11-19_12-05-27_banner.jpg', 'uploads/slide', 'banner', '0', 6, '2019-11-19 12:05:27', NULL, NULL, NULL, NULL);
INSERT INTO `slide` VALUES (000099, 'ทดสอบโฆษณา', 'เพชร Dunkins DIamond ลด 50 %', 'ทดสอบ NOTE Detail', 'https://www.dunkinsdiamonds.com/', 'chanel.jpg', 'uploads/publish/Popular_promotions', 'promotions', '1', 6, '2019-10-18 15:50:40', NULL, '0000-00-00 00:00:00', '2019-12-06 14:53:22', '2020-01-01 14:53:27');
INSERT INTO `slide` VALUES (000100, 'แบรนด์เสื้อผ้า', 'เสื้อผ้าลด 90 %', NULL, 'https://www.looksi.com/women/clothing/', 'dunkins.png', 'uploads/publish/Popular_promotions', 'promotions', '1', 6, '2019-11-27 15:24:14', NULL, NULL, '2019-12-20 15:24:22', '2020-01-03 15:24:26');
INSERT INTO `slide` VALUES (000103, 'Fin', 'ราคาพิเศษลดราคา 50%', 'ทดสอบ insert', NULL, 'Jubillee.jpg', 'uploads/publish/Popular_promotions', 'promotions', '1', 10, '2019-12-11 11:30:04', NULL, NULL, '2019-12-11 00:00:00', '2019-12-31 23:59:59');
INSERT INTO `slide` VALUES (000104, 'FinFF', 'ลดราคา', 'ทดสอบ insert url', 'https://www.finforu.com/', 'pandora.jpg', 'uploads/publish/Popular_promotions', 'promotions', '1', 10, '2019-12-11 13:39:37', NULL, NULL, '2019-12-11 00:00:00', '2019-12-11 23:59:59');

SET FOREIGN_KEY_CHECKS = 1;
