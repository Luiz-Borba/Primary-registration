-- CreateTable
CREATE TABLE `UserData` (
    `email` VARCHAR(191) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `CPF` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserData_email_key`(`email`),
    UNIQUE INDEX `UserData_CPF_key`(`CPF`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
