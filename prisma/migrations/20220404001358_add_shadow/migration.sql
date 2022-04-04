-- CreateTable
CREATE TABLE `Appreciation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fingerprint` VARCHAR(191) NOT NULL,
    `post` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Appreciation_fingerprint_key`(`fingerprint`),
    UNIQUE INDEX `Appreciation_fingerprint_post_key`(`fingerprint`, `post`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
