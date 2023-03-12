/*
  Warnings:

  - You are about to drop the `userdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `userdata`;

-- CreateTable
CREATE TABLE `user_data` (
    `email` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CPF` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_data_email_key`(`email`),
    UNIQUE INDEX `user_data_CPF_key`(`CPF`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
