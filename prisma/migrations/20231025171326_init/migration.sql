/*
  Warnings:

  - You are about to drop the column `frist_name` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "frist_name",
ADD COLUMN     "first_name" TEXT;
