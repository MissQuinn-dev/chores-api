CREATE TABLE "ledger"(
    "id"    TEXT NOT NULL UNIQUE,
    "person_id" TEXT,
    "chore_id"  TEXT NOT NULL,
    "completed_on"  TEXT,
    PRIMARY KEY ("id"),
    FOREIGN KEY("person_id") REFERENCES "people"("id"),
    FOREIGN KEY("chore_id") REFERENCES "chores"("id")
)
