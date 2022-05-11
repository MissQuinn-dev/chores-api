CREATE TABLE "chores"(
    "id"    TEXT NOT NULL UNIQUE,
    "name"  TEXT NOT NULL,
    "description"   TEXT, 
    "interval" INTEGER,
    PRIMARY KEY("id")
)