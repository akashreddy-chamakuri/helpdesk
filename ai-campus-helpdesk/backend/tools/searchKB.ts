import kb from "../data/kb.json";

export async function searchKB(query: string) {
  const result = kb.find((item: any) => query.toLowerCase().includes(item.keyword));
  return result ? result.answer : "I couldn't find that in knowledge base.";
}
