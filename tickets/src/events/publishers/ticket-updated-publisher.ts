import { Publisher, Subjects, TicketUpdatedEvent } from '@g_zone/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}

