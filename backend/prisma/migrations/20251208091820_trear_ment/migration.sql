/*
  Warnings:

  - You are about to drop the column `email` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Treatment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Treatment_email_key";

-- DropIndex
DROP INDEX "Treatment_username_key";

-- AlterTable
ALTER TABLE "Treatment" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "updatedAt",
DROP COLUMN "username";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'patient';
