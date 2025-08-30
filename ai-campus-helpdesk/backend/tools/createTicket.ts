import fs from "fs";
import path from "path";

const ticketsFile = path.join(__dirname, "../data/tickets.json");

export async function createTicket(ticket: any) {
  let tickets: any[] = [];
  if (fs.existsSync(ticketsFile)) {
    tickets = JSON.parse(fs.readFileSync(ticketsFile, "utf8"));
  }
  tickets.push(ticket);
  fs.writeFileSync(ticketsFile, JSON.stringify(tickets, null, 2));
  return ticket;
}
