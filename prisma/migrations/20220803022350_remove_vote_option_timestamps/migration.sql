/*
  Warnings:

  - You are about to drop the column `createdAt` on the `VoteOption` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `VoteOption` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `VoteOption` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
