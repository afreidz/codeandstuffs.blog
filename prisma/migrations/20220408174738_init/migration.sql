-- CreateTable
CREATE TABLE `like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fingerprint` INTEGER NOT NULL,
    `post` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `like_fingerprint_key`(`fingerprint`),
    UNIQUE INDEX `like_fingerprint_post_key`(`fingerprint`, `post`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
