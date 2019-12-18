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

 Date: 18/12/2019 11:10:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store`  (
  `id_store` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name_host` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `tel` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `open` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `id_history` int(6) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `address` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `facebook` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `line` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `no_license` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `detail` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `bio` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_typestore` int(6) UNSIGNED ZEROFILL NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `qrcode` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `path_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_vode` int(6) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `id_block` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  PRIMARY KEY (`id_store`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES (000006, 'ปลาทู', 'TEST@gmail.com', '23deeb829a5a16ab39c132faa416a80', 'สุภาพร จือเหลียง', '0627121029', '9', NULL, '110 ม.1 ต.ดอนมะโนรา อ.บางคนที  จ.สมุทรสงคราม', 'whileyui28', '@whileyui28', '178-956-2352', 'ใครว่าเพชรใบเซอร์ต้องซื้อเงินสด? นอกจากจะใช้บัตรเครดิตได้โดยไม่ชาร์จเพิ่มแล้ว Proud Gems ยังให้คุณได้ฟินกว่า ด้วย Promotion สุดพิเศษที่สามารถแบ่งชำระ 0% 3 เดือน ด้วยบัตรเครดิตกสิกรไทย ไทยพาณิชย์และ Citibank\r\n\r\nไม่ว่าจะ GIA HRD เม็ดเล็กเม็ดใหญ่ ทั้งเพชรทั้งตัวเรือน เราจัดหนัก 0% ได้ทุกชิ้น ทุกเม็ด ทั้งร้าน แบ่งเบาภาระให้คุณได้จ่ายสบายกว่าเดิมโดยไม่มีดอกเบี้ยมากวนใจ\r\n\r\nสอบถามรายละเอียดเพิ่มเติมได้ที่ Proud Gems ชั้น 3 ข้าง Habitat หน้าลิฟท์ หรือโทร 087-4442466 ได้ทุกวันตั้งแต่เวลา  11.00-21.00 น. นะคะ', 'ใครว่าเพชรใบเซอร์ต้องซื้อเงินสด? นอกจากจะใช้บัตรเครดิตได้โดยไม่ชาร์จเพิ่มแล้ว Proud Gems ยังให้คุณได้ฟินกว่า ด้วย Promotion สุดพิเศษที่สามารถแบ่งชำระ 0% 3 เดือน ด้วยบัตรเครดิตกสิกรไทย ไทยพาณิชย์และ Citibank\r\n\r\nไม่ว่าจะ GIA HRD เม็ดเล็กเม็ดใหญ่ ทั้งเพชรทั้งตัวเรือน เราจัดหนัก 0% ได้ทุกชิ้น ทุกเม็ด ทั้งร้าน แบ่งเบาภาระให้คุณได้จ่ายสบายกว่าเดิมโดยไม่มีดอกเบี้ยมากวนใจ\r\n\r\nสอบถามรายละเอียดเพิ่มเติมได้ที่ Proud Gems ชั้น 3 ข้าง Habitat หน้าลิฟท์ หรือโทร 087-4442466 ได้ทุกวันตั้งแต่เวลา  11.00-21.00 น. นะคะ', 000001, 'Screen-Shot-2016-05-30-at-1.29.21-PM.jpg', 'upload', '', '', NULL, '2019-03-17 02:00:21', 000000);
INSERT INTO `store` VALUES (000009, 'valentine', 'Valentine@mail.com', '23deeb829a5a16ab39c132faa416a80e', 'valentine', '0800717328', '9', NULL, '244/6-8 ทวีวิบูลย์เพลส ชั้น2 ห้อง3203 ซอยลาดพร้าว107 แขวนคลองจั่น เขตบางกะปิ กรุงเทพฯ 10240', '@valentine', '@valentine', '172003558863', 'วันนักบุญวาเลนไทน์ หรือเรียก วันวาเลนไทน์ ตรงกับวันที่ 14 กุมภาพันธ์ของทุกปี วันวาเลนไทน์มีการเฉลิมฉลองในหลายประเทศทั่วโลก ส่วนใหญ่เป็นประเทศทางตะวันตก แม้จะยังเป็นวันทำงานในทุกประเทศเหล่านั้นก็ตาม', 'วันนักบุญวาเลนไทน์ หรือเรียก วันวาเลนไทน์ ตรงกับวันที่ 14 กุมภาพันธ์ของทุกปี วันวาเลนไทน์มีการเฉลิมฉลองในหลายประเทศทั่วโลก ส่วนใหญ่เป็นประเทศทางตะวันตก แม้จะยังเป็นวันทำงานในทุกประเทศเหล่านั้นก็ตาม', 000002, 'LK19_G_WebBanner_IT_1200x400_EN_7_2_2019_8_17_22_AM.jpg', 'upload', '', '', NULL, '2019-04-19 02:01:41', 000000);
INSERT INTO `store` VALUES (000010, 'Mark', 'a@a.a', '23deeb829a5a16ab39c132faa416a80e', 'valentine', '0800717328', '9', NULL, '244/6-8 ทวีวิบูลย์เพลส ชั้น2 ห้อง3203 ซอยลาดพร้าว107 แขวนคลองจั่น เขตบางกะปิ กรุงเทพฯ 10240', '@valentine', '@valentine', '172003558863', 'วันนักบุญวาเลนไทน์ หรือเรียก วันวาเลนไทน์ ตรงกับวันที่ 14 กุมภาพันธ์ของทุกปี วันวาเลนไทน์มีการเฉลิมฉลองในหลายประเทศทั่วโลก ส่วนใหญ่เป็นประเทศทางตะวันตก แม้จะยังเป็นวันทำงานในทุกประเทศเหล่านั้นก็ตาม', 'วันนักบุญวาเลนไทน์ หรือเรียก วันวาเลนไทน์ ตรงกับวันที่ 14 กุมภาพันธ์ของทุกปี วันวาเลนไทน์มีการเฉลิมฉลองในหลายประเทศทั่วโลก ส่วนใหญ่เป็นประเทศทางตะวันตก แม้จะยังเป็นวันทำงานในทุกประเทศเหล่านั้นก็ตาม', 000002, '2019-04-18-1555614101.jpg', 'upload', '', '', NULL, '2019-04-19 02:01:41', 000000);
INSERT INTO `store` VALUES (000021, 'weding Ring ', 'hello@mail.com', '14e1b600b1fd579f47433b88e8d85291', 'test', '020365789', '8', NULL, 'test', '', '', '123456789', NULL, '', 000002, '2019-06-06-1559757311.png', 'upload', '', '', NULL, '06-06-19 12:55:11', 000000);
INSERT INTO `store` VALUES (000022, 'HALO RING Collection', 'v@v.v', '14e1b600b1fd579f47433b88e8d85291', 'nfgh', '0234567856', '12', NULL, 'test', '', '', '123456789', NULL, '', 000001, '2019-06-06-1559757882.png', 'upload', '', '', NULL, '06-06-19 01:04:42', 000000);
INSERT INTO `store` VALUES (000023, 'A Store', 'chaipaphat@hotmail.com', '0fd328e534ce3465f757a4ceb5499dbc', 'A', '2321312312', '12', NULL, '11111', '', '', '1123', '', '', 000001, '2019-05-13-1557767048.jpg', 'upload', '', '', NULL, '28-09-19 03:46:38', 000000);
INSERT INTO `store` VALUES (000024, 'M', 'IOOO@GMAIL.COM', '1f32aa4c9a1d2ea010adcf2348166a04', 'M', '0333222', '1', NULL, 'ฺBKK', '', '', '12345', NULL, '', 000002, '2019-10-29-1572319027.jpg', 'upload', '', '', NULL, '29-10-19 03:17:07', 000000);

SET FOREIGN_KEY_CHECKS = 1;
