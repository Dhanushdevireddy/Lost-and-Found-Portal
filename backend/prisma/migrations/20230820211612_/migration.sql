/*
  Warnings:

  - You are about to drop the column `published` on the `Object` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Object" DROP COLUMN "published",
ADD COLUMN     "resolved" BOOLEAN NOT NULL DEFAULT false;
