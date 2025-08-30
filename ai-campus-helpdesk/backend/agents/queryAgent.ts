import { searchKB } from "../tools/searchKB";
import { createTicket } from "../tools/createTicket";
import { sendEmail } from "../tools/sendEmail";

let ticketCounter = 1;

export async function handleQuery(question: string) {
  if (question.toLowerCase().includes("how") || question.toLowerCase().includes("when")) {
    const kb = await searchKB(question);
    return { type: "info", answer: kb };
  } else if (question.toLowerCase().includes("request") || question.toLowerCase().includes("apply")) {
    const ticket = await createTicket({ id: ticketCounter++, subject: question, status: "open" });
    return { type: "action", answer: `Ticket created ✅ ID: ${ticket.id}` };
  } else {
    return { type: "escalation", answer: "Forwarding to staff 🚨" };
  }
}
