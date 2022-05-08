CREATE TABLE "chores"(
    "id"    TEXT NOT NULL UNIQUE,
    "name"  TEXT NOT NULL,
    "description"   TEXT,
    "assigned_to"   TEXT, FOREIGN KEY("assigned_to") REFERENCES "people"("id"),
    PRIMARY KEY("id")
)