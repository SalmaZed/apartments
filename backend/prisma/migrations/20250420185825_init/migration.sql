-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "unitName" TEXT NOT NULL,
    "unitNumber" INTEGER NOT NULL,
    "project" TEXT NOT NULL,
    "squareFeet" INTEGER NOT NULL,
    "rentPrice" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Apartment_unitNumber_key" ON "Apartment"("unitNumber");
