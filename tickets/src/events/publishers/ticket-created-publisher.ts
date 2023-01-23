import { Publisher, Subjects, TicketCreatedEvent } from '@g_zone/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

