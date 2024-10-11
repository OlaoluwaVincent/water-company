cd pocketbase || exit

# Gawk tuah typescript
npx pocketbase-typegen --db ./pb_data/data.db --out ../src/lib/types/pocketbase-types.ts
